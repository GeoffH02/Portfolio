window.onload = () => {
    let textChange = document.querySelector(".changingText")
    $("#alertArea").hide()

    function changeWelcome() {
        const rndVal = ["Bonjour, bienvenue sur mon portoflio.", "Hello, welcome to my portfolio.", "مرحبا ، مرحبا بكم في أعمالي.", "Hallo, willkommen in meinem Portfolio.", "こんにちは、私のポートフォリオへようこそ。", "Здравствуйте, добро пожаловать в мое портфолио.", "Hola, bienvenido a mi portafolio.", "Salve, librarium meum salve."]
        const random = Math.floor(Math.random() * rndVal.length);

        $('.changingText').fadeOut(0);
        $('.changingText').fadeIn(500);
        textChange.innerHTML = rndVal[random]

    }

    function calculateAge(age) {
        var diff_ms = Date.now() - age.getTime();
        var age_dt = new Date(diff_ms);

        let ageAct = Math.abs(age_dt.getUTCFullYear() - 1970);
        return "My name is Geoffrey, Im " + ageAct + "Years old."
    }

    document.querySelector("#idAge").innerHTML = calculateAge(new Date(2000, 4, 29))
    setInterval(changeWelcome, 5000)
}

let darkModeState = 1

function burgerMenu() {
    let nav = document.querySelector("#myTopnav");
    if (nav.className === "nav") {
        nav.className += " responsive";
    } else {
        nav.className = "nav";
    }
}

function darkMode() {
    let all = document.querySelectorAll(".bg-dark")
    console.log(darkModeState)

    if (darkModeState === 0) {
        let all = document.querySelectorAll(".bg-light")
        for (var j = 0; j < all.length; j++) {
            darkModeState = 1
            all[j].classList.add('bg-dark');
            all[j].classList.add('text-light');
            all[j].classList.remove('bg-light');
            all[j].classList.remove('text-dark');
        }
    } else {
        for (var i = 0; i < all.length; i++) {
            darkModeState = 0
            all[i].classList.add('bg-light');
            all[i].classList.add('text-dark');
            all[i].classList.remove('bg-dark');
            all[i].classList.remove('text-light');
        }
    }
}

function showAlert(id) {

    let textNotif = ""
    let alertMail = "geoffrey02@orange.fr"
    let linkToSite = "https://geoffh02.github.io/Portfolio/"
    switch (id) {
        case  'email':
            textNotif = "Email added to clipboard." + '\n' + alertMail
            navigator.clipboard.writeText(alertMail);
            break;
        case  'emailcontact':
            textNotif = "Email added to clipboard." + '\n' + alertMail
            navigator.clipboard.writeText(alertMail);
            break;
        case  'emailsocial':
            textNotif = "Email added to clipboard." + '\n' + alertMail
            navigator.clipboard.writeText(alertMail);
            break;
        case 'siteShare':
            textNotif = "WebSite link added to clipboard" + '\n' + linkToSite
            navigator.clipboard.writeText(linkToSite);
            break;

    }

    let alert = document.querySelector("#alertArea")
    let message = document.querySelector(".notifText")
    message.innerHTML = textNotif
    alert.classList.add('d-flex')
    $("#alertArea").fadeIn()
    $("#alertArea").fadeOut(7500)
    $("#alertArea").promise().done(function () {
        alert.classList.remove('d-flex')
    })
}
