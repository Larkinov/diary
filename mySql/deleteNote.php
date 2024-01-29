<?php
require_once("./utils.php");

function deleteNote()
{
    $connection = connectionBD();

    if (isset($_POST['id']) && isset($_POST['date']) && isset($_POST['title'])) {
        $data = [
            "id" => $_POST['id'],
            "date" => $_POST['date'],
            "type" => $_POST['typeNote'],
            "title" => $_POST['title'],
        ];
        if (hasNote($connection, $data))
            try {
                $sql = "DELETE FROM " . NAME_TABLE_TEXTS . " WHERE id_user = :id_user AND date = :date AND title = :title AND type = :type";
                $stmt = $connection->prepare($sql);
                $stmt->bindValue(":id_user", $data["id"]);
                $stmt->bindValue(":title", $data["title"]);
                $stmt->bindValue(":date", $data["date"]);
                $stmt->bindValue(":type", $data["type"]);
                $stmt->execute();
                header("Location:/?delete=1");
            } catch (PDOException $th) {
                outputError("Error delete database:" . $th->getMessage());
            }
        else header("Location:/?delete=0");
    } else {
        outputError("Error postdata! Try again.");
    }
}


deleteNote();
