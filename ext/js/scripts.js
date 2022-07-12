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

function changeLanguage() {

    let en = [
        ["summary", "Summary"],
        ["gradess", "Grades"],
        ["experiences", "Experience"],
        ["projectss", "Projects"],
        ["contactss", "Contacts"],
        ["idAge", "My name is Geoffrey, Im 22Years old."],
        ["developper", "French Developer.<span\n" + "class=\"frenchFlag rounded-pill flagInDesc\"></span>"],
        ["CVHere", "Take a look at my CV here <a href=\"ext/img/projects/Hallier_Geoffrey.pdf\"><i\n" + "class=\"fa-solid fa-download\"></i></a>"],
        ["mynameTop", "My name is Geoffrey Hallier."],
        ["tagDev", "Developer"],
        ["socialsLinks", "Socials links <i class=\"fa-solid fa-arrow-turn-up\"></i>"],
        ["aboutme", "A bit about me :"],
        ["languagesispeak", "I speak french and english."],
        ["studying", "Currently studying at Epitech Lille."],
        ["ilandedin", "I landed in Web Developpement in 2020."],
        ["gameDev", "I was in game developpement from 2017 to 2020."],
        ["stilldoing", "Still doing games scripting during my free time."],
        ["proudof", "Im proud of my work to be honest."],
        ["jobsearch", "Im actually in job search."],
        ["ineverstop", "I never stop learning and that's what i like!"],
        ["oldDev", "And im currently in developpement for over 8 years...\n" + "<div class=\"CMDlike\"></div>"],
        ["duringThese", "During theses 8 years what i learn :"],
        ["gradeandActv", "What's my grades and activities ?"],
        ["gradesobtn", "Current grades"],
        ["brevet", "Brevet"],
        ["acquiredin2015", "Acquired in 2015."],
        ["at15yo", "At 15 Years old"],
        ["atlenouv", "At Le-Nouvion-en-Thierache."],
        ["inAisne", "In the Aisne departement."],
        ["BEP", "BEP Machining technician."],
        ["acquis202", "Acquired in 2020."],
        ["at20yo", "At 20 years old."],
        ["athirson", "At Hirson."],
        ["inaisnetoo", "In the Aisne departement."],
        ["BAC", "BAC +2"],
        ["inprocess", "In the process of acquiring"],
        ["at22", "At 22 years old."],
        ["webAc", "At Web@cademie."],
        ["atlille", "At Lille."],
        ["actidone", "Activities done"],
        ["orderprepare", "Order preparer."],
        ["2months", "2 Months each summer for work."],
        ["20182021", "From 2018 to 2021."],
        ["aisneagain", "In the Aisne departement."],
        ["techicalmaint", "Technical maintenance."],
        ["3monthseach", "3 Months each years for school."],
        ["2018202111", "From 2018 to 2021."],
        ["aisnepower", "In the Aisne departement."],
        ["waletweb", "Website and wallet development."],
        ["augt2021", "From august 2021 to september 2023."],
        ["forschool", "For school learning."],
        ["lilleagain", "At Lille."],

    ]

    let fr = [
        ["summary", "Resumé"],
        ["gradess", "Parcours"],
        ["experiences", "Experience"],
        ["projectss", "Projets"],
        ["contactss", "Contacts"],
        ["idAge", "Je m'appelle Geoffrey j'ai 22 ans."],
        ["developper", "Développeur Français.<span\n" + "class=\"frenchFlag rounded-pill flagInDesc\"></span>"],
        ["CVHere", "Mon CV est disponible ici <a href=\"ext/img/projects/Hallier_Geoffrey.pdf\"><i\n" + "class=\"fa-solid fa-download\"></i></a>"],
        ["mynameTop", "Je m'apelle Geoffrey Hallier."],
        ["tagDev", "Developpeur"],
        ["socialsLinks", "Réseaux sociaux <i class=\"fa-solid fa-arrow-turn-up\"></i>"],
        ["aboutme", "A propos de moi :"],
        ["languagesispeak", "Je parle Anglais & Français."],
        ["studying", "J'étudie actuellement a Epitech."],
        ["ilandedin", "J'ai atterri dans le developpement Web en 2020."],
        ["gameDev", "J'étais dans le developpement jeux-video de 2017 à 2020."],
        ["stilldoing", "Je developpe toujours dans le jeux-vidéo durant mon temps libre."],
        ["proudof", "Je suis assez fier de mon travail pour être honnête"],
        ["jobsearch", "Je recherche actuellement un travail."],
        ["ineverstop", "Je n'arrête jamais d'apprendre et j'aime sa !"],
        ["oldDev", "Je suis dans le developpement depuis 8ans...\n" + "<div class=\"CMDlike\"></div>"],
        ["duringThese", "Durant ces 8ans j'ai appris :"],
        ["gradeandActv", "Mon parcours"],
        ["gradesobtn", "Mes Diplômes"],
        ["brevet", "Brevet"],
        ["acquiredin2015", "Acquis en 2015."],
        ["at15yo", "A 15ans"],
        ["atlenouv", "A Le-Nouvion-en-Thierache."],
        ["inAisne", "Dans le departement de l'Aisne."],
        ["BEP", "BEP technicien d'usinage."],
        ["acquis202", "Acquis en 2020."],
        ["at20yo", "A 20 ans."],
        ["athirson", "A Hirson."],
        ["inaisnetoo", "Dans le departement de l'Aisne."],
        ["BAC", "BAC +2"],
        ["inprocess", "En cours."],
        ["at22", "A 22ans."],
        ["webAc", "A la Web@cademie."],
        ["atlille", "A Lille."],
        ["actidone", "Postes occupées"],
        ["orderprepare", "Préparateur de commandes."],
        ["2months", "2 Mois chaque été."],
        ["20182021", "De 2018 à 2021."],
        ["aisneagain", "Dans le departement de l'Aisne."],
        ["techicalmaint", "Technicien de maintenance."],
        ["3monthseach", "3 Mois par an pour mon lycée."],
        ["2018202111", "De 2018 à 2021."],
        ["aisnepower", "Dans le departement de l'Aisne."],
        ["waletweb", "Developpement du site et du wallet."],
        ["augt2021", "De Août 2021 à septembre 2023."],
        ["forschool", "Pour de l'apprentisage."],
        ["lilleagain", "A Lille."],

    ]

    for (var i = 0; i < fr.length; i++) {
        console.log(fr[i][0])
        let act = document.getElementById(fr[i][0])
        act.innerHTML = fr[i][1]
    }


}
