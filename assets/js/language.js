
const texts = {
    ru: {},
    ua: {},
    en: {},
    fr: {}
};


function addTranslation(key, ru, ua, en, fr) {
    // Добавление текстов для перевода
    texts.ru[key] = ru;
    texts.ua[key] = ua;
    texts.en[key] = en;
    texts.fr[key] = fr;;
}

// Добавляем переводы для всех языков
addTranslation("language", "ru", "ua", "en", "fr");
addTranslation("name01", "ТИМ ХАУС", "ТІМ ХАУС", "TEAM HOUSE", "TEAM HOUSE");
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
    "Строительство и ремонт", // ru
    "Будівництво та ремонт", // ua
    "Construction and repair", // en
    "Construction et réparation" // fr
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
    "Героев полка 'Азов', 12", // ru
    "Героїв полку 'Азов', 12", // ua
    "12 Heroes of the 'Azov' Regiment", // en
    "12 Héros du régiment 'Azov'" // fr
);

addTranslation("M063", 
    "Метро Оболонь, 5 метров", // ru
    "Метро Оболонь, 5 метрів", // ua
    "Obolon metro station, 5 meters", // en
    "Station de métro Obolon, 5 mètres" // fr
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

addTranslation("M080", 
    "Гарантия", // ru
    "Гарантія", // ua
    "Warranty", // en
    "Garantie" // fr
);


addTranslation("M081", 
    "Разработано", // ru
    "Розроблено", // ua
    "Designed by", // en
    "Conçu par" // fr
);
addTranslation("M082", 
    "СТРОИТЕЛЬСТВО", // ru
    "БУДІВНИЦТВО", // ua
    "CONSTRUCTION", // en
    "CONSTRUCTION" // fr
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
    "ПОКРАСКА", // ru
    "ФАРБУВАННЯ", // ua
    "PAINTING", // en
    "PEINTURE" // fr
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
    "РЕСТАВРАЦИЯ", // ru
    "РЕСТАВРАЦІЯ", // ua
    "RESTORATION", // en
    "RÉNOVATION" // fr
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
    "МАСТЕР НА ЧАС", // ru
    "МАЙСТЕР НА ГОДИНУ", // ua
    "MASTER FOR AN HOUR", // en
    "MAÎTRE À L'HEURE" // fr
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
    "ПРОИЗВОДСТВО", // ru
    "ВИРОБНИЦТВО", // ua
    "MANUFACTURING", // en
    "FABRICATION" // fr
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
    "Glued laminated timber ", // en
    "Bois lamellé-collé pour " // fr
);

addTranslation("M119", 
    "Клееные балки ", // ru
    "Клеєні балки ", // ua
    "Glued laminated beams", // en
    "Poutres lamellées-collées" // fr
);

addTranslation("M120", 
    "Клееные балки на заказ", // ru
    "Клеєні балки на замовлення", // ua
    "Glued laminated beams", // en
    "Poutres lamellées-collées" // fr
);

addTranslation("M121", 
    "Столбы, стропила клееные", // ru
    "Стовпи, крокви клеєні", // ua
    "Glued columns, rafters", // en
    "Poteaux-chevrons lamellés" // fr
);

addTranslation("M122", 
    "Строганные пиломат.", // ru
    "Пиломат. стругані", // ua
    "Dry, planed lumber", // en
    "Bois séché et raboté" // fr
);
addTranslation("M123", 
    "ГАРАНТИЯ", // ru
    "ГАРАНТІЯ", // ua
    "WARRANTY", // en
    "GARANTIE" // fr
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
addTranslation("M129", 
    "ДОМА", // ru
    "БУДІНКИ", // ua
    "BUILDINGS", // en
    "BÂTIMENTS" // fr
);
addTranslation("M130", 
    "БАНИ", // ru
    "ЛАЗНІ", // ua
    "BATHS", // en
    "BAINS" // fr
);
addTranslation("M131", 
    "РЕСТАВРАЦИЯ", // ru
    "РЕСТАВРАЦІЯ", // ua
    "RESTORATION", // en
    "RÉPARATION" // fr
);
addTranslation("M132", 
    "РАБОТЫ TEAM HOUSE", // ru
    "РОБОТИ ТІМ ХАУС", // ua
    "TEAM HOUSE WORKS", // en
    "TRAVAUX TEAM HOUSE" // fr
);
addTranslation("M133", 
    "НАШИ РАБОТЫ", // ru
    "НАШІ РОБОТИ", // ua   
    "OUR WORKS", // en
    "NOS TRAVAUX" // fr
);
addTranslation("M134", 
    "НАШИ РАБОТЫ", // ru
    "НАШІ РОБОТИ", // ua   
    "OUR WORKS", // en
    "NOS TRAVAUX" // fr
);
addTranslation("M135", 
    "ЦЕНЫ TEAM HOUSE", // ru
    "ЦІНИ ТІМ ХАУС", // ua
    "TEAM HOUSE PRICES", // en
    "PRIX TEAM HOUSE" // fr
);
addTranslation("M136", 
    "Гармония цены и качества в каждой детали", // ru
    "Гармонія ціни та якості у кожній деталі", // ua
    "The harmony of price and quality in every detail", // en
    "L'harmonie du prix et de la qualité dans chaque détail" // fr
);
addTranslation("M137", 
    "Главная", // ru
    "Головна", // ua
    "Home", // en
    "Accueil" // fr
);
addTranslation("M138", 
    "Наши цены", // ru
    "Наші ціни", // ua
    "Our prices", // en
    "Nos prix" // fr
);
addTranslation("M139", 
    "Консультация и расчет", // ru
    "Консультація та прорахунок", // ua
    "Consultation and calculation", // en
    "Consultation et estimation" // fr
);
addTranslation("M140", 
    "Обратившись к нам, вы получите детальный расчет стоимости материалов и работ", // ru
    "Звернувшись до нас, ви отримаєте детальний розрахунок вартості матеріалів і робіт", // ua
    "By contacting us, you will receive a detailed calculation of material and labor costs", // en
    "En nous contactant, vous recevrez un calcul détaillé des coûts des matériaux et des travaux" // fr
);
addTranslation("M141", 
    "грн", // ru
    "грн", // ua
    "UAH", // en
    "UAH" // fr
);
addTranslation("M142", 
    "Услуга", // ru
    "Послуга", // ua
    "Service", // en
    "Service" // fr
);
addTranslation("M143", 
    "Получить консультацию", // ru
    "Отримати консультацію", // ua
    "Get a consultation", // en
    "Obtenir une consultation" // fr
);
addTranslation("M144", 
    "Консультация по телефону.", // ru
    "Консультація по телефону.", // ua
    "Phone consultation", // en
    "Consultation téléphonique" // fr
);

addTranslation("M145", 
    "Бесплатная смета.", // ru
    "Бескоштовний кошторис.", // ua
    "Free estimate", // en
    "Estimation gratuite" // fr
);

addTranslation("M146", 
    "Выезд на объект.", // ru
    "Виїзд на об'єкт.", // ua
    "Site visit", // en
    "Visite sur site" // fr
);

addTranslation("M147", 
    "Выезд за пределы города — по договоренности.", // ru
    "Виїзд за межі міста – за домовленістю.", // ua
    "Departure outside the city – by arrangement.", // en
    "Départ en dehors de la ville – selon entente." // fr
);

addTranslation("M148", 
    "Срочный расчет сметы.", // ru
    "Терміновий розрахунок кошторису.", // ua
    "Urgent estimate calculation", // en
    "Calcul d'estimation urgent" // fr
);

addTranslation("M149", 
    "Индивидуальный подбор материалов.", // ru
    "Індивідуальний підбір матеріалів.", // ua
    "Individual selection of materials", // en
    "Sélection individuelle des matériaux" // fr
);

addTranslation("M150", 
    "Согласование проекта с архитектором.", // ru
    "Узгодження проекту з архітектором.", // ua
    "Project coordination with architect", // en
    "Coordination du projet avec l'architecte" // fr
);
addTranslation("M151", 
    "Популярная", // ru
    "Популярна", // ua
    "Popular", // en
    "Populaire" // fr
);
addTranslation("M152", 
    "Шлифовка дерева", // ru
    "Шліфування дерева", // ua
    "Wood sanding", // en
    "Ponçage du bois" // fr
);
addTranslation("M153", 
    "Шлифовка фасадов из термодерева и ограждений, детейлинг перед покраской для безупречного покрытия", // ru
    "Шліфування термофасадів та огорож, детейлінг перед фарбуванням для бездоганного покриття", // ua
    "Sanding of thermal facades and fences, sanding before painting for a flawless finish", // en
    "Ponçage des façades thermiques et des clôtures, Ponçageavant peinture pour une finition impeccable" // fr
);
addTranslation("M154", 
    "Заказать реставрацию", // ru
    "Замовити реставрацію", // ua
    "Order restoration", // en
    "Commander la restauration" // fr
);
addTranslation("M155", 
    "Удаление старого покрытия без повреждений", // ru
    "Видалення старого покриття без пошкоджень", // ua
    "Removal of old coating without damage", // en
    "Retrait du vieux revêtement sans dommage" // fr
);

addTranslation("M156", 
    "Глубокая шлифовка для идеальной гладкости", // ru
    "Глибоке шліфування для ідеальної гладкості", // ua
    "Deep sanding for perfect smoothness", // en
    "Ponçage profond pour une surface parfaitement lisse" // fr
);

addTranslation("M157", 
    "Деликатная обработка сложных деталей", // ru
    "Делікатна обробка складних деталей", // ua
    "Delicate processing of complex details", // en
    "Traitement délicat des détails complexes" // fr
);

addTranslation("M158", 
    "Подготовка к покраске или тонированию", // ru
    "Підготовка до фарбування чи тонування", // ua
    "Preparation for painting or tinting", // en
    "Préparation pour la peinture ou la teinture" // fr
);

addTranslation("M159", 
    "Работа с любыми деревянными поверхностями", // ru
    "Робота з будь-якими дерев'яними поверхнями", // ua
    "Work with any wooden surfaces", // en
    "Travail sur toutes les surfaces en bois" // fr
);

addTranslation("M160", 
    "Качественные абразивы для долговечного результата", // ru
    "Якісні абразиви для довговічного результату", // ua
    "High-quality abrasives for a lasting result", // en
    "Abrasifs de haute qualité pour un résultat durable" // fr
);

addTranslation("M161", 
    "Покраска изделия", // ru
    "Фарбування виробу", // ua
    "Painting of the product", // en
    "Peinture de l'article" // fr
);
addTranslation("M162", 
    "грн", // ru
    "грн", // ua
    "UAH", // en
    "UAH" // fr
);
addTranslation("M163", 
    "Строительство каркасного дома", // ru
    "Будівництво каркасного будинку", // ua
    "Frame house construction", // en
    "Construction de maison à ossature" // fr
);
addTranslation("M164", 
    "Каркасный дом по канадской технологии — это высокая теплопроизводительность и экономия.", // ru
    "Каркасний будинок по канадській технології — це висока теплоефективність та економія.", // ua
    "A frame house built with Canadian technology — high thermal efficiency and cost savings.", // en
    "Une maison à ossature selon la technologie canadienne — haute efficacité thermique et économies." // fr
);
addTranslation("M165", 
    "грн", // ru
    "грн", // ua
    "UAH", // en
    "UAH" // fr
);
addTranslation("M166", 
    "Заказать выезд на объект", // ru
    "Замовити виїзд на об'ект", // ua
    "Order site visit", // en
    "Commander une visite sur site" // fr
);
addTranslation("M167", 
    "Фундамент с плитой 150 мм", // ru
    "Фундамент з плитою 150 мм", // ua
    "Foundation with 150 mm slab", // en
    "Fondation avec dalle de 150 mm" // fr
);

addTranslation("M168", 
    "Несущий каркас стен 100х100 мм, сосна", // ru
    "Несучий каркас стін 100х100 мм, сосна", // ua
    "Load-bearing wall frame 100x100 mm, pine", // en
    "Cadre porteur des murs 100x100 mm, pin" // fr
);

addTranslation("M169", 
    "Имитaция бруса и углов снаружи", // ru
    "Імітація брусу та кутів зовні", // ua
    "Timber imitation and external corners", // en
    "Imitation de bois et coins extérieurs" // fr
);

addTranslation("M170", 
    "Кровля, битумная черепица", // ru
    "Покрівля, бітумна черепиця", // ua
    "Roofing, bitumen shingles", // en
    "Toiture, bardeaux bitumineux" // fr
);

addTranslation("M171", 
    "Утепление стен 200 мм, крыша 300 мм", // ru
    "Утеплення стін 200 мм, покрівля 300 мм", // ua
    "Wall insulation 200 mm, roof 300 mm", // en
    "Isolation des murs 200 mm, toit 300 mm" // fr
);

addTranslation("M172", 
    "Электрика, сантехника", // ru
    "Електрика, сантехніка", // ua
    "Electricity, plumbing", // en
    "Électricité, plomberie" // fr
);

addTranslation("M173", 
    "Окна и двери", // ru
    "Вікна та двері", // ua
    "Windows and doors", // en
    "Fenêtres et portes" // fr
);

addTranslation("M174", 
    "Отделка стен, полов и потолков", // ru
    "Оздоблення стін, підлоги та стелі", // ua
    "Wall, floor, and ceiling finishing", // en
    "Finition des murs, des sols et des plafonds" // fr
);

addTranslation("M175", 
    "Проект дома", // ru
    "Проект будинку", // ua
    "House project", // en
    "Projet de maison" // fr
);

addTranslation("M176", 
    "Геология, геодезия", // ru
    "Геологія, геодезія", // ua
    "Geology, geodesy", // en
    "Géologie, géodésie" // fr
);
addTranslation("M177", 
    "ПРО НАС TИМ ХАУС", // ru
    "ПРО НАС ТІМ ХАУС", // ua
    "ABOUT US TEAM HOUSE", // en
    "À PROPOS DE NOUS TEAM HOUSE" // fr
);
addTranslation("M178", 
    "Более 18 лет опыта — мы работаем надежно, эффективно и с гарантией.", // ru
    "Більше 18 років досвіду — ми працюємо надійно, ефективно та з гарантією.", // ua
    "Over 18 years of experience — we work reliably, efficiently, and with a guarantee.", // en
    "Plus de 18 ans d'expérience — nous travaillons de manière fiable, efficace et avec garantie." // fr
);
addTranslation("M179", 
    "Главная", // ru
    "Головна", // ua
    "Home", // en
    "Accueil" // fr
);

addTranslation("M180", 
    "Контакты", // ru
    "Контакти", // ua
    "Contacts", // en
    "Contacts" // fr
);
addTranslation("M181", 
    "ТИМ ХАУС", // ru
    "ТІМ ХАУС", // ua
    "TEAM HOUSE", // en
    "TEAM HOUSE" // fr
);
addTranslation("M182", 
    "Наша команда", // ru
    "Наша команда", // ua
    "Our team", // en
    "Notre équipe" // fr
);

addTranslation("M183", 
    "Наш многолетний опыт — гарантия стабильного результата и безупречной репутации.", // ru
    "Наш багаторічний досвід — гарантія стабільного результату та бездоганної репутації.", // ua
    "Our many years of experience guarantee stable results and an impeccable reputation.", // en
    "Nos nombreuses années d'expérience garantissent des résultats stables et une réputation irréprochable." // fr
);
addTranslation("M184", 
    "Строительное образование, работает с 2007 года", // ru
    "Будівельна освіта, працює з 2007 року", // ua
    "Construction education has been working since 2007", // en
    "L'éducation en construction fonctionne depuis 2007" // fr
);
addTranslation("M185", 
    "Вдохновитель", // ru
    "Натхненник", // ua
    "Inspiration", // en
    "Inspiration" // fr
);

addTranslation("M186", 
    "Главный инженер", // ru
    "Головний інженер", // ua
    "Chief Engineer", // en
    "Ingénieur en chef" // fr
);
addTranslation("M187", 
    "Застроил всю Киевскую область.", // ru
    "Забудував всю Київську область.", // ua
    "Built up the entire Kyiv region.", // en
    "A construit toute la région de Kyiv." // fr
);

addTranslation("M188", 
    "Стальной бригадир", // ru
    "Сталевий бригадир", // ua
    "Steel Foreman", // en
    "Contremaître d'acier" // fr
);

addTranslation("M189", 
    "Отдел строительства", // ru
    "Відділ будівництва", // ua
    "Construction Department", // en
    "Département de la construction" // fr
);
addTranslation("M190", 
    "Профессионал в реставрации", // ru
    "Професіонал в реставрації", // ua
    "Professional in restoration", // en
    "Professionnel en restauration" // fr
);

addTranslation("M191", 
    "Мастер-реставратор", // ru
    "Майстер-реставратор", // ua
    "Restoration Master", // en
    "Maître restaurateur" // fr
);

addTranslation("M192", 
    "Знает всё о реставрации.", // ru
    "Знає все про реставрацію.", // ua
    "Knows everything about restoration.", // en
    "Sait tout sur la restauration." // fr
);
addTranslation("M193", 
    "Внимателен ко всем деталям.", // ru
    "Уважний до всіх деталей.", // ua
    "Attentive to all details.", // en
    "Attentif à tous les détails." // fr
);

addTranslation("M194", 
    "Мастер-реставратор", // ru
    "Майстер реставратор", // ua
    "Restoration Master", // en
    "Maître restaurateur" // fr
);

addTranslation("M195", 
    "Покраска с уважением к результату.", // ru
    "Фарбування з повагою до результату", // ua
    "Painting with respect for the result.", // en
    "Peinture avec respect du résultat." // fr
);
addTranslation("M196", 
    "Наши преимущества", // ru
    "Наші переваги", // ua
    "Our advantages", // en
    "Nos avantages" // fr
);

addTranslation("M197", 
    "Гарантия высокого качества и безупречного результата на каждом этапе!", // ru
    "Гарантія високої якості та бездоганного результату на кожному етапі!", // ua
    "Guarantee of high quality and flawless results at every stage!", // en
    "Garantie de haute qualité et de résultats impeccables à chaque étape!" // fr
);
addTranslation("M198", 
    "Профессионализм", // ru
    "Професіоналізм", // ua
    "Professionalism", // en
    "Professionnalisme" // fr
);
addTranslation("M199", 
    "Реставрация деревянных изделий", // ru
    "Реставрація дерев'яних виробів", // ua
    "Restoration of wooden structures", // en
    "Restauration des structures en bois" // fr
);
addTranslation("M200", 
    "Строительство деревянных домов", // ru
    "Будівництво дерев'яних будинків", // ua
    "Construction of wooden houses", // en
    "Construction de maisons en bois" // fr
);
addTranslation("M201", 
    "Использование экологичных материалов", // ru
    "Використання екологічних матеріалів", // ua
    "Use of eco-friendly materials", // en
    "Utilisation de matériaux écologiques" // fr
);
addTranslation("M202", 
    "Индивидуальный подход к каждому клиенту", // ru
    "Індивідуальний підхід до кожного клієнта", // ua
    "Individual approach to each client", // en
    "Approche individuelle pour chaque client" // fr
);
addTranslation("M203", 
    "Соблюдение сроков выполнения", // ru
    "Дотримання термінів виконання", // ua
    "Adherence to deadlines", // en
    "Respect des délais d'exécution" // fr
);
addTranslation("M204", 
    "КОНТАКТЫ ТИМ ХАУС", // ru
    "КОНТАКТИ ТІМ ХАУС", // ua
    "CONTACTS TEAM HOUSE", // en
    "CONTACTS TEAM HOUSE" // fr
);
addTranslation("M205", 
    "Свяжитесь с нами – мы воплотим ваши мечты о идеальном деревянном доме!", // ru
    "Зв’яжіться з нами – ми втілимо ваші мрії про ідеальний дерев’яний дім!", // ua
    "Contact us – we will make your dreams of the perfect wooden house come true!", // en
    "Contactez-nous – nous réaliserons vos rêves d'une maison en bois parfaite!" // fr
);
addTranslation("M206", 
    "Главная", // ru
    "Головна", // ua
    "Home", // en
    "Accueil" // fr
);

addTranslation("M207", 
    "О нас", // ru
    "Про нас", // ua
    "About Us", // en
    "À propos de nous" // fr
);
addTranslation("M208", 
    "Украина, г. Киев, Героев полка \"Азов\", 12", // ru
    "Україна, м. Київ, Героїв полку \"Азов\", 12", // ua
    "Ukraine, Kyiv, Heroes of Azov Regiment, 12", // en
    "Ukraine, Kyiv, Régiment des Héros d'Azov, 12" // fr
);
addTranslation("M209", 
    "Звоните:", // ru
    "Телефонуйте:", // ua
    "Call us:", // en
    "Appelez-nous :" // fr
);
addTranslation("M210", 
    "Пишите нам:", // ru
    "Пишіть нам:", // ua
    "Write to us:", // en
    "Écrivez-nous :" // fr
);
addTranslation("M212", 
    "Корпоративный офис:", // ru
    "Корпоративний офіс:", // ua
    "Corporate office:", // en
    "Bureau corporate :" // fr
);
addTranslation("M213", 
    "ТИМ ХАУС", // ru
    "ТІМ ХАУС", // ua
    "TEAM HOUSE", // en
    "TEAM HOUSE" // fr
);
addTranslation("M214", 
    "Главная", // ru
    "Головна", // ua
    "Home", // en
    "Accueil" // fr
);
addTranslation("M215", 
    "СТРОИТЕЛЬСТВО ТИМ ХАУС", // ru
    "БУДІВНИЦТВО ТІМ ХАУС", // ua
    "TEAM HOUSE CONSTRUCTION", // en
    "CONSTRUCTION TEAM HOUSE" // fr
);
addTranslation("M216", 
    "Подробнее о строительстве", // ru
    "Детальніше про будівництво", // ua
    "More about construction", // en
    "Plus sur la construction" // fr
);

addTranslation("M217", 
    "Главная", // ru
    "Головна", // ua
    "Home", // en
    "Accueil" // fr
);

addTranslation("M218", 
    "О строительстве", // ru
    "Про будівництво", // ua
    "About construction", // en
    "À propos de la construction" // fr
);
addTranslation("M219", 
    "Ограждения и террасы", // ru
    "Огорожі та тераси", // ua
    "Fences and terraces", // en
    "Clôtures et terrasses" // fr
);

addTranslation("M220", 
    "Вентиляционные фасады", // ru
    "Вентильовані фасади", // ua
    "Ventilated facades", // en
    "Façades ventilées" // fr
);

addTranslation("M221", 
    "Вагонки, имитации бруса", // ru
    "Вагонки, імітації бруса", // ua
    "Paneling, beam imitation", // en
    "Panneaux, imitation de bûches" // fr
);

addTranslation("M222", 
    "Каркасные дома", // ru
    "Каркасні будинки", // ua
    "Frame houses", // en
    "Maisons à ossature" // fr
);

addTranslation("M223", 
    "Реконструкция зданий", // ru
    "Реконструкція будівель", // ua
    "Building reconstruction", // en
    "Rénovation de bâtiments" // fr
);

addTranslation("M224", 
    "Беседки на заказ", // ru
    "Альтаноки на замовлення", // ua
    "Custom gazebos", // en
    "Chalets sur commande" // fr
);

addTranslation("M225", 
    "Садовые домики под ключ", // ru
    "Садові домівки під ключ", // ua
    "Turnkey garden houses", // en
    "Maisons de jardin clés en main" // fr
);

addTranslation("M226", 
    "Комплексные строительные решения для вашего комфорта и безопасности", // ru
    "Комплексні будівельні рішення для вашого комфорту та безпеки", // ua
    "Comprehensive construction solutions for your comfort and safety", // en
    "Solutions de construction complètes pour votre confort et sécurité" // fr
);

addTranslation("M227", 
    "Мы предлагаем полный спектр строительных услуг, используя самые современные материалы и технологии. Ваша оселя, терраса или коммерческий объект будут созданы с учетом самых высоких стандартов качества и энергоэффективности.", // ru
    "Ми пропонуємо повний спектр будівельних послуг, використовуючи найсучасніші матеріали та технології. Ваша оселя, тераса чи комерційний об’єкт будуть створені з урахуванням найвищих стандартів якості та енергоефективності.", // ua
    "We offer a full range of construction services, using the latest materials and technologies. Your home, terrace, or commercial property will be created in accordance with the highest standards of quality and energy efficiency.", // en
    "Nous proposons une gamme complète de services de construction, en utilisant les matériaux et technologies les plus modernes. Votre maison, terrasse ou propriété commerciale sera créée conformément aux normes les plus élevées de qualité et d'efficacité énergétique." // fr
);
addTranslation("M228", 
    "Строительство – качество, надежность и современные технологии", // ru
    "Будівництво – якість, надійність та сучасні технології", // ua
    "Construction – quality, reliability, and modern technologies", // en
    "Construction – qualité, fiabilité et technologies modernes" // fr
);

addTranslation("M229", 
    "Выбирая нас, вы получаете высокое качество, экологичность и современный дизайн. Мы реализуем проекты любой сложности, учитывая все пожелания заказчика. Строим надежное будущее вместе с вами!", // ru
    "Обираючи нас, ви отримуєте високу якість, екологічність та сучасний дизайн. Ми реалізуємо проєкти будь-якої складності, враховуючи всі побажання замовника. Створюйте надійне майбутнє разом із нами!", // ua
    "By choosing us, you get high quality, eco-friendliness, and modern design. We implement projects of any complexity, considering all customer preferences. Build a reliable future with us!", // en
    "En choisissant nous, vous bénéficiez de la haute qualité, de l'écologie et du design moderne. Nous réalisons des projets de toute complexité en tenant compte de toutes les demandes du client. Construisez un avenir fiable avec nous !" // fr
);

addTranslation("M230", 
    "Более 18 лет опыта – строим деревянные дома с учетом современных технологий и традиционного мастерства.", // ru
    "Понад 18 років досвіду – будуємо дерев’яні будинки з урахуванням сучасних технологій та традиційного майстерності.", // ua
    "Over 18 years of experience – we build wooden houses with modern technologies and traditional craftsmanship.", // en
    "Plus de 18 ans d'expérience – nous construisons des maisons en bois en tenant compte des technologies modernes et du savoir-faire traditionnel." // fr
);

addTranslation("M231", 
    "Только надежные материалы – используем проверенные временем и экологичные строительные материалы для прочности и долговечности ваших объектов.", // ru
    "Тільки надійні матеріали – використовуємо перевірені часом та екологічні будівельні матеріали для міцності та довговічності ваших об’єктів.", // ua
    "Only reliable materials – we use time-tested and eco-friendly building materials for the strength and durability of your projects.", // en
    "Seuls des matériaux fiables – nous utilisons des matériaux de construction éprouvés et écologiques pour la solidité et la durabilité de vos projets." // fr
);

addTranslation("M232", 
    "Гарантия и оперативность – предоставляем гарантию на выполненные работы и быстро реагируем на запросы клиентов. Все наши специалисты проживают в Киеве, что позволяет оперативно выезжать на объект при необходимости.", // ru
    "Гарантія та оперативність – надаємо гарантію на виконані роботи та швидко реагуємо на запити клієнтів. Усі наші спеціалісти проживають у Києві, що дозволяє оперативно виїжджати на об’єкт у разі потреби.", // ua
    "Warranty and responsiveness – we provide a warranty on completed works and respond quickly to customer requests. All our specialists live in Kyiv, allowing us to promptly visit the site when needed.", // en
    "Garantie et réactivité – nous offrons une garantie sur les travaux réalisés et réagissons rapidement aux demandes des clients. Tous nos spécialistes vivent à Kiev, ce qui nous permet de nous rendre rapidement sur site en cas de besoin." // fr
);

addTranslation("M233", 
    "Профессиональный подход на каждом этапе строительства", // ru
    "Професійний підхід на кожному етапі будівництва", // ua
    "Professional approach at every stage of construction", // en
    "Approche professionnelle à chaque étape de la construction" // fr
);

addTranslation("M234", 
    "Наша команда – это квалифицированные специалисты с профильным высшим строительным образованием и многолетним опытом. Мы строго соблюдаем все технологические нормы и стандарты, обеспечивая качество и надежность каждого объекта.", // ru
    "Наша команда – це кваліфіковані фахівці з профільною вищою будівельною освітою та багаторічним досвідом. Ми чітко дотримуємося всіх технологічних норм та стандартів, забезпечуючи якість і надійність кожного об’єкта.", // ua
    "Our team consists of qualified specialists with a higher education in construction and many years of experience. We strictly adhere to all technological norms and standards, ensuring the quality and reliability of each project.", // en
    "Notre équipe se compose de spécialistes qualifiés avec une formation supérieure en construction et de nombreuses années d'expérience. Nous respectons strictement toutes les normes et standards technologiques, garantissant la qualité et la fiabilité de chaque projet." // fr
);
addTranslation("M235", 
    "Строительство осуществляется поэтапно:", // ru
    "Будівництво здійснюється поетапно:", // ua
    "Construction is carried out in stages:", // en
    "La construction se déroule par étapes :" // fr
);

addTranslation("M236", 
    "Сначала проводятся геологические и геодезические исследования, которые позволяют точно спроектировать будущую постройку. Затем закладывается фундамент – надежная основа, которая обеспечивает долговечность здания. После этого возводятся коробка и каркас, которые формируют общую конструкцию объекта.", // ru
    "Спочатку проводяться геологічні та геодезичні дослідження, що дозволяють точно проєктувати майбутню споруду. Далі закладається фундамент – надійна основа, що забезпечує довговічність будівлі. Після цього зводяться коробка та каркас, що формують загальну конструкцію об’єкта.", // ua
    "First, geological and geodetic studies are conducted, allowing accurate design of the future building. Then, a foundation is laid – a reliable base that ensures the durability of the building. After that, the shell and frame are built, which form the overall structure of the object.", // en
    "Tout d'abord, des études géologiques et géodésiques sont réalisées, ce qui permet de concevoir précisément la future construction. Ensuite, une fondation est posée – une base fiable qui garantit la durabilité du bâtiment. Après cela, la coque et la charpente sont érigées, formant la structure générale du projet." // fr
);

addTranslation("M237", 
    "Следующим этапом является крыша, которая защищает здание от погодных условий. Устанавливаются окна и двери, которые обеспечивают энергоэффективность и комфорт. Затем выполняется отделка фасада, которая не только улучшает внешний вид, но и выполняет утепляющую функцию.", // ru
    "Наступним етапом є покрівля, яка захищає будівлю від погодних умов. Встановлюються вікна та двері, що забезпечують енергоефективність та комфорт. Далі виконується оздоблення фасаду, яке не тільки покращує зовнішній вигляд, а й виконує утеплювальну функцію.", // ua
    "The next stage is the roofing, which protects the building from weather conditions. Windows and doors are installed, ensuring energy efficiency and comfort. Then, the facade decoration is carried out, which not only improves the appearance but also serves as insulation.", // en
    "L'étape suivante est la couverture, qui protège le bâtiment des intempéries. Des fenêtres et des portes sont installées, assurant l'efficacité énergétique et le confort. Ensuite, la décoration de la façade est effectuée, ce qui améliore non seulement l'apparence extérieure, mais sert également de fonction isolante." // fr
);

addTranslation("M238", 
    "На завершающих стадиях производится монтаж внутренних инженерных сетей, включая электричество, водоснабжение, отопление и канализацию. Затем выполняется внутренняя отделка, которая создает уютный и стильный интерьер. Заключительным этапом является сдача объекта, что предполагает полностью готовый к эксплуатации дом.", // ru
    "На завершальних стадіях здійснюється монтаж внутрішніх інженерних мереж, включаючи електрику, водопостачання, опалення та каналізацію. Після цього виконується внутрішнє оздоблення, яке створює затишний та стильний інтер’єр. Завершальним етапом є здача об’єкта, що передбачає повністю готовий до експлуатації будинок.", // ua
    "At the final stages, installation of internal engineering networks, including electricity, water supply, heating, and sewage, is carried out. After that, interior decoration is done, creating a cozy and stylish interior. The final stage is the handover of the object, which implies a fully ready-to-use house.", // en
    "Aux étapes finales, l'installation des réseaux d'ingénierie internes, y compris l'électricité, l'approvisionnement en eau, le chauffage et l'assainissement, est réalisée. Ensuite, des travaux de décoration intérieure sont effectués, créant un intérieur confortable et élégant. L'étape finale est la remise de l'objet, ce qui implique une maison entièrement prête à l'emploi." // fr
);

addTranslation("M239", 
    "Мы предоставляем гарантию на выполненные работы и всегда готовы прийти на помощь. С нами вы получаете надежное строительство без лишних хлопот и с гарантией качества!", // ru
    "Ми надаємо гарантію на виконані роботи та завжди готові прийти на допомогу. З нами ви отримуєте надійне будівництво без зайвих клопотів та з гарантією якості!", // ua
    "We provide a warranty on the completed work and are always ready to assist. With us, you get reliable construction without unnecessary hassles and with a quality guarantee!", // en
    "Nous offrons une garantie sur les travaux réalisés et sommes toujours prêts à aider. Avec nous, vous obtenez une construction fiable sans tracas inutiles et avec une garantie de qualité !" // fr
);
addTranslation("M240", 
    "Подробнее о покраске и утеплении", // ru
    "Детальніше про фарбування та утеплення", // ua
    "More about painting and insulation", // en
    "Plus sur la peinture et l'isolation", // fr
);
addTranslation("M241", 
    "Главная", // ru
    "Головна", // ua
    "Home", // en
    "Accueil", // fr
);

addTranslation("M242", 
    "О нашем профессиональном окрашивании", // ru
    "Про наше професійне фарбування", // ua
    "About our professional painting", // en
    "À propos de notre peinture professionnelle", // fr
);
addTranslation("M250", 
    "Шлифование поверхностей", // ru
    "Шліфування поверхонь", // ua
    "Sanding surfaces", // en
    "Ponçage des surfaces", // fr
);

addTranslation("M251", 
    "Устранение трещин, грибка", // ru
    "Усунення тріщин, грибка", // ua
    "Crack and mold removal", // en
    "Élimination des fissures et moisissures", // fr
);

addTranslation("M243", 
    "Покраска стен дома", // ru
    "Фарбування стін будинку", // ua
    "House wall painting", // en
    "Peinture des murs de la maison", // fr
);

addTranslation("M244", 
    "Герметизация \"Тёплый шов\"", // ru
    "Герметизація \"Теплий шов\"", // ua
    "Sealing \"Warm joint\"", // en
    "Scellement \"Joint chaud\"", // fr
);

addTranslation("M245", 
    "Восстановление покрытий", // ru
    "Відновлення покриттів", // ua
    "Restoration of coatings", // en
    "Restauration des revêtements", // fr
);

addTranslation("M246", 
    "Теплоизоляция стен, крыши", // ru
    "Утеплення стін, покрівлі", // ua
    "Thermal insulation of walls and roofs", // en
    "Isolation thermique des murs et des toits", // fr
);

addTranslation("M247", 
    "Теплопотери тепловизором", // ru
    "Тепловтрати тепловізором", // ua
    "Heat loss with thermal imaging", // en
    "Pertes de chaleur avec une caméra thermique", // fr
);

addTranslation("M248", 
    "Детейлинг дома раз в 5-7 лет", // ru
    "Детейлінг будинку раз в 5-7 років", // ua
    "House detailing once every 5-7 years", // en
    "Détaillez la maison tous les 5-7 ans", // fr
);

addTranslation("M249", 
    "Регулярный осмотр стен дома каждые 5-7 лет помогает вовремя выявить трещины, повреждения и проблемы с изоляцией. Это позволяет предотвратить серьёзные повреждения и сохранить энергоэффективность дома.", // ru
    "Регулярний огляд стін будинку кожні 5-7 років допомагає вчасно виявити тріщини, пошкодження та проблеми з ізоляцією. Це дозволяє запобігти серйозним пошкодженням і зберегти енергоефективність дому.", // ua
    "Regular inspection of house walls every 5-7 years helps to detect cracks, damage, and insulation issues in time. This prevents major damage and maintains the energy efficiency of the home.", // en
    "L'inspection régulière des murs de la maison tous les 5-7 ans permet de détecter les fissures, les dommages et les problèmes d'isolation à temps. Cela permet de prévenir les dommages importants et de maintenir l'efficacité énergétique de la maison.", // fr
);
addTranslation("M252", 
    "Покраска — долговечность, защита и эстетика.", // ru
    "Фарбування – довговічність, захист та естетика.", // ua
    "Painting – durability, protection, and aesthetics.", // en
    "Peinture – durabilité, protection et esthétique.", // fr
);
addTranslation("M253", 
    "Высококачественные краски обеспечивают надежную защиту от внешних воздействий, сохраняя цвет и внешний вид на долгие годы. Используем современные материалы для достижения максимального эффекта и энергоэффективности.", // ru
    "Високоякісні фарби забезпечують надійний захист від зовнішніх впливів, зберігаючи колір і вигляд на довгі роки. Використовуємо сучасні матеріали для досягнення максимального ефекту та енергоефективності.", // ua
    "High-quality paints provide reliable protection from external influences, maintaining color and appearance for many years. We use modern materials to achieve maximum effect and energy efficiency.", // en
    "Les peintures de haute qualité offrent une protection fiable contre les influences extérieures, en maintenant la couleur et l'apparence pendant de nombreuses années. Nous utilisons des matériaux modernes pour obtenir un effet maximal et une efficacité énergétique.", // fr
);

addTranslation("M254", 
    "Преимущества нашей услуги покраски стен:", // ru
    "Переваги нашої послуги фарбування стін:", // ua
    "Advantages of our wall painting service:", // en
    "Les avantages de notre service de peinture murale :", // fr
);
addTranslation("M255", 
    "Экологичность: ", // ru
    "Екологічність: ", // ua
    "Environmental friendliness: ", // en
    "Respect de l'environnement : ", // fr
);

addTranslation("M256", 
    "Долговечность: ", // ru
    "Довговічність: ", // ua
    "Durability: ", // en
    "Durabilité : ", // fr
);

addTranslation("M257", 
    "Эстетический вид: ", // ru
    "Естетичний вигляд: ", // ua
    "Aesthetic appearance: ", // en
    "Apparence esthétique : ", // fr
);
addTranslation("M258", 
    "Мы используем только безопасные для здоровья материалы.", // ru
    "Ми використовуємо тільки безпечні для здоров’я матеріали.", // ua
    "We use only health-safe materials.", // en
    "Nous utilisons uniquement des matériaux sûrs pour la santé.", // fr
);
addTranslation("M259", 
    "Покрытие, которое мы наносим, прослужит вам долго, не теряя цвета и не стираясь.", // ru
    "Покриття, яке ми наносимо, прослужить вам довго, не втрачаючи кольору і не стираючись.", // ua
    "The coating we apply will last a long time, retaining its color and not wearing off.", // en
    "Le revêtement que nous appliquons durera longtemps, sans perdre sa couleur et sans s'user.", // fr
);
addTranslation("M260", 
    "Ваше жилье или офис получат стильный и современный вид.", // ru
    "Ваша оселя чи офіс отримає стильний та сучасний вигляд.", // ua
    "Your home or office will have a stylish and modern look.", // en
    "Votre maison ou bureau aura un aspect élégant et moderne.", // fr
);
addTranslation("M263", 
    "С нами вы получаете не только красивые стены, но и гарантию качества и долговечности!", // ru
    "З нами ви отримуєте не тільки гарні стіни, але й гарантію якості та довговічності!", // ua
    "With us, you get not only beautiful walls but also a guarantee of quality and durability!", // en
    "Avec nous, vous obtenez non seulement de beaux murs, mais aussi une garantie de qualité et de durabilité!" // fr
);
addTranslation("M261", 
    "Профессиональный подход к покраске стен", // ru
    "Професійний підхід до фарбування стін", // ua
    "A professional approach to wall painting", // en
    "Une approche professionnelle de la peinture murale" // fr
);
addTranslation("M262", 
    "Покраска стен – это не просто декоративный этап, а важный элемент создания долговечного и эффективного интерьера. Покраска фасадов – это не только способ сделать ваш дом красивым, но и важный этап защиты стен от внешних факторов. Наш подход к покраске фасадов основан на использовании высококачественных материалов, обеспечивающих долговечность и устойчивость к атмосферным воздействиям.", // ru
    "Фарбування стін є не просто декоративним етапом, а важливим елементом у створенні довговічного та ефективного інтер’єру. Фарбування фасадів — це не тільки спосіб зробити ваш будинок красивим, але й важливий етап для захисту стін від впливу зовнішніх факторів. Наш підхід до фарбування фасадів базується на використанні високоякісних матеріалів, які забезпечують довговічність і стійкість до атмосферних явищ.", // ua
    "Wall painting is not just a decorative stage but an important element in creating a durable and efficient interior. Facade painting is not only a way to make your house beautiful but also a crucial step in protecting walls from external influences. Our approach to facade painting is based on the use of high-quality materials that ensure durability and resistance to weather conditions.", // en
    "La peinture des murs n'est pas seulement une étape décorative, mais un élément important pour créer un intérieur durable et efficace. La peinture des façades n'est pas seulement un moyen d'embellir votre maison, mais aussi une étape essentielle pour protéger les murs des influences extérieures. Notre approche de la peinture des façades repose sur l'utilisation de matériaux de haute qualité garantissant durabilité et résistance aux intempéries." // fr
);
addTranslation("M264", 
    "Шлифовка поверхностей:", // ru
    "Шліфування поверхонь:", // ua
    "Surface grinding:", // en
    "Ponçage des surfaces:" // fr
);

addTranslation("M265", 
    "Мы выполняем шлифовку поверхностей разного типа для подготовки к дальнейшей обработке, что позволяет достичь идеального результата и долговечного эффекта.", // ru
    "Ми здійснюємо шліфування поверхонь різного типу для підготовки до подальшої обробки, що дозволяє досягти ідеального результату і довготривалого ефекту.", // ua
    "We perform grinding of various surfaces to prepare them for further treatment, achieving perfect results and long-lasting effects.", // en
    "Nous effectuons le ponçage de diverses surfaces pour les préparer à un traitement ultérieur, obtenant ainsi un résultat parfait et durable." // fr
);

addTranslation("M266", 
    "Устранение трещин и грибка:", // ru
    "Усунення тріщин і грибка:", // ua
    "Crack and mold removal:", // en
    "Élimination des fissures et des moisissures:" // fr
);

addTranslation("M267", 
    "Наши специалисты быстро и эффективно устраняют трещины, грибок и влагу, обеспечивая здоровую среду и продлевая срок службы вашего жилья.", // ru
    "Наші фахівці швидко і ефективно усувають тріщини, грибок і вологу, що забезпечує здорове середовище та продовжує термін служби вашої оселі.", // ua
    "Our specialists quickly and effectively eliminate cracks, mold, and moisture, ensuring a healthy environment and extending the lifespan of your home.", // en
    "Nos spécialistes éliminent rapidement et efficacement les fissures, les moisissures et l'humidité, garantissant un environnement sain et prolongeant la durée de vie de votre habitation." // fr
);

addTranslation("M268", 
    "Покраска стен:", // ru
    "Фарбування стін:", // ua
    "Wall painting:", // en
    "Peinture des murs:" // fr
);

addTranslation("M269", 
    "Мы используем только качественные краски, которые позволяют стенам выглядеть новыми, не терять цвет и защищать поверхности от вредных воздействий.", // ru
    "Ми використовуємо лише якісні фарби, що дозволяють стінам виглядати новими, не втрачати кольору і захищати поверхні від шкідливих впливів.", // ua
    "We use only high-quality paints that keep walls looking new, maintain color, and protect surfaces from harmful effects.", // en
    "Nous utilisons uniquement des peintures de haute qualité qui permettent aux murs de paraître neufs, de conserver leur couleur et de protéger les surfaces des effets néfastes." // fr
);

addTranslation("M270", 
    "Герметизация \"Теплый шов\":", // ru
    "Герметизація \"Теплий шов\":", // ua
    "Sealing \"Warm Seam\":", // en
    "Joint d'étanchéité \"Chaud\":" // fr
);

addTranslation("M271", 
    "Технология \"Теплый шов\" позволяет эффективно сохранять тепло в доме, снижая расходы на отопление и повышая энергоэффективность.", // ru
    "Технологія \"Теплий шов\" дозволяє ефективно зберігати тепло в будинку, зменшуючи витрати на опалення і підвищуючи енергоефективність.", // ua
    "The \"Warm Seam\" technology effectively retains heat in the house, reducing heating costs and improving energy efficiency.", // en
    "La technologie \"Chaud Joint\" permet de conserver efficacement la chaleur dans la maison, réduisant les coûts de chauffage et améliorant l'efficacité énergétique." // fr
);

addTranslation("M272", 
    "Восстановление покрытий:", // ru
    "Відновлення покриттів:", // ua
    "Coating restoration:", // en
    "Restauration des revêtements:" // fr
);

addTranslation("M273", 
    "Возвращение старым покрытиям нового вида и функциональности без необходимости их полной замены.", // ru
    "Повернення старим покриттям нового вигляду і функціональності без необхідності їх повної заміни.", // ua
    "Restoring old coatings to a new appearance and functionality without the need for full replacement.", // en
    "Rendre aux anciens revêtements un nouvel aspect et une nouvelle fonctionnalité sans nécessité de remplacement complet." // fr
);

addTranslation("M274", 
    "Утепление стен и кровли:", // ru
    "Утеплення стін та покрівлі:", // ua
    "Wall and roof insulation:", // en
    "Isolation des murs et du toit:" // fr
);

addTranslation("M275", 
    "Мы используем инновационные материалы для утепления, которые позволяют значительно уменьшить теплопотери и сделать ваш дом комфортным и экономичным.", // ru
    "Ми використовуємо інноваційні матеріали для утеплення, що дозволяють значно зменшити тепловтрати і зробити ваш будинок комфортним та економічним.", // ua
    "We use innovative insulation materials that significantly reduce heat loss, making your home comfortable and economical.", // en
    "Nous utilisons des matériaux d'isolation innovants qui réduisent considérablement les pertes de chaleur, rendant votre maison confortable et économique." // fr
);
addTranslation("M276", 
    "Теплопотери тепловизором:", // ru
    "Тепловтрати тепловізором:", // ua
    "Heat loss detection with a thermal imager:", // en
    "Détection des pertes thermiques avec une caméra thermique:" // fr
);

addTranslation("M277", 
    "Выявление проблемных мест и холодных зон в здании для оптимизации затрат на отопление и повышения эффективности утепления.", // ru
    "Виявлення проблемних місць і холодних зон у будівлі для оптимізації витрат на опалення та підвищення ефективності утеплення.", // ua
    "Identifying problem areas and cold zones in a building to optimize heating costs and improve insulation efficiency.", // en
    "Identification des zones problématiques et des zones froides dans un bâtiment afin d'optimiser les coûts de chauffage et d'améliorer l'efficacité de l'isolation." // fr
);
addTranslation("M276",  
    "ПОКРАСКА TИМ ХАУС", // ru  
    "ФАРБУВАННЯ ТІМ ХАУС", // ua  
    "TEAM HOUSE PAINTING", // en  
    "PEINTURE TEAM HOUSE" // fr  
);





































































// Функция для изменения языка
function setLanguage(language) {
    // Сохраняем выбранный язык в localStorage
    localStorage.setItem('language', language);

    // Изменяем текст элементов на странице
    const elements = ['name01', 'Main', 'Services', 'OurWorks', 'Prices', 'AboutUs', 'Contacts', 'Lang', 'M001', 'M0011', 'M002',
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
        "M191", "M192", "M193", "M194", "M195", "M196", "M197", "M198", "M199", "M200","M201", "M202", "M203", "M204", "M205", "M206", "M207", "M208",
        "M209", "M210", "M211", "M212", "M213", "M214", "M215", "M216", "M217", "M218",
        "M219", "M220", "M221", "M222", "M223", "M224", "M225", "M226", "M227", "M228",
        "M229", "M230", "M231", "M232", "M233", "M234", "M235", "M236", "M237", "M238",
        "M239", "M240", "M241", "M242", "M243", "M244", "M245", "M246", "M247", "M248",
        "M249", "M250", "M251", "M252", "M253", "M254", "M255", "M256", "M257", "M258",
        "M259", "M260", "M261", "M262", "M263", "M264", "M265", "M266", "M267", "M268",
        "M269", "M270", "M271", "M272", "M273", "M274", "M275", "M276", "M277", "M278",
        "M279", "M280", "M281", "M282", "M283", "M284", "M285", "M286", "M287", "M288",
        "M289", "M290", "M291", "M292", "M293", "M294", "M295", "M296", "M297", "M298",
        "M299", "M300"];

    elements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            // Обновляем текст элемента
            element.innerText = texts[language][id];
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




