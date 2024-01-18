<?php
require_once("./utils.php");

function hasNote($conn, $data)
{
    try {
        $sql = "SELECT * FROM " . NAME_TABLE_TEXTS . " WHERE date='" . $data['date'] . "' AND id_user=".$data['id'];
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

function updateNote($conn, $data)
{
    try {
        $sql = "UPDATE " . NAME_TABLE_TEXTS . " SET text =:text WHERE date='" . $data['date'] . "' AND id_user=".$data['id'];
        $stmt = $conn->prepare($sql);
        $stmt->bindValue(":text", $data['text']);
        $result = $stmt->execute();
        return $result;
    } catch (\Throwable $th) {
        outputError("Error update database:" . $th->getMessage());
    }
}
function addNote($conn, $data)
{
    try {
        $sql = "INSERT INTO " . NAME_TABLE_TEXTS . " (text, date, id_user) VALUES (:text, :date, :iduser)";
        $stmt = $conn->prepare($sql);
        $stmt->bindValue(":text", $data['text']);
        $stmt->bindValue(":date", $data['date']);
        $stmt->bindValue(":iduser", $data['id']);
        $result = $stmt->execute();
        return $result;
    } catch (\Throwable $th) {
        outputError("Error insert database:" . $th->getMessage());
    }
}

function addUpdateNotes()
{
    $connection = connectionBD();

    if (isset($_POST['id']) && isset($_POST['text']) && isset($_POST['date'])) {
        $data = [
            "id" => $_POST['id'],
            "text" => $_POST['text'],
            "date" => $_POST['date'],
        ];
        if (hasNote($connection, $data))
            if (updateNote($connection, $data))  header("Location:/?success=1");
            else header("Location:/?success=0");
        elseif (addNote($connection, $data)) header("Location:/?success=2");
        else header("Location:/?success=0");
    } else {
        outputError("Error postdata! Try again.");
    }
}


addUpdateNotes();
