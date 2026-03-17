const featureSlides = [
  'images/resume-work-2.png',
  'images/drill-data-dash-1.png',
  'images/maze.png',
  'images/torque-4.png',
  'images/torque-5.png'
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
    caption: "Dashboard home overview showing map of the Marigold mine site, drill data logs formatted into a histogram, and a button with the ability to refresh the data on command."
  },
  {
    src: "images/drill-data-dash-1.png",
    alt: "Mining Dashboard Map Visualization",
    caption: "Geospatial view displaying drill positions relative to the mine site on a map of the Marigold mine site."
  },
  {
    src: "images/drill-data-dash-2.png",
    alt: "Mining Dashboard Drill Data",
    caption: "Detailed drill logs formatted into a histogram plotting depth per drill (in feet) versus the date drilling work was logged with the ability to change the timeframe."
  },
  {
    src: "images/drill-data-dash-3.png",
    alt: "Mining Dashboard Most Recent Logs",
    caption: "Detailed drill metrics and operational logs for latest geospatial positioning for all active equipment."
  },
  {
    src: "images/drill-data-dash-4.png",
    alt: "Mining Dashboard Depth Logs",
    caption: "Depth logs organized into a visual table and categorized by corresponding drill, depth, and relative starting time."
  }
]);

setupProjectCarousel("torqueImage", "torqueCaption", "torquePrev", "torqueNext", [
  {
    src: "images/torque.png",
    alt: "Arm Torque Tracker Overview",
    caption: "High level overview of the Arm Torque Tracker Device. Centralized data acquistion module and muscle band modules shown next to model of an arm."
  },
  {
    src: "images/torque-1.png",
    alt: "Arm Torque Tracker Modules Overview",
    caption: "The Arm Torque Tracker planned out into its three main components - arm bands over targetted muscle groups, a centralized data acquistion module mounted on the torso, and a wire shirt to connect the two and minimize loose wires."
  },
  {
    src: "images/torque-2.png",
    alt: "Arm Torque Tracker Early sEMG",
    caption: "Early iterations of the sEMG module used included the Myoware Sparkfun 2.0 sEMG muscle sensors, which were tested using my arm as a demo."
  },
    {
    src: "images/torque-3.png",
    alt: "Arm Torque Tracker Early Testing",
    caption: "Field observations were made to test the principle of the design of the Arm Torque Tracker, and to discover any hidden limitations or factors not previously considered."
  },
    {
    src: "images/torque-4.png",
    alt: "Arm Torque Tracker Circuit Mapping",
    caption: "Pin mappings done in KiCad were used to help map out the circuit connection points and allow for a better understanding of how the various sensors came together to accurately transmit positional and sEMG data."
  },
    {
    src: "images/torque-5.png",
    alt: "Arm Torque Tracker KiCad",
    caption: "Prototype hardware setup for the first iteration of the PCB done in KiCad with team leads."
  },
    {
    src: "images/torque-6.png",
    alt: "Arm Torque Tracker Testing",
    caption: "Testing the prototype's ability to handle multiple sEMG inputs, which was done by placing sensors over various muscle groups in my arm and testing to see if a signal was received by our Arduino script."
  },
    {
    src: "images/torque-7.png",
    alt: "Arm Torque Tracker Current",
    caption: "Current prototype hardware setup used for sEMG and IMU data collection."
  }
]);

setupProjectCarousel("mazeImage", "mazeCaption", "mazePrev", "mazeNext", [
  {
    src: "images/maze.png",
    alt: "Marble Maze Overview",
    caption: "Marble Maze Game in action, the FRDM-KL46Z board acts as a controller, which when tilted a certain direction moves a ball through a maze to the goal."
  },
  {
    src: "images/maze-1.png",
    alt: "Marble Maze Grid",
    caption: "A better look at the grid of the maze randomly generated upon each playthrough via a Python script. The goal is the red square, and the player is the blue ball."
  },
  {
    src: "images/maze-2.png",
    alt: "Marble Maze Color Logic",
    caption: "Some calculations I did in configuring how the two on-board LEDs should change colors given the orientation of the board at any given time."
  },
    {
    src: "images/maze-3.png",
    alt: "Marble Maze Board Tilt Colors",
    caption: "The results of the color tilt logic shown on the board as it's orientation changes in the positive and negative x and y axes."
  }
]);

setupProjectCarousel("comp-archImage", "comp-archCaption", "comp-archPrev", "comp-archNext", [
  {
    src: "images/comp-arch.png",
    alt: "Comp Arch Single-Core Overview",
    caption: "A high level diagram of the single core implementation of a processor created in the base design for the final project."
  },
  {
    src: "images/comp-arch-1.png",
    alt: "Comp Arch Multi-Core Overview",
    caption: "A high level diagram of the multi-core implementation of a processor created in the alternative design for the final project."
  }
]);
