<?php
require_once($_SERVER['DOCUMENT_ROOT'] . "/mySql/utils.php");

function getNotes($connection, $id)
{
    try {
        $sql = "SELECT * FROM " . NAME_TABLE_TEXTS . " WHERE id_user=" . $id;
        $result = $connection->query($sql);
        while ($row = $result->fetch()) {
            echo " <textarea class='hiddenTextarea' hidden data-titleNote='".$row['title']."' data-typeNote='".$row['type']."' data-dateNote='".$row['date']."'>$row[text]</textarea>";
        }
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
        getNotes($connection, checkID());
    }
}
