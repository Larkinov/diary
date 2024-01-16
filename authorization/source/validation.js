function init() {
  const NAME_SIGNUP = "Регистрация";
  const NAME_LOGIN = "Войти";
  const TYPE_FORM_SIGNUP = "SIGNUP";
  const TYPE_FORM_LOGIN = "LOGIN";

  let signUp = document.querySelector(".signUp");
  let logIn = document.querySelector(".logIn");

  let fields = [
    document.querySelector(".fieldName"),
    document.querySelector(".fieldConfirm"),
  ];

  let btnSubmit = document.querySelector("button[name='submit']");
  let textError = document.querySelector(".error");
  let inputs = [...document.querySelectorAll("input")];

  let inputPassConfirm = document.querySelector("input[name='confirm']");
  let inputName = document.querySelector("input[name='name']");
  let inputTypeForm = document.querySelector("input[name='typeForm']");

  let backHome = document.querySelector(".backHome");

  function validationInput(input, isName) {
    const regex = /^[aA-zZ0-9]+$/u;
    const regexRU = /^[aA-zZаА-яЯ0-9]+$/u;
    if (isName) {
      if (!regexRU.test(input.value))
        input.value = input.value.substring(0, input.value.length - 1);
    } else if (!regex.test(input.value)) {
      input.value = input.value.substring(0, input.value.length - 1);
    }
  }

  signUp.addEventListener("click", () => {
    signUp.classList.remove("activeTitle");
    logIn.classList.add("activeTitle");

    inputName.required = true;
    inputPassConfirm.required = true;
    inputTypeForm.value = TYPE_FORM_SIGNUP;
    fields.forEach((field) => {
      field.classList.remove("fieldFormDisabled");
    });
    btnSubmit.innerHTML = NAME_SIGNUP;
  });

  logIn.addEventListener("click", () => {
    signUp.classList.add("activeTitle");
    logIn.classList.remove("activeTitle");

    inputName.required = false;
    inputPassConfirm.required = false;
    inputTypeForm.value = TYPE_FORM_LOGIN;
    fields.forEach((field) => {
      field.classList.add("fieldFormDisabled");
    });
    btnSubmit.innerHTML = NAME_LOGIN;
  });

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.name === "name"
        ? validationInput(input, true)
        : validationInput(input, false);
    });
    input.addEventListener("focus", () => {
      textError.style = "display:none";
    });
  });

  btnSubmit.onclick = (e) => {
    let passw = document.querySelector("input[name='password']");
    let passwConfirm = document.querySelector("input[name='confirm']");
    if (
      passw.value !== passwConfirm.value &&
      btnSubmit.innerHTML === NAME_SIGNUP
    ) {
      textError.style = "display:inline-block";
      e.preventDefault();
    }
  };

  backHome.onclick = () => {
    window.location.href = "/";
  };
}

init();
