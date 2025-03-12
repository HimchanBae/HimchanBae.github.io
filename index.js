let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px) rotate(${(x * y) / 2}deg) scale(1)`;
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;

  if (contrastToggle) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
}

async function contact(event) {
  event.preventDefault();

  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  loading.classList.add("modal__overlay--visible");

  emailjs
    .sendForm(
      "service_owc4hpa",
      "template_pawdwjq",
      event.target,
      "BRzZxg-TiEgtiOBNY"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList.add("modal__overlay--visible");
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on: himchan.bae@students.mq.edu.au"
      );
    });
}

document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("BRzZxg-TiEgtiOBNY");

  document.addEventListener("click", (event) => {
    const modal = document.querySelector(".modal");

    if (modal && modal.classList.contains("modal--open")) {
      if (!modal.contains(event.target) && !event.target.closest(".click")) {
        closeModal();
      }
    }
  });
});

function toggleModal() {
  const modal = document.querySelector(".modal");
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  if (modal) {
    if (!modal.classList.contains("modal--open")) {
      if (loading) loading.classList.remove("modal__overlay--visible");
      if (success) success.classList.remove("modal__overlay--visible");
    }

    modal.classList.toggle("modal--open");
    document.body.classList.toggle("modal--open");
  }
}

function closeModal() {
  const modal = document.querySelector(".modal");

  if (modal) {
    modal.classList.remove("modal--open");
    document.body.classList.remove("modal--open");
  }
}
