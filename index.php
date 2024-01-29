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
                Simple Diary
            </h2>
            <div class="iconBlock">
                <a href="authorization/"><img src="./source/img/log_in.png" alt="info" class="icon btnLogin eventPopup"></a>

                <img src="./source/img/info.png" alt="info" class="icon btnInfo eventPopup">

                <img src="./source/img/settings.png" alt="settings" class="icon btnSettings eventPopup">
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
                    <div class="blockNotes__noteNew" style="display: block;"></div>
                    <img src="./source/img/add.png" alt="add" class="icon blockNotes__btnAddNote eventPopup">
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
                    <div class="blockNotes__noteNew" style="display: block;"></div>
                    <img src="./source/img/add.png" alt="add" class="icon blockNotes__btnAddNote eventPopup">
                </div>
            </div>
            <div class="notepad__title">
                <div class="notepad__buttons">
                    <img src="./source/img/burger-menu.png" alt="burger-menu" class="icon notepad__burgerMenu eventPopup">
                    <img src="./source/img/save.png" alt="save" class="icon notepad__save eventPopup">
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

    <div class="popupContainer">
        <div class="popup">
            <button class="closePopup icon">x</button>
            <div class="popupContent popupInfo">
                <h2>Простой дневник</h2>
                <p>Это простой дневник для написания записей в браузере. Все записи сохраняться на вашем компьютере.</p>
                <p>Каждый новый день автоматически создается новая запись с нынешней датой. Если ничего не написать в этот день, то запись не будет сохранятся.</p>
                <p>Также имеется возможность написания обычных заметок, которым можно дать название.</p>
                <p> <b>    Для сохранения записей необходимо нажать на кнопку сохранения!</b></p>
                <h3 class="popupInfo__titleProfile"></h3>
                <p class="popupInfo__username"></p>
            </div>

            <div class="popupContent popupSettings">
                <h2>Настройки</h2>
                <div class="fieldForm">
                    <label for="theme">Темная тема</label>
                    <input type="checkbox" id="theme" class="settings__theme">
                </div>
                <div class="fieldForm">
                    <label for="fontSize">Размер шрифта в записях</label>
                    <div class="settings__blockFontSize"><button class="settings__fontSize" id="reduceFont">Уменьшить</button><button class="settings__fontSize" id="increaseFont">Увеличить</button></div>
                </div>
            </div>
            <div class="popupContent popupAddNote">
                <h3>Создание новой записи</h3>
                <div class="formAddNewNote">
                    <label for="titleNewNote">Название</label>
                    <input type="text" id="titleNewNote" name="titleNewNote" class="btntitleNewNote">
                    <div class="formAddNewNote__blockBtn"><a class="formAddNewNote__btn">Добавить</a>
                        <p class="titleNewNote__error">Введите название</p>
                    </div>
                </div>
            </div>
            <div class="popupContent popupMessage">
                <div class="popupMessage_block">
                    <p class="popupMessage__message"></p>

                </div>
            </div>
            <div class="popupContent popupLogin">
                <p class="textExit">Вы действительно хотите выйти из профиля?</p>
                <div class="popupLogin__answers"><button class="icon answer answerYes">Да</button>
                    <button class="icon answer answerNo">Нет</button>
                </div>
            </div>
            <div class="popupContent popupDelete">
                <p class="textExit">Вы хотите удалить запись?</p>
                <div class="popupDelete__answers"><button class="icon answer answerYes answerDeleteYes">Да</button>
                    <button class="icon answer answerNo answerDeleteNo">Нет</button>
                </div>
            </div>
        </div>
    </div>


</body>

<script src="source/js/loadingNotes.js" type="module"></script>
<script src="source/js/controlProfile.js" type="module"></script>
<script src="source/js/eventsUI.js" type="module"></script>
<script src="source/js/uiScript.js" type="module"></script>
<script src="source/js/settings.js" type="module"></script>

</html>