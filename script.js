const featureSlides = [
  'images/feature-1.jpg',
  'images/feature-2.jpg',
  'images/feature-3.jpg',
  'images/feature-4.jpg',
  'images/feature-5.jpg'
];

const featureImage = document.getElementById('featureImage');
const featureDots = document.getElementById('featureDots');
const featurePrev = document.getElementById('featurePrev');
const featureNext = document.getElementById('featureNext');

if (featureImage && featureDots && featurePrev && featureNext) {
  let featureIndex = 0;

  function renderFeatureDots() {
    featureDots.innerHTML = '';
    featureSlides.forEach((_, index) => {
      const btn = document.createElement('button');
      btn.className = `dot ${index === featureIndex ? 'active' : ''}`;
      btn.setAttribute('aria-label', `Go to slide ${index + 1}`);
      btn.addEventListener('click', () => {
        featureIndex = index;
        updateFeature();
      });
      featureDots.appendChild(btn);
    });
  }

  function updateFeature() {
    featureImage.src = featureSlides[featureIndex];
    renderFeatureDots();
  }

  featurePrev.addEventListener('click', () => {
    featureIndex = (featureIndex - 1 + featureSlides.length) % featureSlides.length;
    updateFeature();
  });

  featureNext.addEventListener('click', () => {
    featureIndex = (featureIndex + 1) % featureSlides.length;
    updateFeature();
  });

  updateFeature();
}
