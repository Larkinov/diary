<?php
require_once($_SERVER['DOCUMENT_ROOT'] . "/mySql/utils.php");

function getNotes($connection, $id)
{
    try {
        $sql = "SELECT * FROM " . NAME_TABLE_TEXTS . " WHERE id_user=" . $id;
        $result = $connection->query($sql);
        while ($row = $result->fetch()) {
            print_r($row['text']);
        }
        // if (!empty($row)) {
        //     return false;
        // }
    } catch (\Throwable $th) {
        outputError("Error select database:" . $th->getMessage());
    }
}

function checkID()
{
    if (isset($_GET['id'])) {
        return $_GET['id'];
    } elseif (isset($_COOKIE['id']))
        if ($_COOKIE['id'] !== null && $_COOKIE['id'] !== "null")
            return $_COOKIE['id'];
}


function loading_notes()
{
    if (checkID()) {
        $connection = connectionBD();

        $notes = getNotes($connection, checkID());

        echo "<div class='blockNotes__container'>
                    <div class='blockNotes__note'>note</div>
                    </div>";
        // header("Location:/?id=" . $id ."&auth=2");
        // $data = [
        //     "id" => $_POST['id'],
        //     "text" => $_POST['text'],
        //     "date" => $_POST['date'],
        // ];
        // if (hasNote($connection, $data))
        //     if (updateNote($connection, $data))  header("Location:/?success=1");
        //     else header("Location:/?success=0");
        // elseif (addNote($connection, $data)) header("Location:/?success=2");
        // else header("Location:/?success=0");
    }else{
        echo "<div class='blockNotes__container'>
        <div class='blockNotes__note'>note</div>
        </div>";
    }
}
