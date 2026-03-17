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

function setupProjectCarousel(imageId, captionId, prevId, nextId, slides) {
  let index = 0;

  const image = document.getElementById(imageId);
  const caption = document.getElementById(captionId);
  const prev = document.getElementById(prevId);
  const next = document.getElementById(nextId);

  if (!image || !caption || !prev || !next) return;

  function updateSlide() {
    image.src = slides[index].src;
    image.alt = slides[index].alt;
    caption.textContent = slides[index].caption;
  }

  prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
  });

  next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlide();
  });

  updateSlide();
}
