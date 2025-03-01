console.log("Старт смены языка");

const texts = {
    ru: {},
    ua: {},
    en: {},
    fr: {}
};
const titleTexts = {
    ru: {},
    ua: {},
    en: {},
    fr: {}
};

function addTranslation(key, ru, ua, en, fr, titleRu, titleUa, titleEn, titleFr) {
    // Добавление текстов для перевода
    texts.ru[key] = ru;
    texts.ua[key] = ua;
    texts.en[key] = en;
    texts.fr[key] = fr;

    // Добавление атрибутов title, если они переданы
    if (titleRu) titleTexts.ru[key] = titleRu;
    if (titleUa) titleTexts.ua[key] = titleUa;
    if (titleEn) titleTexts.en[key] = titleEn;
    if (titleFr) titleTexts.fr[key] = titleFr;
}

// Добавляем переводы для всех языков
addTranslation("language", "ru", "ua", "en", "fr");
addTranslation("Name", "ТИМ ХАУС", "ТІМ ХАУС", "TEAM HOUSE", "TEAM HOUSE");
addTranslation("Main", "ГЛАВНАЯ", "ГОЛОВНА", "MAIN", "ACCUEIL");
addTranslation("Services", "УСЛУГИ", "ПОСЛУГИ", "SERVICES", "SERVICES");
addTranslation("OurWorks", "НАШИ РАБОТЫ", "НАШІ РОБОТИ", "OUR WORKS", "NOS TRAVAUX");
addTranslation("Prices", "ЦЕНЫ", "ЦІНИ", "PRICES", "PRIX");
addTranslation("AboutUs", "ПРО НАС", "ПРО НАС", "ABOUT US", "À PROPOS");
addTranslation("Contacts", "КОНТАКТЫ", "КОНТАКТИ", "CONTACTS", "CONTACTS");
addTranslation("Lang", "ЯЗЫК", "МОВА", "LANGUAGE", "LA LANGUE");
addTranslation("M001", 
    "Твой дом в руках профессионалов", 
    "Твій дім наша справа", 
    "Your home is in the hands of professionals", 
    "Votre maison est entre les mains de professionnels"
);
addTranslation("M0011", 
    "Мы создаём комфорт и качество, используя лучшие материалы и современные технологии, чтобы каждое пространство соответствовало вашим ожиданиям.", 
    "Ми створюємо комфорт і якість, використовуючи найкращі матеріали та сучасні технології, щоб кожен простір відповідав вашим очікуванням.", 
    "We create comfort and quality using the best materials and modern technologies so that every space meets your expectations.", 
    "Nous créons du confort et de la qualité en utilisant les meilleurs matériaux et les technologies modernes afin que chaque espace réponde à vos attentes."
);
addTranslation("M002", 
"К нашим услугам",
 "До наших послуг", 
 "To our services",
  "À nos services"
  );
  addTranslation("M003", 
  "Строим будущее вместе!", 
  "Будуємо майбутнє разом!",
   "We build the future together!", 
   "Nous construisons l'avenir ensemble!"
   );
   addTranslation("M004", 
    "Надежность, инновации и профессионализм — основа нашей работы, которая помогает создавать уютные, функциональные и долговечные здания.", // ru
    "Надійність, інновації та професіоналізм – основа нашої роботи, яка допомагає створювати затишні, функціональні та довговічні будівлі.", // ua
    "Reliability, innovation, and professionalism are the foundation of our work, helping to create cozy, functional, and durable buildings.", // en
    "La fiabilité, l'innovation et le professionnalisme sont la base de notre travail, qui permet de créer des bâtiments confortables, fonctionnels et durables." // fr
);
addTranslation("M005", 
    "Перейти к покраске и утеплению", // ru
    "Перейти до фарбування та утеплення", // ua
    "To proceed to painting and insulation", // en
    "Passer à la peinture et à l'isolation" // fr
);
addTranslation("M006", 
    "Ваша идея — наше воплощение", // ru
    "Ваша ідея — наше втілення", // ua
    "Your idea is our implementation", // en
    "Votre idée, notre réalisation" // fr
);
addTranslation("M007", 
    "Мы внимательно слушаем ваши пожелания и применяем передовые технологии, чтобы каждый проект стал уникальным и идеально подходил вам.", // ru
    "Ми уважно дослухаємося до ваших побажань і застосовуємо передові технології, щоб кожен проєкт став унікальним та ідеально підходив вам.", // ua
    "We carefully listen to your wishes and apply advanced technologies to make each project unique and perfectly suited to you.", // en
    "Nous écoutons attentivement vos souhaits et appliquons des technologies avancées pour que chaque projet soit unique et parfaitement adapté à vos besoins." // fr
);
addTranslation("M008", 
    "Перейти к строительству", // ru
    "Перейти до будівництва", // ua
    "To proceed to construction", // en
    "Passer à la construction" // fr
);
addTranslation("M009", 
    "Дом, в котором хочется жить!", // ru
    "Дім, в якому хочеться жити!", // ua
    "A house you want to live in!", // en
    "Une maison où il fait bon vivre !" // fr
);
addTranslation("M010", 
    "Мы создаем пространство, где гармония, комфорт и качество сочетаются, чтобы вы могли наслаждаться каждым моментом в своем идеальном доме.", // ru
    "Ми створюємо простір, де гармонія, комфорт та якість поєднуються, щоб ви могли насолоджуватися кожним моментом у своєму ідеальному будинку.", // ua
    "We create a space where harmony, comfort, and quality combine, so you can enjoy every moment in your perfect home.", // en
    "Nous créons un espace où l'harmonie, le confort et la qualité se combinent, pour que vous puissiez profiter de chaque moment dans votre maison idéale." // fr
);
addTranslation("M011", 
    "Наше производство", // ru
    "Наше виробництво", // ua
    "Our production", // en
    "Notre production" // fr
);
addTranslation("M012", 
    "Качество, которое говорит само за себя!", // ru
    "Якість, що говорить сама за себе!", // ua
    "Quality that speaks for itself!", // en
    "La qualité qui parle d'elle-même !" // fr
);
addTranslation("M013", 
    "Мы придерживаемся высоких стандартов в каждом проекте, обеспечивая долговечность, стиль и безопасность вашего жилья или бизнес-пространства.", // ru
    "Ми дотримуємося високих стандартів у кожному проєкті, забезпечуючи довговічність, стиль та безпеку вашого житла або бізнес-простору.", // ua
    "We adhere to high standards in every project, ensuring the durability, style, and safety of your home or business space.", // en
    "Nous respectons des normes élevées dans chaque projet, garantissant la durabilité, le style et la sécurité de votre logement ou de votre espace professionnel." // fr
);
addTranslation("M014", 
    "Наша гарантия", // ru
    "Наша гарантія", // ua
    "Our guarantee", // en
    "Notre garantie" // fr
);
addTranslation("M015", 
    "18 лет строительства", // ru
    "18 років будівництва", // ua
    "18 years of construction", // en
    "18 ans de construction" // fr
);
addTranslation("M016", 
    "Наша история", // ru
    "Наша історія", // ua
    "Our story", // en
    "Notre histoire" // fr
);
addTranslation("M017", 
    "Мы работаем с 2007 года и имеем 18 лет опыта в деревянном строительстве. За это время мы построили более 100 объектов по всей Украине, помогая воплощать мечты о уютном и надежном доме. Каждый проект ТИМ ХАУС — это сочетание мастерства, ответственности и стремления к идеалу.", // ru
    "Ми працюємо з 2007 року та маємо 18 років досвіду у дерев'яному будівництві. За цей час збудували понад 100 об'єктів по всій Україні, допомагаючи втілювати мрії про затишний і надійний дім. Кожен проєкт ТІМ ХАУС – це поєднання майстерності, відповідальності та прагнення до ідеалу.", // ua
    "We have been working since 2007 and have 18 years of experience in timber construction. During this time, we have built over 100 objects across Ukraine, helping to bring dreams of a cozy and reliable home to life. Every project of TEAM HOUSE is a combination of craftsmanship, responsibility, and striving for perfection.", // en
    "Nous travaillons depuis 2007 et avons 18 ans d'expérience dans la construction en bois. Au cours de cette période, nous avons construit plus de 100 projets à travers l'Ukraine, aidant à réaliser des rêves de maisons confortables et fiables. Chaque projet de TEAM HOUSE est une combinaison de savoir-faire, de responsabilité et de recherche de la perfection." // fr
);
addTranslation("M018", 
    "18 лет опыта", // ru
    "18 років досвіду", // ua
    "18 years of experience", // en
    "18 ans d'expérience" // fr
);
addTranslation("M019", 
    "Собственное производство", // ru
    "Власне виробництво", // ua
    "Own production", // en
    "Production propre" // fr
);
addTranslation("M020", 
    "Профессиональная команда", // ru
    "Професійна команда", // ua
    "Professional team", // en
    "Équipe professionnelle" // fr
);
addTranslation("M021", 
    "Мы предоставляем гарантию 3 года на все наши работы и изготовленные материалы. Это наша уверенность в качестве и надежности каждого проекта.", // ru
    "Ми надаємо гарантію 3 роки на всі наші роботи та виготовлені матеріали. Це наша впевненість у якості та надійності кожного проєкту.", // ua
    "We provide a 3-year warranty on all our work and materials produced. This is our confidence in the quality and reliability of every project.", // en
    "Nous offrons une garantie de 3 ans sur tous nos travaux et matériaux fabriqués. C'est notre confiance dans la qualité et la fiabilité de chaque projet." // fr
);
addTranslation("M022", 
    "Услуги", // ru
    "Послуги", // ua
    "Services", // en
    "Services" // fr
);
addTranslation("M023", 
    "Выбранные услуги", // ru
    "Обрані послуги", // uk
    "Selected services", // en
    "Services sélectionnées" // fr
);
addTranslation("M024", 
    "Строительство", // ru
    "Будівництво", // uk
    "Construction", // en
    "Construction" // fr
);
addTranslation("M025", 
    "Полный комплекс строительных и монтажных услуг: от возведения фундаментов и домов до обустройства фасадов, террас, беседок и садовых домиков под ключ.", // ru
    "Повний комплекс будівельних та монтажних послуг: від зведення фундаментів і будинків до облаштування фасадів, терас, альтанок і садових домиків під ключ.", // uk
    "Full range of construction and installation services: from foundation and house construction to facade, terrace, gazebo, and garden house arrangements turnkey.", // en
    "Ensemble complet de services de construction et d'installation : de la construction de fondations et de maisons à l'aménagement de façades, terrasses, kiosques et maisons de jardin clé en main." // fr
);
addTranslation("M026", 
    "Детальніше про нашу справу", // uk
    "Подробнее про нас", // ru
    "More about our business", // en
    "Plus d'informations sur notre entreprise" // fr
);
addTranslation("M027", 
    "Покраска и Утепление", // ru
    "Фарбування та Утеплення", // uk
    "Painting and Insulation", // en
    "Peinture et Isolation" // fr
);
addTranslation("M028", 
    "Выполняем диагностику теплопотерь, покраску, герметизацию деревянных домов, восстановление покрытий и утепление стен для улучшения энергоэффективности.", // ru
    "Виконуємо діагностику тепловтрат, фарбування, герметизацію дерев'яних будинків, відновлення покриттів та утеплення стін, для покращення енергоефективності.", // uk
    "We perform heat loss diagnostics, painting, sealing of wooden houses, coating restoration, and wall insulation to improve energy efficiency.", // en
    "Nous effectuons le diagnostic des pertes de chaleur, la peinture, l'étanchéité des maisons en bois, la restauration des revêtements et l'isolation des murs pour améliorer l'efficacité énergétique." // fr
);
addTranslation("M029", 
    "Узнать детали", // ru
    "Дізнатися деталі", // uk
    "Find out details", // en
    "Obtenez les détails" // fr
);
addTranslation("M030", 
    "Реставрация окон, дверей и террас", // ru
    "Реставрація вікон, дверей та терас", // uk
    "Window, door, and terrace restoration", // en
    "Restauration des fenêtres, portes et terrasses" // fr
);
addTranslation("M031", 
    "Профессиональная покраска окон и дверей, обновление ограждений, обслуживание террас и садовой мебели, а также ремонт и покраска лестниц.", // ru
    "Професійне фарбування вікон і дверей, оновлення огорож, обслуговування терас і садових меблів, а також ремонт і фарбування сходів.", // uk
    "Professional painting of windows and doors, updating fences, maintenance of terraces and garden furniture, as well as repair and painting of stairs.", // en
    "Peinture professionnelle des fenêtres et portes, mise à jour des clôtures, entretien des terrasses et des meubles de jardin, ainsi que réparation et peinture des escaliers." // fr
);
addTranslation("M032", 
    "О реставрации окон", // ru
    "Про реставрацію вікон", // uk
    "About window restoration", // en
    "À propos de la restauration des fenêtres" // fr
);
addTranslation("M033", 
    "Мастер на час", // ru
    "Майстер на годину", // uk
    "Handyman by the hour", // en
    "Artisan à l'heure" // fr
);
addTranslation("M034", 
    "Экспресс-ремонт и срочный выезд для утепления, монтажа обшивки, ремонта сантехники, электрических работ и обслуживания террас — оперативно и качественно!", // ru
    "Експрес-ремонт і терміновий виїзд для утеплення, монтажу обшивки, ремонту сантехніки, електричних робіт та обслуговування терас — оперативно та якісно!", // uk
    "Express repair and urgent call-out for insulation, cladding installation, plumbing repairs, electrical work, and terrace maintenance — quickly and efficiently!", // en
    "Réparation express et intervention urgente pour l'isolation, l'installation de revêtements, la réparation de la plomberie, les travaux électriques et l'entretien des terrasses — rapidement et efficacement !" // fr
);
addTranslation("M035", 
    "Подробнее о услуге", // ru
    "Детальніше про послугу", // uk
    "More about the service", // en
    "Plus d'informations sur le service" // fr
);
addTranslation("M036", 
    "Производство", // ru
    "Виробництво", // uk
    "Manufacturing", // en
    "Fabrication" // fr
);
addTranslation("M037", 
    "Изготавливаем пиломатериалы, клееный брус, террасные доски, ограждения и декоративные элементы, произведенные на заводах в Киеве и Сарнах.", // ru
    "Виготовляємо пиломатеріали, клеєний брус, терасні дошки, огорожі та декоративні елементи, виготовлені на заводах в Києві та Сарнах.", // uk
    "We manufacture lumber, glued beams, terrace boards, fences, and decorative elements, produced at factories in Kyiv and Sarny.", // en
    "Nous fabriquons des matériaux de charpente, des poutres collées, des planches de terrasse, des clôtures et des éléments décoratifs, fabriqués dans des usines à Kiev et Sarny." // fr
);
addTranslation("M038", 
    "Посмотреть подробнее о производстве", // ru
    "Переглянути про виробництво", // uk
    "View about manufacturing", // en
    "Voir la production" // fr
);
addTranslation("M039", 
    "Гарантия", // ru
    "Гарантія", // uk
    "Warranty", // en
    "Garantie" // fr
);
addTranslation("M040", 
    "Используем сертифицированные материалы, предоставляем гарантию 3 года, обеспечиваем прозрачность условий и оперативную поддержку клиентов.", // ru
    "Використовуємо сертифіковані матеріали, надаємо гарантію 3 роки, забезпечуємо прозорість умов і оперативну підтримку клієнтів.", // uk
    "We use certified materials, provide a 3-year warranty, ensure transparency of terms, and offer prompt customer support.", // en
    "Nous utilisons des matériaux certifiés, offrons une garantie de 3 ans, assurons la transparence des conditions et fournissons un support client rapide." // fr
);
addTranslation("M041", 
    "Перейти к гарантии", // ru
    "Перейти до гарантії", // uk
    "Go to warranty", // en
    "Passer à la garantie" // fr
);
addTranslation("M042", 
    "Наши работы", // ru
    "Наші роботи", // uk
    "Our work", // en
    "Nos travaux" // fr
);
addTranslation("M043", 
    "Строим с вдохновением, реставрируем с уважением.", // ru
    "Будуємо з натхненням, реставруємо з повагою.", // uk
    "We build with inspiration, restore with respect.", // en
    "Nous construisons avec inspiration, restaurons avec respect." // fr
);
addTranslation("M044", 
    "Все", // ru
    "Всі", // uk
    "All", // en
    "Tout" // fr
);
addTranslation("M045", 
    "Дома", // ru
    "Будинки", // uk
    "Houses", // en
    "Maisons" // fr
);
addTranslation("M046", 
    "Бани", // ru
    "Лазні", // uk
    "Bathhouses", // en
    "Bains" // fr
);
addTranslation("M047", 
    "Строительство и реставрация", // ru
    "Будівництво та реставрація", // uk
    "Construction and restoration", // en
    "Construction et restauration" // fr
);

addTranslation("M048", 
    "Каркасный дом", // ru
    "Каркасний будинок", // ua
    "Frame house", // en
    "Maison à ossature", // fr
);
addTranslation("M049", 
    "Баня из клееного бруса 180мм", // ru
    "Лазня з клеєного брусу 180мм", // ua
    "Bath made of laminated timber 180mm", // en
    "Bain en bois lamellé-collé 180mm" // fr
);
addTranslation("M050", 
    "Ограждение", // ru
    "Огорожа", // ua
    "Fence", // en
    "Clôture" // fr
);
addTranslation("M051", 
    "Сочетание дуба и стекла", // ru
    "Поєднання дуба та скла", // ua
    "Combination of oak and glass", // en
    "Combinaison de chêne et de verre" // fr
);
addTranslation("M052", 
    "Каркасный дом", // ru
    "Каркасний будинок", // ua
    "Frame house", // en
    "Maison à ossature" // fr
);
addTranslation("M053", 
    "Оцилиндрованное бревно 200м", // ru
    "Оціліндрована колода 200м", // ua
    "Turned log 200m", // en
    "Bûche cylindrée 200m" // fr
);
addTranslation("M054", 
    "Терасса 145 м2 с бассейном", // ru
    "Тераса 145 м2 з басейном", // ua
    "Terrace 145 m2 with pool", // en
    "Terrasse 145 m2 avec piscine" // fr
);
addTranslation("M055", 
    "Террасная доска термоясень", // ru
    "Терасна дошка термоясень", // ua
    "Thermoflex oak decking", // en
    "Plancher en chêne thermorégulé" // fr
);
addTranslation("M056", 
    "Дом из клееного бруса 200мм", // ru
    "Будинок з клеєного брусу 200мм", // ua
    "House made of glued timber 200mm", // en
    "Maison en bois lamellé-collé 200mm" // fr
);
addTranslation("M057", 
    "Баня 120м2", // ru
    "Лазня 120м2", // ua
    "Bathhouse 120m2", // en
    "Bain 120m2" // fr
);
addTranslation("M058", 
    "Каркасная технология, брус 100х100мм", // ru
    "Каркасна технологія, брус 100х100мм", // ua
    "Frame technology, beam 100x100mm", // en
    "Technologie à ossature, poutre 100x100mm" // fr
);
addTranslation("M059", 
    "Терраса", // ru
    "Тераса", // ua
    "Terrace", // en
    "Terrasse" // fr
);
addTranslation("M060", 
    "Композитная доска", // ru
    "Композитна дошка", // ua
    "Composite board", // en
    "Panneau composite" // fr
);
addTranslation("M061", 
    "Корпоративный офис", // ru
    "Корпоративний офіс", // ua
    "Corporate office", // en
    "Bureau d'entreprise" // fr
);
addTranslation("M062", 
    "Дружбы народов 21, вход с Иоанна Павла II", // ru
    "Дружби народів 21, вхід з Іоанна Павла II", // ua
    "21 Friendship of Nations, entrance from John Paul II", // en
    "21 Amitié des peuples, entrée par Jean-Paul II" // fr
);
addTranslation("M063", 
    "Рядом с метро Зверинецкая (Дружбы Народов - 500 м)", // ru
    "Поруч метро Звіринецька (Дружби Народів - 500 м)", // ua
    "Next to Zvirynetska metro station (Friendship of Nations - 500 m)", // en
    "À côté de la station de métro Zvirynetska (Amitié des Peuples - 500 m)" // fr
);
addTranslation("M064", 
    "Киев, Украина", // ru
    "Київ, Україна", // ua
    "Kyiv, Ukraine", // en
    "Kyiv, Ukraine" // fr
);
addTranslation("M065", 
    "Тел.:", // ru
    "Тел.:", // ua
    "Tel.:", // en
    "Tél. :" // fr
);
addTranslation("M066", 
    "Есть вопросы? Пишите нам на почту!", // ru
    "Є питання? Пишіть нам на пошту!", // ua
    "Any questions? Write to us at our email!", // en
    "Des questions ? Écrivez-nous à notre email !" // fr
);
addTranslation("M067", 
    "Категории", // ru
    "Категорії", // ua
    "Categories", // en
    "Catégories" // fr
);

addTranslation("M068", 
    "Главная", // ru
    "Головна", // ua
    "Home", // en
    "Accueil" // fr
);

addTranslation("M069", 
    "Услуги", // ru
    "Послуги", // ua
    "Services", // en
    "Services" // fr
);

addTranslation("M070", 
    "Наши работы", // ru
    "Наші роботи", // ua
    "Our Work", // en
    "Nos Travaux" // fr
);

addTranslation("M071", 
    "Цены", // ru
    "Ціни", // ua
    "Pricing", // en
    "Tarifs" // fr
);

addTranslation("M072", 
    "О нас", // ru
    "Про нас", // ua
    "About Us", // en
    "À propos de nous" // fr
);

addTranslation("M073", 
    "Контакты", // ru
    "Контакти", // ua
    "Contact", // en
    "Contacts" // fr
);
addTranslation("M074", 
    "Наши Услуги", // ru
    "Наші Послуги", // ua
    "Our Services", // en
    "Nos Services" // fr
);

addTranslation("M075", 
    "Строительство", // ru
    "Будівництво", // ua
    "Construction", // en
    "Construction" // fr
);

addTranslation("M076", 
    "Покраска и утепление", // ru
    "Фарбування та утеплення", // ua
    "Painting and Insulation", // en
    "Peinture et isolation" // fr
);

addTranslation("M077", 
    "Реставрация", // ru
    "Рестарація", // ua
    "Restoration", // en
    "Restauration" // fr
);

addTranslation("M078", 
    "Мастер на час", // ru
    "Майстер на годину", // ua
    "Handyman", // en
    "Bricolage" // fr
);

addTranslation("M079", 
    "Производство", // ru
    "Виробництво", // ua
    "Production", // en
    "Production" // fr
);


addTranslation("M081", 
    "Разработано", // ru
    "Розроблено", // ua
    "Designed by", // en
    "Conçu par" // fr
);
addTranslation("M082", 
    "Строительство", // ru
    "Будівництво", // ua
    "Construction", // en
    "Construction" // fr
);

addTranslation("M083", 
    "Огорожи та тераси", // ru
    "Огорожі та тераси", // ua
    "Fences and terraces", // en
    "Clôtures et terrasses" // fr
);

addTranslation("M084", 
    "Вентилированные фасады", // ru
    "Вентильовані фасади", // ua
    "Ventilated facades", // en
    "Façades ventilées" // fr
);

addTranslation("M085", 
    "Вагонка, имитация бруса", // ru
    "Вагонка, імітація бруса", // ua
    "Cladding, imitation of log", // en
    "Clins, imitation de rondins" // fr
);

addTranslation("M086", 
    "Фундаменты с плитой", // ru
    "Фундаменті з плитою", // ua
    "Foundations with slab", // en
    "Fondations avec dalle" // fr
);

addTranslation("M087", 
    "Каркасные дома", // ru
    "Каркасні будинки", // ua
    "Frame houses", // en
    "Maisons à ossature" // fr
);

addTranslation("M088", 
    "Реконструкция зданий", // ru
    "Реконструкція будівель", // ua
    "Building reconstruction", // en
    "Rénovation des bâtiments" // fr
);

addTranslation("M089", 
    "Альтанки на заказ", // ru
    "Альтанки на замовлення", // ua
    "Custom gazebos", // en
    "Abris de jardin sur mesure" // fr
);

addTranslation("M090", 
    "Садовые дома", // ru
    "Садові доміки під ключ", // ua
    "Garden houses turnkey", // en
    "Maisons de jardin clés en main" // fr
);

addTranslation("M091", 
    "Покраска", // ru
    "Фарбування", // ua
    "Painting", // en
    "Peinture" // fr
);

addTranslation("M092", 
    "Шлифовка поверхностей", // ru
    "Шліфування поверхонь", // ua
    "Surface sanding", // en
    "Ponçage de surface" // fr
);

addTranslation("M093", 
    "Устранение трещин, грибка", // ru
    "Усунення тріщин, грибка", // ua
    "Crack and mold removal", // en
    "Élimination des fissures, moisissure" // fr
);

addTranslation("M094", 
    "Покраска стен дома", // ru
    "Фарбування стін будинку", // ua
    "House wall painting", // en
    "Peinture des murs de maison" // fr
);

addTranslation("M095", 
    "Герметизация \"Теплый шов\"", // ru
    "Герметизація \"Теплий шов\"", // ua
    "Sealing \"Warm joint\"", // en
    "Étanchéité \"Joint chaud\"" // fr
);

addTranslation("M096", 
    "Восстановление покрытий", // ru
    "Відновлення покриттів", // ua
    "Covering restoration", // en
    "Restauration de revêtements" // fr
);

addTranslation("M097", 
    "Утепление стен, крыши", // ru
    "Утеплення стін, покрівлі", // ua
    "Insulation of walls and roof", // en
    "Isolation des murs et toit" // fr
);

addTranslation("M098", 
    "Теплопотери тепловизором", // ru
    "Тепловтрати тепловізором", // ua
    "Heat loss with thermovision", // en
    "Perte de chaleur avec thermovision" // fr
);

addTranslation("M099", 
    "Реставрация", // ru
    "Реставрація", // ua
    "Restoration", // en
    "Rénovation" // fr
);

addTranslation("M100", 
    "Обслуживание террас", // ru
    "Обслуговування терас", // ua
    "Terrace maintenance", // en
    "Entretien de terrasse" // fr
);

addTranslation("M101", 
    "Детейлинг домов", // ru
    "Детейлінг будинку", // ua
    "House detailing", // en
    "Détayage de maison" // fr
);

addTranslation("M102", 
    "Покраска окон, дверей", // ru
    "Фарбування вікон, дверей", // ua
    "Painting windows, doors", // en
    "Peinture des fenêtres, portes" // fr
);

addTranslation("M103", 
    "Огорождение, навесы", // ru
    "Огорожа, навіси", // ua
    "Fencing, canopies", // en
    "Clôtures, auvents" // fr
);

addTranslation("M104", 
    "Садовая мебель", // ru
    "Садові меблі", // ua
    "Garden furniture", // en
    "Meubles de jardin" // fr
);
addTranslation("M105", 
    "Лестницы в доме", // ru
    "Сходи в будинку", // ua
    "Stairs in the house", // en
    "Escaliers dans la maison" // fr
);

addTranslation("M106", 
    "Ремонт лестниц", // ru
    "Ремонт сходів", // ua
    "Stair repair", // en
    "Réparation d'escalier" // fr
);
addTranslation("M107", 
    "Мастер на годину", // ru
    "Майстер на годину", // ua
    "Master for an hour", // en
    "Maître à l'heure" // fr
);
addTranslation("M108", 
    "Чистка террас", // ru
    "Чистка терас", // ua
    "Terrace cleaning", // en
    "Nettoyage de terrasse" // fr
);

addTranslation("M109", 
    "Устранение сквозняков", // ru
    "Усунення протягів", // ua
    "Draft removal", // en
    "Élimination des courants d'air" // fr
);

addTranslation("M110", 
    "Покраска и ремонт", // ru
    "Фарбування та ремонт", // ua
    "Painting and repair", // en
    "Peinture et réparation" // fr
);

addTranslation("M111", 
    "Ремонт обшивки", // ru
    "Ремонт обшивки", // ua
    "Cladding repair", // en
    "Réparation du revêtement" // fr
);

addTranslation("M112", 
    "Ремонт сантехники", // ru
    "Ремонт сантехніки", // ua
    "Plumbing repair", // en
    "Réparation de plomberie" // fr
);

addTranslation("M113", 
    "Декоративные элементы", // ru
    "Декоративні елементи", // ua
    "Decorative elements", // en
    "Éléments décoratifs" // fr
);

addTranslation("M114", 
    "Электрические работы", // ru
    "Електричні роботи", // ua
    "Electrical work", // en
    "Travaux électriques" // fr
);
addTranslation("M115", 
    "Производство", // ru
    "Виробництво", // ua
    "Manufacturing", // en
    "Fabrication" // fr
);
addTranslation("M116", 
    "Производство ограждений", // ru
    "Виробництво огорож", // ua
    "Fencing production", // en
    "Production de clôtures" // fr
);

addTranslation("M117", 
    "Терасная доска", // ru
    "Терасна дошка", // ua
    "Decking board", // en
    "Planches de terrasse" // fr
);

addTranslation("M118", 
    "Клееный брус для домов", // ru
    "Клеєний брус для будинків", // ua
    "Glued laminated timber for houses", // en
    "Bois lamellé-collé pour maisons" // fr
);

addTranslation("M119", 
    "Клееные балки конструкционные", // ru
    "Клеєні балки конструкційні", // ua
    "Glued laminated beams for construction", // en
    "Poutres lamellées-collées pour la construction" // fr
);

addTranslation("M120", 
    "Клееные балки на заказ", // ru
    "Клеєні балки на замовлення", // ua
    "Custom glued laminated beams", // en
    "Poutres lamellées-collées sur mesure" // fr
);

addTranslation("M121", 
    "Столбы, стропила клееные", // ru
    "Стовпи, крокви клеєні", // ua
    "Glued columns, rafters", // en
    "Poteaux, chevrons lamellés-collés" // fr
);

addTranslation("M122", 
    "Сухие, строганные пиломатериалы", // ru
    "Пиломатеріали сухі, стругані", // ua
    "Dry, planed lumber", // en
    "Bois séché et raboté" // fr
);
addTranslation("M123", 
    "Гарантия", // ru
    "Гарантія", // ua
    "Warranty", // en
    "Garantie" // fr
);
addTranslation("M124", 
    "Качество материалов", // ru
    "Якість матеріалів", // ua
    "Quality of materials", // en
    "Qualité des matériaux" // fr
);

addTranslation("M125", 
    "Производственный контроль", // ru
    "Виробничий контроль", // ua
    "Production control", // en
    "Contrôle de production" // fr
);

addTranslation("M126", 
    "Долговечность", // ru
    "Довговічність", // ua
    "Durability", // en
    "Durabilité" // fr
);

addTranslation("M127", 
    "Прозрачность", // ru
    "Прозорість", // ua
    "Transparency", // en
    "Transparence" // fr
);

addTranslation("M128", 
    "Поддержка клиентов", // ru
    "Підтримка клієнтів", // ua
    "Customer support", // en
    "Support client" // fr
);























// Функция для изменения языка
function setLanguage(language) {
    // Сохраняем выбранный язык в localStorage
    localStorage.setItem('language', language);

    // Изменяем текст элементов на странице
    const elements = ['Name', 'Main', 'Services', 'OurWorks', 'Prices', 'AboutUs', 'Contacts', 'Lang', 'M001', 'M0011', 'M002',
        "M003", "M004", "M005", "M006", "M007", "M008", "M009", "M010", "M011", "M012", "M013", "M014", "M015", "M016", "M017", 
        "M018", "M019", "M020", "M021", "M022", "M023", "M024", "M025", "M026", "M027", "M028", "M029", "M030", "M031",
        "M032", "M033", "M034", "M035", "M036", "M037", "M038", "M039", "M040", "M041",
        "M042", "M043", "M044", "M045", "M046", "M047", "M048", "M049", "M050", "M051",
        "M052", "M053", "M054", "M055", "M056", "M057", "M058", "M059", "M060", "M061",
        "M062", "M063", "M064", "M065",  "M066", "M067", "M068", "M069", "M070", "M071",
        "M072", "M073", "M074", "M075", "M076", "M077", "M078", "M079", "M080", "M081", "M082", "M083", "M084", "M085", "M086", 
        "M087", "M088", "M089", "M090", "M091", "M092", "M093", "M094", "M095", "M096", "M097", "M098", "M099", "M100", "M101", "M102", "M103", "M104", "M105", "M106", "M107", "M108", "M109", "M110", 
        "M111", "M112", "M113", "M114", "M115", "M116", "M117", "M118", "M119", "M120", 
        "M121", "M122", "M123", "M124", "M125", "M126", "M127", "M128", "M129", "M130", 
        "M131", "M132", "M133", "M134", "M135", "M136", "M137", "M138", "M139", "M140", 
        "M141", "M142", "M143", "M144", "M145", "M146", "M147", "M148", "M149", "M150", 
        "M151", "M152", "M153", "M154", "M155", "M156", "M157", "M158", "M159", "M160", 
        "M161", "M162", "M163", "M164", "M165", "M166", "M167", "M168", "M169", "M170", 
        "M171", "M172", "M173", "M174", "M175", "M176", "M177", "M178", "M179", "M180", 
        "M181", "M182", "M183", "M184", "M185", "M186", "M187", "M188", "M189", "M190", 
        "M191", "M192", "M193", "M194", "M195", "M196", "M197", "M198", "M199", "M200"];

    elements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            // Обновляем текст элемента
            element.innerText = texts[language][id];

            // Проверяем и обновляем атрибут title, если он существует
            if (titleTexts[language] && titleTexts[language][id]) {
                console.log(`Обновляем title для элемента ${id} на языке ${language}: ${titleTexts[language][id]}`);
                element.setAttribute("title", titleTexts[language][id]);
            } else {
                console.log(`Нет данных для title элемента ${id} на языке ${language}`);
            }
        }
    });

    // Обновляем атрибут lang
    document.documentElement.lang = language;
}

// Функция для загрузки сохраненного языка при загрузке страницы
function loadSavedLanguage() {
    const savedLanguage = localStorage.getItem('language') || 'ru'; // По умолчанию русский
    setLanguage(savedLanguage);
}

// Вызов функции при загрузке страницы
window.onload = loadSavedLanguage;




