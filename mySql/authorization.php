<?php

require_once("./utils.php");


function signup($conn, $data)
{
    //checking for a dublicate login
    try {
        $sql = "SELECT * FROM " . NAME_TABLE_USERS . " WHERE login='" . $data['login'] . "'";
        $result = $conn->query($sql);
        $row = $result->fetch();
        if (empty($row)) {
            //insert userdata
            try {
                $sql = "INSERT INTO " . NAME_TABLE_USERS . " (name, login, password) VALUES ('" . $data['name'] . "','" . $data['login'] . "','" . $data['password'] . "')";
                $conn->exec($sql);
                header("Location:/?id=" . $conn->lastInsertId()."&auth=1");
            } catch (\Throwable $th) {
                outputError("Error insert database: " . $th->getMessage());
            }
        }else
        header("Location:/authorization?wrong=3");
    } catch (\Throwable $th) {
        outputError("Error select database:" . $th->getMessage());
    }
}

function login($conn, $data)
{
    //get userdata
    try {
        $sql = "SELECT * FROM " . NAME_TABLE_USERS . " WHERE login='" . $data['login'] . "'";
        $result = $conn->query($sql);
        $row = $result->fetch();
        if (!empty($row)) {
            if ($row['password'] === $data['password'])
                header("Location:/?id=" . $row['id']."&auth=2");
            else {
                header("Location:/authorization?wrong=1");
            }
        } else
            header("Location:/authorization?wrong=2");
    } catch (\Throwable $th) {
        outputError("Error select database:" . $th->getMessage());
    }
}

function init()
{
    $connection = connectionBD();

    $name = trim($_POST["name"]);
    $login = trim($_POST["login"]);
    $password = trim($_POST["password"]);

    if (isset($login) && isset($password)) {
        $data = [
            "name" => $name ?? "empty",
            "login" => $login,
            "password" => $password,
        ];
    } else {
        outputError("Error postdata! Try again.");
    }

    $typeForm = $_POST['typeForm'];
    if ($typeForm === TYPEFORM_LOGIN)
        login($connection, $data);
    if ($typeForm === TYPEFORM_SIGNUP)
        signup($connection, $data);
}

init();
