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

setupProjectCarousel("miningImage", "miningCaption", "miningPrev", "miningNext", [
  {
    src: "images/drill-data-dash.png",
    alt: "Mining Dashboard Overview",
    caption: "Dashboard home view showing drill positions and live activity."
  },
  {
    src: "images/drill-data-dash-1.png",
    alt: "Mining Dashboard Map Visualization",
    caption: "Detailed drill metrics and operational logs for active equipment."
  },
  {
    src: "images/drill-data-dash-2.png",
    alt: "Mining Dashboard Drill Data",
    caption: "Geospatial view displaying drill positions relative to the mine site."
  },
  {
    src: "images/drill-data-dash-3.png",
    alt: "Mining Dashboard Most Recent Logs",
    caption: "Geospatial view displaying drill positions relative to the mine site."
  },
  {
    src: "images/drill-data-dash-4.png",
    alt: "Mining Dashboard Depth Logs",
    caption: "Hamburger."
  }
]);

// setupProjectCarousel("torqueImage", "torqueCaption", "torquePrev", "torqueNext", [
//   {
//     src: "images/torque-1.jpg",
//     alt: "Arm Torque Tracker device",
//     caption: "Prototype hardware setup used for sEMG and motion data collection."
//   },
//   {
//     src: "images/torque-2.jpg",
//     alt: "Arm Torque Tracker testing",
//     caption: "Testing setup during data acquisition and performance evaluation."
//   },
//   {
//     src: "images/torque-3.jpg",
//     alt: "Arm Torque Tracker PCB",
//     caption: "Circuit integration and board-level design for device functionality."
//   }
// ]);
