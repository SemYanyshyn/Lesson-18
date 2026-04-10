const form = document.getElementById("gender-form");
const input = document.getElementById("name-input");
const result = document.getElementById("result");
const btnSearch = document.getElementById("btnSearch");

function clearContainer() {
  result.innerHTML = "";
}

function inputName() {
  const name = input.value;
  getName(name);
}

async function getName(name) {
  try {
    name = name.trim();
    const nameAxios = await axios.get(`https://api.genderize.io?name=${name}`);
    const data = nameAxios.data;
    if (data.gender) {
      result.textContent = `${data.name} is ${data.gender} with ${data.probability * 100}%`;
    } else {
      result.textContent = "Such name isn't exist";
    }
  } catch (error) {
    result.textContent = "Something went wrong";
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (input.value !== "") {
    clearContainer();
    inputName();
  } else {
    result.textContent = "Please enter the name";
    return;
  }
});
