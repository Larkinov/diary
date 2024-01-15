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
                <a href="authorization/index.php"><img src="./source/img/log_in.png" alt="info" class="icon btnLogin"></a>

                <img src="./source/img/info.png" alt="info" class="icon btnInfo">

                <img src="./source/img/settings.png" alt="settings" class="icon btnSettings">
            </div>
        </div>

    </header>
    <div class="content">
        <div class="sidebar__container">
            <div class="sidebar">
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
                <div class="notepad__buttons">
                    <img src="./source/img/burger-menu.png" alt="burger-menu" class="icon notepad__burgerMenu">
                    <img src="./source/img/save.png" alt="save" class="icon notepad__save">
                </div>

                <p class="notepad__dateNow"></p>
            </div>
            <form action="" class="">
                <textarea class="notepad__textarea">...</textarea>
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
                <p>Это простой дневник для написания записей в браузере. Все записи сохранятся на вашем компьютере.</p>
                <p>Каждый новый день автоматически создается новая запись с нынешней датой. Если ничего не написать в этот день, то запись не будет сохранятся.</p>
                <p>Также имеется возможность написания обычных заметок, которым можно дать название.</p>
            </div>
        </div>
    </div>
    <!-- <div class="popupContainerLogin popupContainer">
        <div class="popupLogin popup">
            <a href=- class="closePopup icon">x</a>
            <div class="popupContent">
                <h2>Вход</h2>
                <p>Это простой дневник для написания записей в браузере. Все записи сохранятся на вашем компьютере.</p>
            </div>
        </div>
    </div> -->
</body>

<script src="source/js/uiScript.js"></script>
<script src="source/js/textareaLocalStorage.js"></script>
<script src="source/js/saveTextInBase.js"></script>

</html>