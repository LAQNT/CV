"use strict";

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

console.log(getAge("1993-07-31"));

function insertAge() {
  const span = document.createElement("SPAN");
  span.innerText = getAge("1993-07-31") + " years old";
  document.querySelector(".age").appendChild(span);
}

insertAge();

// ---- modal ---
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".open-modal");
const modalImg = document.getElementById("modalImg");

console.log(btnOpenModal);

btnOpenModal.forEach((button, index) => {
  button.addEventListener("click", () =>
    showModal("assets/img/certifications/" + (index + 1) + ".jpg")
  );
});

const showModal = (imageUrl) => {
  modalImg.src = imageUrl;
  modal.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);

// modal.addEventListener("click", closeModal);

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
