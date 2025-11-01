const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});
// section 1
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  const position = hero.getBoundingClientRect().top;
  const screen = window.innerHeight;

  if (position < screen - 100) {
    hero.classList.add("visible");
  }
});
// section 2

const track = document.querySelector('.brand-track');

track.addEventListener('mouseenter', () => {
  track.style.animationPlayState = 'paused';
});

track.addEventListener('mouseleave', () => {
  track.style.animationPlayState = 'running';
});



//section  3

const cars = {
  tesla: {
    name: "Tesla Model S",
    desc: "A blend of performance and innovation — with electric power and cutting-edge technology.",
    features: [
      "Top Speed: 250 km/h",
      "Range: 600 km",
      "0–100 km/h: 2.5s"
    ],
    colors: {
      red: "https://i.pinimg.com/1200x/12/65/b3/1265b3fcbb7c43e91c5f5bad92db8ddb.jpg",
      black: "https://i.pinimg.com/1200x/51/ee/3b/51ee3b645013f7b145c7b38953c64b34.jpg",
      white: "https://i.pinimg.com/1200x/39/5a/4b/395a4b8f37abd7c97c325598d225c1cf.jpg"
    }
  },
  bmw: {
    name: "BMW M8 Competition",
    desc: "Pure performance meets luxury design with advanced driving dynamics.",
    features: [
      "Top Speed: 305 km/h",
      "Horsepower: 617 hp",
      "0–100 km/h: 3.0s"
    ],
    colors: {
      blue: "https://i.pinimg.com/1200x/7a/87/89/7a87897d7ee820a7463884a371b7020b.jpg",
      white: "https://i.pinimg.com/736x/27/2f/47/272f47f9ffc18a251ce549165998cbc0.jpg",
      black: "https://i.pinimg.com/736x/d7/9d/ec/d79deca2f67b70e952e92c87228d4056.jpg"
    }
  },
  lamborghini: {
    name: "Lamborghini Huracán EVO",
    desc: "Iconic Italian supercar combining luxury, style, and extreme performance.",
    features: [
      "Top Speed: 325 km/h",
      "Horsepower: 640 hp",
      "0–100 km/h: 2.9s"
    ],
    colors: {
      yellow: "https://i.pinimg.com/1200x/e5/90/2f/e5902f935e88e1f762d8c49e5feeb6f8.jpg",
      orange: "https://i.pinimg.com/1200x/ef/80/5b/ef805b29e82a1b6aea5e11882aa9df26.jpg",
      green: "https://i.pinimg.com/736x/11/96/9e/11969e16f7c8458b5f8cab001cbc6a86.jpg"
    }
  }
};

const carImg = document.getElementById("car-img");
const carName = document.getElementById("car-name");
const carDesc = document.getElementById("car-desc");
const colorOptions = document.querySelector(".color-options");
const selectButtons = document.querySelectorAll(".select-btn");
const carFeatures = document.getElementById("car-features");

selectButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".select-btn.active").classList.remove("active");
    btn.classList.add("active");

    const selectedCar = cars[btn.dataset.car];
    carName.textContent = selectedCar.name;
    carDesc.textContent = selectedCar.desc;

  
    carFeatures.innerHTML = "";
    selectedCar.features.forEach((f) => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${f.split(':')[0]}:</strong> ${f.split(':')[1]}`;
      carFeatures.appendChild(div);
    });


    colorOptions.innerHTML = "";
    for (let color in selectedCar.colors) {
      const div = document.createElement("div");
      div.classList.add("color-btn", color);
      div.dataset.img = selectedCar.colors[color];
      colorOptions.appendChild(div);
    }

    updateColorClick();
    const firstColor = Object.values(selectedCar.colors)[0];
    carImg.src = firstColor;
  });
});


function updateColorClick() {
  document.querySelectorAll(".color-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const imgSrc = btn.dataset.img;
      carImg.style.opacity = 0;
      setTimeout(() => {
        carImg.src = imgSrc;
        carImg.style.opacity = 1;
      }, 300);
    });
  });
}


updateColorClick();


window.addEventListener("load", () => {
  const heroText = document.querySelector(".hero-content");
  heroText.style.opacity = "0";
  heroText.style.transition = "opacity 1.5s ease";
  setTimeout(() => {
    heroText.style.opacity = "1";
  }, 500);
});



// section 6

const filterBtns = document.querySelectorAll('.cars-filter-btn');
const carItems = document.querySelectorAll('.car-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    carItems.forEach(item => {
      item.classList.remove('active-filter'); 

      if (filter === 'all' || item.classList.contains(filter)) {
        item.classList.remove('hide');
        item.classList.add('active-filter');
      } else {
        item.classList.add('hide');
      }
    });
  });
});


const modal = document.getElementById('carModal');
const modalTitle = document.getElementById('carTitle');
const modalInfo = document.getElementById('carInfo');
const closeModal = document.querySelector('.car-modal-close');
const viewBtns = document.querySelectorAll('.car-view-btn');

const carDetails = {
  "Tesla Model S": "Experience the future of driving with Tesla’s all-electric luxury sedan, offering autopilot features, unmatched acceleration, and zero emissions.",
  "BMW M8 Coupe": "A masterpiece of performance engineering. 617 HP Twin-Turbo V8 with precision handling and luxury interior for the ultimate thrill.",
  "Lamborghini Huracán EVO": "Supercar power and Italian design in one. The Huracán EVO delivers 640 HP and breathtaking aerodynamics.",
  "Porsche 911 Turbo S": "The perfect balance between performance and elegance. 640 HP, all-wheel drive, and legendary Porsche engineering."
};

viewBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const carName = btn.dataset.car;
    modalTitle.textContent = carName;
    modalInfo.textContent = carDetails[carName] || "Car details not available.";
    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});


// contact section

window.addEventListener("load", () => {
  const heroText = document.querySelector(".hero-content");
  heroText.style.opacity = "0";
  heroText.style.transition = "opacity 1.5s ease";
  setTimeout(() => {
    heroText.style.opacity = "1";
  }, 500);
});


// testimONIALs 
const testimonials = document.querySelectorAll('.testimonial-card');
let current = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.style.display = i === index ? 'block' : 'none';
  });
}

showTestimonial(current);
setInterval(() => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}, 5000);

