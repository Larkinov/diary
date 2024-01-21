<?php

require_once("./mySql/loadingNotes.php");
?>
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="source/style.css">
    <title>Дневник</title>
    <script src="source/js/const.js" type="module"></script>
</head>

<body>
    <?php loading_notes() ?>
    <header>
        <div class="header__container">
            <h2 class="logo">
                Simple Dialy
            </h2>
            <div class="iconBlock">
                <a href="authorization/"><img src="./source/img/log_in.png" alt="info" class="icon btnLogin"></a>

                <img src="./source/img/info.png" alt="info" class="icon btnInfo">

                <img src="./source/img/settings.png" alt="settings" class="icon btnSettings">
            </div>
        </div>

    </header>
    <div class="content">
        <div class="sidebar__container">
            <div class="sidebar">
                <div class="blockNotes__titles">

                    <button class="blockNotes__btnDairy">Дневник</button>
                    <button class="blockNotes__btnNotes">Заметки</button>
                </div>
                <input class="blockNotes__search" placeholder="Поиск записи" />
                <div class='blockNotes__container'>
                    <img src="./source/img/add.png" alt="add" class="icon blockNotes__btnAddNote">
                </div>
            </div>
        </div>
        <div class="notepad">
            <div class="blockNotes">
                <div class="blockNotes__titles">
                    <button class="blockNotes__btnDairy">Дневник</button>
                    <button class="blockNotes__btnNotes">Заметки</button>
                </div>
                <input class="blockNotes__search" placeholder="Поиск записи" />
                <div class='blockNotes__container'>
                    <img src="./source/img/add.png" alt="add" class="icon blockNotes__btnAddNote">
                </div>
            </div>
            <div class="notepad__title">
                <div class="notepad__buttons">
                    <img src="./source/img/burger-menu.png" alt="burger-menu" class="icon notepad__burgerMenu">
                    <img src="./source/img/save.png" alt="save" class="icon notepad__save">
                </div>

                <p class="notepad__titleNote"></p>
            </div>
            <form action="./mySql/addUpdateNote.php" method="POST">
                <textarea class="notepad__textarea" name="text">...</textarea>
                <input type="text" name="id" hidden value="<?php if (isset($_GET['id'])) echo $_GET['id']; ?>">
                <input type="text" name="date" hidden>
                <input type="text" name="typeNote" hidden>
                <input type="text" name="title" hidden>
                <button type="submit" style="position:absolute; background:red; left:-1000px" id="btnSubmit"></button>
            </form>

        </div>
    </div>

    <footer>
        <p class="copyright">*getYear*©</p>
    </footer>

    <div class="popupContainerInfo popupContainer">
        <div class="popupInfo popup">
            <button class="closePopup icon">x</button>
            <div class="popupContent">
                <h2>Простой дневник</h2>
                <p>Это простой дневник для написания записей в браузере. Все записи сохранятся на вашем компьютере.</p>
                <p>Каждый новый день автоматически создается новая запись с нынешней датой. Если ничего не написать в этот день, то запись не будет сохранятся.</p>
                <p>Также имеется возможность написания обычных заметок, которым можно дать название.</p>
            </div>

        </div>
    </div>
    <div class="popupContainerSettings popupContainer">
        <div class="popupSettings popup">
            <button class="closePopup icon">x</button>
            <div class="popupContent">
                <h2>Настройки</h2>
                <div class="fieldForm">
                    <label for="theme">Темная тема</label>
                    <input type="checkbox" id="theme" class="settings__theme">
                </div>

            </div>
        </div>
    </div>
    <div class="popupContainerMessage popupContainer ">
        <div class="popupMessage popup popupSmall">
            <button class="closePopup icon">x</button>
            <p class="popupMessage__message"></p>
        </div>
    </div>
    <div class="popupContainerLogin popupContainer ">
        <div class="popupLogin popup popupSmall">
            <button class="closePopup icon">x</button>
            <p class="textExit">Вы действительно хотите выйти из профиля?</p>
            <div><button class="icon answer answerYes">Да</button>
                <button class="icon answer answerNo">Нет</button>
            </div>
        </div>
    </div>
    <div class="popupContainerAddNote popupContainer ">
        <div class="popupAddNote popup popupSmallSimple">
            <button class="closePopup icon">x</button>
            <div class="popupContent">
                <h3>Создание новой записи</h3>
                <div class="formAddNewNote">
                    <label for="titleNewNote">Название</label>
                    <input type="text" id="titleNewNote" name="titleNewNote" class="btntitleNewNote">
                    <div class="formAddNewNote__blockBtn"><a class="formAddNewNote__btn">Добавить</a>
                        <p class="titleNewNote__error">Введите название</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</body>

<script src="source/js/loadingNotes.js" type="module"></script>
<script src="source/js/uiScript.js" type="module"></script>
<script src="source/js/controlProfile.js" type="module"></script>
<script src="source/js/theme.js" type="module"></script>

</html>