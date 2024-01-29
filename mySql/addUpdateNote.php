<?php
require_once("./utils.php");

function updateNote($conn, $data)
{
    try {
        $sql = "UPDATE " . NAME_TABLE_TEXTS . " SET text =:text, title =:title WHERE date='" . $data['date'] . "' AND id_user=".$data['id']." AND type='".$data['type']."'" ." AND title='".$data['title']."'";
        $stmt = $conn->prepare($sql);
        $stmt->bindValue(":text", $data['text']);
        $stmt->bindValue(":title", $data['title']);
        $result = $stmt->execute();
        return $result;
    } catch (\Throwable $th) {
        outputError("Error update database:" . $th->getMessage());
    }
}
function addNote($conn, $data)
{
    try {
        $sql = "INSERT INTO " . NAME_TABLE_TEXTS . " (text, date, id_user, type, title) VALUES (:text, :date, :iduser, :type, :title)";
        $stmt = $conn->prepare($sql);
        $stmt->bindValue(":text", $data['text']);
        $stmt->bindValue(":title", $data['title']);
        $stmt->bindValue(":date", $data['date']);
        $stmt->bindValue(":iduser", $data['id']);
        $stmt->bindValue(":type", $data['type']);
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
            "type" => $_POST['typeNote'],
            "title" => $_POST['title'],
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
