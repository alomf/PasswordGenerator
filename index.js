const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let password1 = "";
let password2 = "";
let generateBtn = document.getElementById("generate-btn");
let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");

generateBtn.addEventListener("click", function generatedPassword() {
    password1 = "";
    password2 = "";

    for (let i = 0; i < 16; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password1 += characters[randomIndex];
        password1El.textContent = password1;
    }

    for (let i = 0; i < 16; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password2 += characters[randomIndex];
        password2El.textContent = password2;
    }
});

function passwordCopy1() {
    if (password1) {
        window.prompt("Copy to clipboard: Ctrl+C, Enter", password1);
    }
}

function passwordCopy2() {
    if (password2) {
        window.prompt("Copy to clipboard: Ctrl+C, Enter", password2);
    }
};
