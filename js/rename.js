const rename = document.querySelector('#letterPage__form-rename');

// const LETTERNAME_KEY = "lettername";

function renameSet() {     
    localStorage.removeItem(LETTERNAME_KEY)
}

rename.addEventListener("click", renameSet);