<?php ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./source/authorization.style.css">
    <title>Document</title>
</head>

<body>
    <button class="backHome">На главную</button>
    <div class="content">
        <h2>
            <span class="logIn">Войти</span> или <span class="signUp activeTitle">зарегистрироваться</span>
        </h2>
        <form action="/ss" method="POST" class="formAuth">
            <div class="fieldForm fieldFormDisabled fieldName">
                <label for="name">Имя пользователя</label>
                <input type="text" name="name" id="name" minlength="1" maxlength="16">
            </div>
            <div class="fieldForm">
                <label for="login">Логин</label>
                <input type="text" name="login" id="login" required="true" minlength="2" maxlength="16">
            </div>
            <div class="fieldForm">
                <label for="password">Пароль</label>
                <input type="password" name="password" id="password" required="true" minlength="6" maxlength="16">
            </div>
            <div class="fieldForm fieldFormDisabled fieldConfirm">
                <label for="confirm">Подтвердите пароль</label>
                <input type="password" name="confirm" id="confirm" minlength="6" maxlength="16">
            </div>
            <div> <button type="submit" name="submit">Войти</button>
            <p class="errorPassword">Пароли не совпадают</p>
            </div>

            <input hidden value="login" name="typeForm">
        </form>
    </div>
</body>

<script src="./source/validation.js"></script>

</html>