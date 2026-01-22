(() => {
  const toast = document.querySelector('[data-cart-toast]');
  if (!toast) return;

  const countTarget = toast.querySelector('[data-cart-toast-count]');
  const closeButton = toast.querySelector('[data-cart-toast-close]');
  let hideTimer = null;

  const hideToast = () => {
    toast.classList.remove('is-visible');
    toast.setAttribute('aria-hidden', 'true');
  };

  const showToast = (cartData) => {
    if (hideTimer) {
      window.clearTimeout(hideTimer);
    }

    if (countTarget && cartData?.item_count !== undefined) {
      countTarget.textContent = `${cartData.item_count} item${cartData.item_count === 1 ? '' : 's'} in cart`;
    }

    toast.classList.add('is-visible');
    toast.setAttribute('aria-hidden', 'false');

    hideTimer = window.setTimeout(hideToast, 4000);
  };

  closeButton?.addEventListener('click', hideToast);

  window.addEventListener('cartcount:update', (event) => {
    showToast(event.detail);
  });
})();
