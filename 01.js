const btn = document.getElementById("loadUsers");
const users = document.getElementById("users");

function clearContainer() {
  users.innerHTML = ""; 
}

function disableBtn() {
  btn.disabled = true;
}

function enableBtn() {
  btn.disabled = false;
}

async function getUsers() {
  clearContainer();
  disableBtn();

  try {
    const dataAxious = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );

    const data = dataAxious.data; // беру собі потрібні дані з Obj за полем data

    for (let i = 0; i < data.length; i++) {
      const userName = data[i].name;
      const userLogin = data[i].username;
      const userEmail = data[i].email;
      const address = data[i].address; // Obj
      // - - - - -
      const divUser = document.createElement("div");
      divUser.classList.add("userBlock");
      const strong = document.createElement("strong");
      strong.textContent = userName;
      strong.classList.add("strong");
      const pUsername = document.createElement("p");
      const pEmail = document.createElement("p");
      const pCity = document.createElement("p");
      const pStreet = document.createElement("p");
      // - - - - -
      pUsername.textContent = `User-Login: ${userLogin}`;
      pEmail.textContent = `Email: ${userEmail}`;
      pCity.textContent = `City: ${address.city}`;
      pStreet.textContent = `Street: ${address.street}`;

      divUser.append(strong);
      divUser.append(pUsername, pEmail, pCity, pStreet);
      users.append(divUser);
    }
  } catch (error) {
    users.textContent = "Opps! No data found.";
  } finally {
    enableBtn();
  }
}

btn.addEventListener("click", getUsers);

/*
AI SENIOR REALIZATION

const btn = document.getElementById("loadUsers");
const users = document.getElementById("users");

function clearContainer() {
  users.innerHTML = "";
}

function disableBtn() {
  btn.disabled = true;
}

function enableBtn() {
  btn.disabled = false;
}

function createUserField(text) {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
}

function createUserCard(user) {
  const divUser = document.createElement("div");
  divUser.classList.add("userBlock");

  const strong = document.createElement("strong");
  strong.textContent = user.name;
  strong.classList.add("strong");

  const fields = [
    `User-Login: ${user.username}`,
    `Email: ${user.email}`,
    `City: ${user.address.city}`,
    `Street: ${user.address.street}`,
  ];

  divUser.append(strong);

  for (let i = 0; i < fields.length; i++) {
    divUser.append(createUserField(fields[i]));
  }

  return divUser;
}

async function getUsers() {
  clearContainer();
  disableBtn();

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    const data = response.data;

    for (let i = 0; i < data.length; i++) {
      const userCard = createUserCard(data[i]);
      users.append(userCard);
    }
  } catch (error) {
    users.textContent = "Opps! No data found.";
  } finally {
    enableBtn();
  }
}

btn.addEventListener("click", getUsers);
*/
