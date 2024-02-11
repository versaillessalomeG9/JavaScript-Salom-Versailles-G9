let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");

  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  let nom = document.querySelector("#nom");
  if (nom.value === "") {
    errorContainer.classList.add("visible");
    nom.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ Nom ne doit pas être vide";

    errorList.appendChild(err);
  } else {
    nom.classList.add("success");
  }

  let prenom = document.querySelector("#prenom");
  if (prenom.value === "") {
    errorContainer.classList.add("visible");
    prenom.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ Prénom ne doit pas être vide";

    errorList.appendChild(err);
  } else {
    prenom.classList.add("success");
  }

  let email = document.querySelector("#mail");
  if (email.value === "") {
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Le champ Email ne doit pas être vide";

    errorList.appendChild(err);
  } else {
    email.classList.add("success");
  }

  let age = document.querySelector("#age");
  if (isNaN(age.value) || age.value < 18) {
    errorContainer.classList.add("visible");
    age.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Interdit aux mineurs";

    errorList.appendChild(err);
  } else {
    age.classList.add("success");
  }

  let sexe = document.querySelector('input[name="sexe"]:checked');
  if (!sexe) {
    errorContainer.classList.add("visible");

    let err = document.createElement("li");
    err.innerText = "Veuillez sélectionner le sexe";

    errorList.appendChild(err);
  }

  let pays = document.querySelector("#pays");
  if (pays.value === "") {
    errorContainer.classList.add("visible");
    pays.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Veuillez sélectionner le pays";

    errorList.appendChild(err);
  } else {
    pays.classList.add("success");
  }

  let passCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).+$/;
  let password = document.querySelector("#password");
  if (password.value.length < 10 || !passCheck.test(password.value)) {
    errorContainer.classList.add("visible");
    password.classList.remove("success");

    let err = document.createElement("li");
    err.innerText =
      "Le mot de passe doit avoir au moins 10 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial";

    errorList.appendChild(err);
  } else {
    password.classList.add("success");
  }

  let passwordConfirm = document.querySelector("#password2");
  if (password.value !== "") {
    if (password.value !== passwordConfirm.value) {
      errorContainer.classList.add("visible");
      passwordConfirm.classList.remove("success");

      let err = document.createElement("li");
      err.innerText = "Les deux mots de passe doivent être identiques";

      errorList.appendChild(err);
    } else {
      passwordConfirm.classList.add("success");
    }
  }

  let successContainer = document.querySelector('.message-success');
  successContainer.classList.remove('visible');

  if (
    nom.classList.contains('success') &&
    prenom.classList.contains('success') &&
    email.classList.contains('success') &&
    age.classList.contains('success') &&
    sexe &&
    pays.classList.contains('success') &&
    password.classList.contains('success') &&
    passwordConfirm.classList.contains('success')
  ) {
    successContainer.classList.add('visible');
  }
});
