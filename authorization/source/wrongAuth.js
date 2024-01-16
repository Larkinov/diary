function checkWrong() {
  let inputs = [...document.querySelectorAll("input")];
  let textError = document.querySelector(".error");
  let params = new URL(document.location).searchParams;
  let err = "";
  if (params.get("wrong")) {
    textError.style = "display:inline-block";
    switch (params.get("wrong")) {
      case "1":
        err = "Неверный логин или пароль";
        break;
      case "2":
        err = "Логин не найден!";
        break;
      case "3":
        err = "Такой логин уже существует!";
        break;
    }
    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        textError.style = "display:none";
      });
    });
    textError.innerHTML = err;
  }
}

checkWrong();
