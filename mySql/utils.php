<?php 

require_once($_SERVER['DOCUMENT_ROOT']."/mySql/const.php");

function connectionBD()
{
    try {
        $conn = new PDO("mysql:host=127.0.0.1;port=3306;dbname=" . NAME_BASE, USER_NAME, PASSWORD_1);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //режим отлова ошибок (по умолчанию стоит в версиях < 8.0 )
        return $conn;
    } catch (PDOException $ex) {
        outputError("Error connection: " . $ex);
    }
}

function hasNote($conn, $data)
{
    try {
        $sql = "SELECT * FROM " . NAME_TABLE_TEXTS . " WHERE date='" . $data['date'] . "' AND id_user=".$data['id']." AND type='".$data['type']."'"." AND title='".$data['title']."'";
        $result = $conn->query($sql);
        $row = $result->fetch();
        if (empty($row)) {
            return false;
        } else
            return true;
    } catch (\Throwable $th) {
        outputError("Error select database:" . $th->getMessage());
    }
}


function outputError($textError)
{
    echo "<br>$textError<br>";
    ?> <button onclick="history.back()" style="padding:4px 8px; margin-top:8px;">Вернуться назад</button>
    <?php
    die("");    
}