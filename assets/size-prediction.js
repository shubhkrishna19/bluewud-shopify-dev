const SIZE_PREDICTOR_SELECTOR = '[data-size-predictor]';

const parseSizes = (sizesJson) => {
  if (!sizesJson) return [];
  try {
    const parsed = JSON.parse(sizesJson);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
};

const pickSize = ({ sizes, height, weight, fitPreference }) => {
  if (!sizes.length) return null;

  if (fitPreference === 'relaxed') {
    return sizes[sizes.length - 1];
  }

  if (fitPreference === 'snug') {
    return sizes[0];
  }

  if (Number(height) > 180 || Number(weight) > 85) {
    return sizes[sizes.length - 1];
  }

  return sizes[Math.floor(sizes.length / 2)];
};

const initSizePredictor = (root) => {
  const sizes = parseSizes(root.dataset.sizeOptions);
  const result = root.querySelector('[data-size-predictor-result]');
  const form = root.querySelector('[data-size-predictor-form]');

  if (!sizes.length || !form || !result) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const height = formData.get('height');
    const weight = formData.get('weight');
    const fitPreference = formData.get('fit');

    const recommendation = pickSize({
      sizes,
      height,
      weight,
      fitPreference,
    });

    if (!recommendation) {
      result.textContent = 'No size recommendation available.';
      return;
    }

    result.textContent = `Recommended size: ${recommendation}`;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(SIZE_PREDICTOR_SELECTOR).forEach(initSizePredictor);
});
