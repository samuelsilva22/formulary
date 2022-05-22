const form = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const passwordConfirmartion = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmartion.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O e-mail é obrigatório");
  } else if (!validateEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um e-mail válido.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha deve ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmartion, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmartion, "As senhas não são iguais.");
  } else {
    setSuccessFor(passwordConfirmartion);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    alert("Usuário cadastrado com sucesso!");
  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //adicionar mensagem de erro

    small.innerText = message;

    //adicionar a classe de erro

    formControl.className = "form-control error";
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;

    //adicionar a classe de sucesso

    formControl.className = "form-control success";
  }

  function validateEmail(email) {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)
    ) {
      return true;
    }
    return false;
  }
}
