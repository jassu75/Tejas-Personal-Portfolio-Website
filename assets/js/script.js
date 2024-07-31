'use strict';

// Element toggle function
const elementToggleFunc = (elem) => elem.classList.toggle("active");

// Sidebar toggle functionality for mobile
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));

// Testimonials modal functionality
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = () => {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

testimonialsItem.forEach(item => {
  item.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() !== 'a') {
      modalImg.src = item.querySelector("[data-testimonials-avatar]").src;
      modalImg.alt = item.querySelector("[data-testimonials-avatar]").alt;
      modalTitle.innerHTML = item.querySelector("[data-testimonials-title]").innerHTML;
      modalText.innerHTML = item.querySelector("[data-testimonials-text]").innerHTML;
      testimonialsModalFunc();
    }
  });

  item.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
});

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Custom select functionality
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", () => elementToggleFunc(select));

selectItems.forEach(item => {
  item.addEventListener("click", () => {
    let selectedValue = item.innerText.toLowerCase();
    selectValue.innerText = item.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

// Filter functionality
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = (selectedValue) => {
  filterItems.forEach(item => {
    if (selectedValue === "all" || selectedValue === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// Filter button functionality for large screen
let lastClickedBtn = filterBtn[0];

filterBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    let selectedValue = btn.innerText.toLowerCase();
    selectValue.innerText = btn.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    btn.classList.add("active");
    lastClickedBtn = btn;
  });
});

// Form validation and submission
const form = document.querySelector("form[name='contact']");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", () => {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(new FormData(form)).toString()
  })
  .then(response => {
    if (response.ok) {
      document.getElementById('form-response').innerText = "Thank you for your message!";
      alert("Message sent successfully. Will respond to you soon.")
    } else {
      document.getElementById('form-response').innerText = "Oops! There was a problem with your submission.";
      alert("Unable to send your message. Please retry with correct entries")
    }
  })
  .catch(error => console.error('Error:', error));

  form.reset();
  formBtn.setAttribute('disabled', '');
});

// Page navigation functionality
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
  link.addEventListener("click", () => {
    pages.forEach(page => {
      if (link.innerHTML.toLowerCase() === page.dataset.page) {
        page.classList.add("active");
        link.classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
        link.classList.remove("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const lionLogo = document.getElementById('lion-logo');
  const roarSound = document.getElementById('roar-sound');
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  const triggerLionAnimation = () => {
    lionLogo.classList.add('animate');
    
    // Restart the roar sound if it is already playing
    if (!roarSound.paused) {
      roarSound.currentTime = 0;
    }
    roarSound.play();
    
    setTimeout(() => {
      lionLogo.classList.remove('animate');
    }, 3000); // Total duration of 3s for all animations
  };

  // Trigger animation and sound on page load
  triggerLionAnimation();

  // Trigger animation and sound on navigation link click
  navigationLinks.forEach(link => {
    link.addEventListener("click", () => {
      pages.forEach(page => {
        if (link.innerHTML.toLowerCase() === page.dataset.page) {
          page.classList.add("active");
          link.classList.add("active");
          window.scrollTo(0, 0);
        } else {
          page.classList.remove("active");
          link.classList.remove("active");
        }
      });
      triggerLionAnimation();
    });
  });
});
