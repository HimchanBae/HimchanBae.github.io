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
});
