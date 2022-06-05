const popupDisplay = document.querySelector(".popup");
const popupOpen = document.querySelector(".profile__button_type_edit");
const popupClose = document.querySelector(".popup__button");
const likeButton = document.querySelector(".grid__card-button-like");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__subtitle");
const nameInput = document.querySelector(".popup__input_type_name");
const aboutInput = document.querySelector(".popup__input_type_about");
const form = document.querySelector(".popup__form");

function toggleModal() {
  popupDisplay.classList.toggle("popup_opened");
}

popupOpen.addEventListener("click", function () {
  toggleModal();

  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
});

popupClose.addEventListener("click", toggleModal);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  toggleModal();
});