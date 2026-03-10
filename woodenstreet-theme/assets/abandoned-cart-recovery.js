const RECOVERY_SELECTOR = '[data-abandoned-cart-recovery]';
const STORAGE_KEY = 'bw_abandoned_cart';

const safeParse = (value, fallback = null) => {
  try {
    return JSON.parse(value);
  } catch (error) {
    return fallback;
  }
};

const saveCart = (items) => {
  if (!items.length) return;
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      items,
      updatedAt: Date.now(),
    })
  );
};

const clearSavedCart = () => {
  localStorage.removeItem(STORAGE_KEY);
};

const restoreCart = async (items) => {
  await fetch('/cart/clear.js', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
  for (const item of items) {
    await fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: item.id, quantity: item.quantity }),
    });
  }
  window.location.reload();
};

const initRecovery = (root) => {
  const items = safeParse(root.dataset.cartItems, []);
  const banner = root.querySelector('[data-abandoned-cart-banner]');
  const restoreButton = root.querySelector('[data-abandoned-cart-restore]');
  const dismissButton = root.querySelector('[data-abandoned-cart-dismiss]');

  if (!banner) return;

  if (items.length) {
    saveCart(items);
    banner.hidden = true;
    return;
  }

  const saved = safeParse(localStorage.getItem(STORAGE_KEY), null);
  if (!saved?.items?.length) {
    banner.hidden = true;
    return;
  }

  banner.hidden = false;

  if (restoreButton) {
    restoreButton.addEventListener('click', async () => {
      restoreButton.disabled = true;
      restoreButton.setAttribute('aria-busy', 'true');
      try {
        await restoreCart(saved.items);
      } catch (error) {
        restoreButton.disabled = false;
        restoreButton.removeAttribute('aria-busy');
      }
    });
  }

  if (dismissButton) {
    dismissButton.addEventListener('click', () => {
      clearSavedCart();
      banner.hidden = true;
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(RECOVERY_SELECTOR).forEach(initRecovery);
});
