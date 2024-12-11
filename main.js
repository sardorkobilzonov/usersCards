const addUserBtn = document.querySelector(".add-user-btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const userForm = document.querySelector(".user-form");
const cardsContainer = document.querySelector(".cards-container");

let users = JSON.parse(localStorage.getItem("users")) || [];

function renderCards() {
  cardsContainer.innerHTML = "";
  users.forEach((user, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0nFY4AO-CzZatf0QOvZcMxy7wThn_GMM-w&s" alt="User">
            <h3>${user.name}</h3>
            <p>${user.role}</p>
            <p>${user.gender}</p>
            <p>${user.university}</p>
            <button onclick="deleteUser(${index})">Delete</button>
          `;
    cardsContainer.appendChild(card);
  });
}

function addUser(event) {
  event.preventDefault();
  const name = document.querySelector(".name").value;
  const role = document.querySelector(".role").value;
  const gender = document.querySelector(".gender").value;
  const university = document.querySelector(".university").value;

  users.push({ name, role, gender, university });
  localStorage.setItem("users", JSON.stringify(users));
  renderCards();
  modal.classList.add("hidden");
  userForm.reset();
}

function deleteUser(index) {
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  renderCards();
}

addUserBtn.addEventListener("click", () => modal.classList.remove("hidden"));
userForm.addEventListener("submit", addUser);

renderCards();
