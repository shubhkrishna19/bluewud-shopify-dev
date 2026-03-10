/**
 * Whisper Bottom Sheet - Mobile UX Controller
 * Handles gestures, transitions, and accessibility for the bottom sheet.
 */

class WhisperBottomSheet extends HTMLElement {
    constructor() {
        super();
        this.sheet = this;
        this.drawer = this.querySelector('.whisper-bottom-sheet__drawer');
        this.backdrop = this.querySelector('.whisper-bottom-sheet__backdrop');
        this.closeButtons = this.querySelectorAll('[data-close-sheet]');
        this.isDragging = false;
        this.startY = 0;
        this.currentY = 0;

        this.init();
    }

    init() {
        this.closeButtons.forEach(btn => btn.addEventListener('click', () => this.close()));

        // Global listener for triggers
        document.addEventListener('click', (e) => {
            const trigger = e.target.closest('[data-whisper-quick-add-trigger]');
            if (trigger && window.innerWidth < 1024) {
                e.preventDefault();
                e.stopPropagation();
                this.handleTrigger(trigger);
            }
        });

        // Touch Gestures
        const handle = this.querySelector('[data-drag-handle]');
        if (handle) {
            handle.addEventListener('touchstart', this.handleTouchStart.bind(this));
            handle.addEventListener('touchmove', this.handleTouchMove.bind(this));
            handle.addEventListener('touchend', this.handleTouchEnd.bind(this));
        }
    }

    async handleTrigger(trigger) {
        const productId = trigger.dataset.productId;
        const variantId = trigger.dataset.variantId;
        const productUrl = trigger.dataset.productUrl;

        this.open();
        this.setLoading(true);

        try {
            // Fetch the product's quick shop content
            const response = await fetch(`${productUrl}?view=whisper-quick-add`);
            if (!response.ok) throw new Error('Failed to load product options');
            const html = await response.text();
            const contentArea = this.querySelector('[data-sheet-content]');
            contentArea.innerHTML = html;

            // Intercept form submission
            const form = contentArea.querySelector('form');
            if (form) {
                form.addEventListener('submit', (e) => this.handleFormSubmit(e, form));
            }
        } catch (error) {
            console.error('Quick Add Error:', error);
            this.querySelector('[data-sheet-content]').innerHTML = '<p>Sorry, could not load product details.</p>';
        } finally {
            this.setLoading(false);
        }
    }

    async handleFormSubmit(e, form) {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) submitBtn.disabled = true;

        const formData = new FormData(form);

        try {
            const response = await fetch('/cart/add.js', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                // Refresh cart drawer (Empire usually listens for cart updates)
                document.dispatchEvent(new CustomEvent('cart:updated', {
                    bubbles: true
                }));
                this.close();
            } else {
                const result = await response.json();
                alert(result.description || 'Error adding to cart');
            }
        } catch (error) {
            console.error('Form Submit Error:', error);
        } finally {
            if (submitBtn) submitBtn.disabled = false;
        }
    }

    setLoading(isLoading) {
        if (isLoading) {
            this.classList.add('is-loading');
            this.querySelector('[data-sheet-content]').innerHTML = '<div class="whisper-spinner"></div>';
        } else {
            this.classList.remove('is-loading');
        }
    }

    open() {
        this.classList.add('is-open');
        this.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.classList.remove('is-open');
        this.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    handleTouchStart(e) {
        this.isDragging = true;
        this.startY = e.touches[0].clientY;
        this.drawer.style.transition = 'none';
    }

    handleTouchMove(e) {
        if (!this.isDragging) return;
        const deltaY = e.touches[0].clientY - this.startY;
        if (deltaY > 0) {
            this.currentY = deltaY;
            this.drawer.style.transform = `translateY(${deltaY}px)`;
        }
    }

    handleTouchEnd() {
        this.isDragging = false;
        this.drawer.style.transition = '';

        if (this.currentY > 100) {
            this.close();
        } else {
            this.drawer.style.transform = '';
        }

        this.currentY = 0;
    }
}

if (!customElements.get('whisper-bottom-sheet')) {
    customElements.define('whisper-bottom-sheet', WhisperBottomSheet);
}
