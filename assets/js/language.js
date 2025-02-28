console.log("Старт смены языка"); 


const texts = {
    ru: {
        language: "ЯЗЫК",
        Name: "ТИМ ХАУС",
        Main: "ГЛАВНАЯ",
        Services: "УСЛУГИ",
        OurWorks: "НАШИ РАБОТЫ",
        Prices: "ЦЕНЫ",
        AboutUs: "ПРО НАС",
        Contacts: "КОНТАКТЫ"
    },
    ua: {
        language: "ua",
        Name: "ТІМ ХАУС",
        Main: "ГОЛОВНА",
        Services: "ПОСЛУГИ",
        OurWorks: "НАШІ РОБОТИ",
        Prices: "ЦІНИ",
        AboutUs: "ПРО НАС",
        Contacts: "КОНТАКТИ"
    },
    en: {
        language: "en",
        Name: "TEAM HOUSE",
        Main: "MAIN",
        Services: "SERVICES",
        OurWorks: "OUR WORKS",
        Prices: "PRICES",
        AboutUs: "ABOUT US",
        Contacts: "CONTACTS"
    },
    fr: {
        language: "fr",
        Name: "TEAM HOUSE",
        Main: "ACCUEIL",
        Services: "SERVICES",
        OurWorks: "NOS TRAVAUX",
        Prices: "PRIX",
        AboutUs: "À PROPOS",
        Contacts: "CONTACTS"
    }
};




function setLanguage(language) {
    // Сохраняем выбранный язык в localStorage
    localStorage.setItem('language', language);

    // Изменяем title на странице
    document.getElementById('Name').innerText = texts[language].Name;
    document.getElementById('Main').innerText = texts[language].Main;
    document.getElementById('Services').innerText = texts[language].Services;
    document.getElementById('OurWorks').innerText = texts[language].OurWorks;
    document.getElementById('Prices').innerText = texts[language].Prices;
    document.getElementById('AboutUs').innerText = texts[language].AboutUs;
    document.getElementById('Contacts').innerText = texts[language].Contacts;


    // Обновляем атрибут lang
    document.documentElement.lang = language;
}

// Загружаем язык при старте страницы
function loadLanguage() {
    // Проверяем, есть ли язык в localStorage
    const savedLanguage = localStorage.getItem('language');
    
    if (savedLanguage) {
        // Если язык найден в localStorage, применяем его
        setLanguage(savedLanguage);
    } else {
        // Если язык не найден, устанавливаем язык по умолчанию (например, русский)
        setLanguage('ua');
    }
}

// Загружаем язык при загрузке страницы
loadLanguage();

