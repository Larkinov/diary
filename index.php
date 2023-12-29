<?php


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="source/style.css">
    <title>Дневник</title>
</head>

<body>
    <header>
        <div class="header__container">
            <h2 class="logo">
                Simple Dialy
            </h2>
            <div class="iconBlock">
                <img src="./source/img/info.png" alt="info" class="icon btnInfo">
                <img src="./source/img/settings.png" alt="settings" class="icon btnSettings">
            </div>
        </div>

    </header>
    <div class="content">
        <div class="sidebar">
            s
        </div>
        <div class="notepad">
            <div class="blockNotes">
                <div class="blockNotes__titles">
                    <button>Дневник</button>
                    <button>Заметки</button>
                </div>
                <input class="blockNotes__search" placeholder="Поиск записи" />
                <div class="blockNotes__container">
                    <div class="blockNotes__note">note</div>
                    <div class="blockNotes__note">note</div>
                    <div class="blockNotes__note">note</div>
                    <div class="blockNotes__note">note</div>
                    <div class="blockNotes__note">note</div>
                    <div class="blockNotes__note">note</div>
                    <div class="blockNotes__note">note</div>
                    <div class="blockNotes__note">note</div>
                    <div class="blockNotes__note">note</div>
                    <div class="blockNotes__note">note</div>
                    <div class="blockNotes__note">note</div>
                    <div class="blockNotes__note">note</div>
                    <div class="blockNotes__note">note</div>
                    <div class="blockNotes__note">note</div>
                    <div class="blockNotes__note">note</div>
                    <div class="blockNotes__note">note</div>
                    <div class="blockNotes__note">note</div>
                    <div class="blockNotes__note">note</div>
                    <div class="blockNotes__note">note</div>
                    <div class="blockNotes__note">note</div>
                </div>
            </div>
            <div class="notepad__title">
                <img src="./source/img/burger-menu.png" alt="burger-menu" class="icon notepad__burgerMenu">
                29 декабря 2023г.
            </div>
            <textarea class="notepad__textarea">asdalskjdlkasjdlkas</textarea>
        </div>
    </div>

    <footer>
        <p class="copyright">*getYear*©</p>
    </footer>

    <div class="popupInfo popup">
        <div class="popupContainer">
            <button class="closePopup icon">x</button>
        </div>
    </div>
    <div class="popupSettings popup">
        <div class="popupContainer">
            <button class="closePopup icon">x</button>
        </div>
    </div>
</body>

<script src="./source/js/simpleScript.js"></script>

</html>