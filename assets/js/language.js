
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
addTranslation("Lang", "РУССКИЙ", "УКРАЇНСЬКА", "ENGLISH", "LE FRANÇAIS");
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
    "Подробнее про нас", // ru
    "Детальніше про нашу справу", // uk
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
    "О реставрации окон и дверей", // ru
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
    "Фундаменти", // ru
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
"СТРОИТЕЛЬСТВО РЕМОНТ", // ru  
"БУДІВНИЦТВО РЕМОНТ", // ua  
"CONSTRUCTION REPAIR", // en  
"CONSTRUCTION RÉNOVATION" // fr  
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
    "Фундаменты", // ru
    "Фундаменти", // ua
    "Foundations", // en
    "Fondations" // fr
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
    "Мы предлагаем полный спектр строительных услуг, используя самые современные материалы и технологии. Ваша дом, терраса или коммерческий объект будут созданы с учетом самых высоких стандартов качества и энергоэффективности.", // ru
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
addTranslation("M278",  
    "ПОКРАСКА TИМ ХАУС", // ru  
    "ФАРБУВАННЯ ТІМ ХАУС", // ua  
    "TEAM HOUSE PAINTING", // en  
    "PEINTURE TEAM HOUSE" // fr  
);
addTranslation("M279",  
    "Подробнее о реставрации", // ru  
    "Детальніше про реставрацію", // ua  
    "More about restoration", // en  
    "Plus d'informations sur la restauration" // fr  
);

addTranslation("M280",  
    "Главная", // ru  
    "Головна", // ua  
    "Home", // en  
    "Accueil" // fr  
);

addTranslation("M281",  
    "Реставрация продлевает срок службы вашего жилья", // ru  
    "Реставрація продовжує термін служби вашої оселі", // ua  
    "Restoration extends the lifespan of your home", // en  
    "La restauration prolonge la durée de vie de votre maison" // fr  
);
addTranslation("M282",  
    "Чистка террас", // ru  
    "Чистка терас", // ua  
    "Terrace cleaning", // en  
    "Nettoyage des terrasses" // fr  
);

addTranslation("M283",  
    "Устранение сквозняков", // ru  
    "Усунення протягів", // ua  
    "Draft elimination", // en  
    "Élimination des courants d'air" // fr  
);

addTranslation("M284",  
    "Покраска и ремонт", // ru  
    "Фарбування та ремонт", // ua  
    "Painting and repair", // en  
    "Peinture et réparation" // fr  
);

addTranslation("M285",  
    "Ремонт обшивки", // ru  
    "Ремонт обшивки", // ua  
    "Cladding repair", // en  
    "Réparation du revêtement" // fr  
);

addTranslation("M286",  
    "Декоративные элементы", // ru  
    "Декоративні елементи", // ua  
    "Decorative elements", // en  
    "Éléments décoratifs" // fr  
);

addTranslation("M287",  
    "Электромонтажные работы", // ru  
    "Електричні роботи", // ua  
    "Electrical work", // en  
    "Travaux électriques" // fr  
);
addTranslation("M288",  
    "Мастер там, где он нужен", // ru  
    "Майстер там, де він потрібен", // ua  
    "The master is where he is needed", // en  
    "Le maître est là où il est nécessaire" // fr  
);

addTranslation("M289",  
    "Когда возникают мелкие поломки или срочно нужен ремонт, важны два фактора — скорость и профессионализм. Не всегда есть время и возможность самостоятельно искать инструменты, разбираться в тонкостях работы или тратить часы на решение проблемы.", // ru  

    "Коли виникають дрібні поломки або терміново потрібен ремонт, важливі два фактори — швидкість і професіоналізм. Не завжди є час і можливість самостійно шукати інструменти, розбиратися в тонкощах роботи або витрачати години на вирішення проблеми.", // ua  

    "When minor breakdowns occur or urgent repairs are needed, two factors are crucial — speed and professionalism. There is not always time and opportunity to look for tools, understand the intricacies of the work, or spend hours solving the problem.", // en  

    "Lorsque des pannes mineures surviennent ou qu'une réparation urgente est nécessaire, deux facteurs sont essentiels — la rapidité et le professionnalisme. Il n'y a pas toujours le temps et la possibilité de chercher des outils, de comprendre les subtilités du travail ou de passer des heures à résoudre le problème." // fr  
);
addTranslation("M290",  
    "Профессиональная реставрация деревянных окон", // ru  
    "Професійна реставрація дерев'яних вікон", // ua  
    "Professional restoration of wooden windows", // en  
    "Restauration professionnelle des fenêtres en bois" // fr  
);
addTranslation("M291", 
    "Со временем деревянные окна подвергаются воздействию солнечного света, что приводит к разрушению лакового покрытия. Поверхность дерева становится уязвимой к воздействию грибка, споры которого оседают в порах древесины, разрушая её структуру. Дубильные вещества не могут эффективно с ними бороться, из-за чего древесина со временем темнеет и теряет свою привлекательность. Регулярный визуальный осмотр и реставрация окон каждые 5-10 лет позволяют избежать серьёзных повреждений и сохранить красоту и функциональность деревянных поверхностей.", // ru
    "З часом дерев'яні вікна піддаються впливу сонячного світла, що призводить до руйнування лакового покриття. Поверхня дерева стає вразливою до впливу грибка, спори якого осідають в порах дерева, руйнуючи його структуру. Дубильні речовини не можуть ефективно боротися з ними, через що деревина з часом темніє і втрачає свою привабливість. Регулярний візуальний огляд та реставрація вікон кожні 5-10 років дозволяють уникнути серйозних пошкоджень і зберегти красу та функціональність дерев'яних поверхонь.", // ua

    "Over time, wooden windows are exposed to sunlight, which leads to the destruction of the lacquer coating. The surface of the wood becomes vulnerable to mold, whose spores settle in the pores of the wood, destroying its structure. Tannins cannot effectively combat them, causing the wood to darken over time and lose its appeal. Regular visual inspections and window restoration every 5-10 years help prevent serious damage and maintain the beauty and functionality of wooden surfaces.", // en
    "Avec le temps, les fenêtres en bois sont exposées à la lumière du soleil, ce qui entraîne la destruction du revêtement de laque. La surface du bois devient vulnérable aux moisissures, dont les spores s'installent dans les pores du bois et en détruisent la structure. Les tanins ne peuvent pas lutter efficacement contre elles, ce qui fait que le bois s'assombrit avec le temps et perd son attrait. Une inspection visuelle régulière et une restauration des fenêtres tous les 5 à 10 ans permettent d'éviter des dommages importants et de préserver la beauté et la fonctionnalité des surfaces en bois." // fr
);
addTranslation("M292",
"Реставрация системой защиты выполняется в следующей последовательности:",
"Реставрація системою захисту виконується у наступній послідовності:",
"Restoration using the protection system is carried out in the following sequence:",
"La restauration avec le système de protection est réalisée selon la séquence suivante:"
);
addTranslation("M293", 
    "Снятие старого лака:", // ru
    "Зняття старого лаку: ", // ua
    "Removal of old lacquer: ", // en
    "Enlèvement de l'ancien vernis :", // fr
);

addTranslation("M294", 
    "Нанесение изолятора: \n", // ru
    "Нанесення ізолятора : \n", // ua
    "Application of the isolator: \n", // en
    "Application de l'isolant : \n", // fr
);

addTranslation("M295", 
    "Нанесение защитного слоя:", // ru
    "Нанесення захисного шару:", // ua
    "Application of protective layer:", // en
    "Application de la couche de protection :", // fr
);
addTranslation("M296",
"Снятие старого лака выполняется вручную с помощью инструментов и растворителей краски.",
"Зняття старого лаку виконується вручну за допомогою інструментів та розчинників фарби",
"The removal of old lacquer is done manually using tools and paint solvents.",
"L'enlèvement de l'ancien vernis est effectué manuellement à l'aide d'outils et de solvants pour peinture."
)
addTranslation("M297",
"Для защиты от проникновения дубильных веществ, которые разрушают лак.",
"Для захисту проникнення дубильних речовин, які руйнують лак.",
"To protect against the penetration of tannins that destroy the lacquer.",
"Pour protéger contre la pénétration des tanins qui détruisent le vernis."
)
addTranslation("M298",
"Финишный слой лака толщиной 200 мкм для долговечной защиты.",
"Фінішний шар лаку товщиною 200 мкм для довговічного захисту.",
"A finish layer of lacquer 200 microns thick for long-lasting protection.",
"Une couche de finition de vernis de 200 microns pour une protection durable."
)
addTranslation("M299", 
    "Реставрация деревянных окон способствует энергоэффективности дома, снижая потери тепла и повышая изоляционные свойства.", // ru
    "Реставрація дерев'яних вікон сприяє енергоефективності будинку, зменшуючи втрати тепла та підвищуючи ізоляційні властивості", // ua
    "Restoring wooden windows contributes to the energy efficiency of the house by reducing heat loss and improving insulation properties.", // en
    "La restauration des fenêtres en bois contribue à l'efficacité énergétique de la maison en réduisant les pertes de chaleur et en améliorant les propriétés d'isolation.", // fr
);

addTranslation("M300", 
    "Восстановление вместо замены — это экологичный подход", // ru
    "Відновлення замість заміни — це екологічний підхід", // ua
    "Restoration instead of replacement – this is an eco-friendly approach", // en
    "La restauration plutôt que le remplacement - c'est une approche écologique", // fr
);

addTranslation("M301", 
    "Восстановление вместо замены — это экологичный подход, который сохраняет природные ресурсы и уменьшает количество отходов. Используемые нами качественные материалы безопасны для здоровья и окружающей среды, а технология нанесения покрытий обеспечивает долговечную защиту от воздействия погоды.", // ru
    "Відновлення замість заміни — це екологічний підхід, що зберігає природні ресурси та зменшує кількість відходів. Якісні матеріали, які ми використовуємо, безпечні для здоров’я та довкілля, а технологія нанесення покриттів забезпечує довговічний захист від погодних впливів.", // ua
    "Restoration instead of replacement is an eco-friendly approach that preserves natural resources and reduces waste. The high-quality materials we use are safe for health and the environment, and the coating application technology ensures long-lasting protection from weather impacts.", // en
    "La restauration plutôt que le remplacement est une approche écologique qui préserve les ressources naturelles et réduit les déchets. Les matériaux de haute qualité que nous utilisons sont sûrs pour la santé et l'environnement, et la technologie d'application des revêtements garantit une protection durable contre les intempéries.", // fr
);

addTranslation("M302", 
    "Мастер на час ТИМ ХАУС", // ru
    "Майстер на годину ТІМ ХАУС", // ua
    "Master for an hour TEAM HOUSE", // en
    "Maître pour une heure TEAM HOUSE", // fr
);
addTranslation("M303", 
    "Надежная помощь и мелкий ремонт без лишних хлопот", // ru
    "Надійна допомога та дрібний ремонт без зайвих клопотів", // ua
    "Reliable help and minor repairs without unnecessary hassle", // en
    "Aide fiable et petites réparations sans tracas inutiles", // fr
);

addTranslation("M304", 
    "Мастер на час", // ru
    "Майстер на годину", // ua
    "Master for an hour", // en
    "Maître pour une heure", // fr
);
addTranslation("M305", 
    "Главная", // ru
    "Головна", // ua
    "Home", // en
    "Accueil", // fr
);
addTranslation("M306", 
    "Чистка террас", // ru
    "Чистка терас", // ua
    "Terrace cleaning", // en
    "Nettoyage de terrasse", // fr
);

addTranslation("M307", 
    "Устранение сквозняков", // ru
    "Усунення протягів", // ua
    "Draft removal", // en
    "Élimination des courants d'air", // fr
);

addTranslation("M308", 
    "Покраска и ремонт", // ru
    "Фарбування та ремонт", // ua
    "Painting and repair", // en
    "Peinture et réparation", // fr
);

addTranslation("M309", 
    "Ремонт обшивки", // ru
    "Ремонт обшивки", // ua
    "Cladding repair", // en
    "Réparation du revêtement", // fr
);

addTranslation("M310", 
    "Ремонт сантехники", // ru
    "Ремонт сантехніки", // ua
    "Plumbing repair", // en
    "Réparation de plomberie", // fr
);

addTranslation("M311", 
    "Декоративные элементы", // ru
    "Декоративні елементи", // ua
    "Decorative elements", // en
    "Éléments décoratifs", // fr
);

addTranslation("M312", 
    "Электрические работы", // ru
    "Електричні роботи", // ua
    "Electrical work", // en
    "Travaux électriques", // fr
);
addTranslation("M313", 
    "Мастер на час — быстро и профессионально", // ru
    "Майстер на годину — швидко та професійно", // ua
    "Handyman by the hour — fast and professional", // en
    "Homme à tout faire à l'heure - rapide et professionnel", // fr
);

addTranslation("M314", 
    "Когда возникают мелкие поломки или срочно нужен ремонт, важны два фактора — скорость и профессионализм. Не всегда есть время и возможность самостоятельно разбираться в тонкостях работы или тратить часы на решение проблемы.", // ru
    "Коли виникають дрібні поломки або терміново потрібен ремонт, важливі два фактори — швидкість і професіоналізм. Не завжди є час і можливість самостійно розбиратися в тонкощах роботи або витрачати години на вирішення проблеми.", // ua
    "When small breakdowns occur or urgent repairs are needed, two factors are important — speed and professionalism. There is not always time and opportunity to deal with the nuances of the work on your own or spend hours solving the problem.", // en
    "Lorsqu'il y a de petites pannes ou qu'une réparation urgente est nécessaire, deux facteurs sont importants : la rapidité et le professionnalisme. Il n'y a pas toujours le temps et la possibilité de comprendre les subtilités du travail ou de passer des heures à résoudre le problème.", // fr
);
addTranslation("M315", 
    "Когда нужен мастер на час?", // ru
    "Коли потрібен майстер на годину?", // ua
    "When do you need a handyman by the hour?", // en
    "Quand avez-vous besoin d'un homme à tout faire à l'heure ?", // fr
);

addTranslation("M316", 
    "Наш мастер на час – это удобное решение для тех, кто ценит своё время и не хочет тратить его на поиск инструментов и попытки самостоятельного ремонта. Опытный специалист приедет в удобное для вас время, быстро оценит ситуацию и качественно выполнит все необходимые работы.", // ru
    "Наш майстер на годину – це зручне рішення для тих, хто цінує свій час та не хоче витрачати його на пошук інструментів і спроби самостійного ремонту. Досвідчений спеціаліст приїде у зручний для вас час, швидко оцінить ситуацію та якісно виконає всі необхідні роботи.", // ua
    "Our handyman by the hour is a convenient solution for those who value their time and don't want to spend it searching for tools or attempting DIY repairs. An experienced specialist will come at a time convenient for you, quickly assess the situation, and efficiently complete all necessary tasks.", // en
    "Notre homme à tout faire à l'heure est une solution pratique pour ceux qui apprécient leur temps et ne veulent pas le passer à chercher des outils ou à tenter des réparations eux-mêmes. Un spécialiste expérimenté viendra à un moment qui vous convient, évaluera rapidement la situation et effectuera efficacement tous les travaux nécessaires.", // fr
);

addTranslation("M317", 
    "Если необходимо срочно устранить мелкую поломку", // ru
    "Якщо необхідно терміново усунути дрібну поломку", // ua
    "If you need to urgently fix a small breakdown", // en
    "Si vous devez réparer rapidement une petite panne", // fr
);

addTranslation("M318", 
    "Если у вас нет инструментов или навыков для ремонта", // ru
    "Якщо у вас немає інструментів або навичок для ремонту", // ua
    "If you don't have the tools or skills for the repair", // en
    "Si vous n'avez pas les outils ou les compétences nécessaires pour réparer", // fr
);

addTranslation("M319", 
    "Если нужно выполнить работу быстро и без хлопот", // ru
    "Якщо потрібно виконати роботу швидко і без клопоту", // ua
    "If you need the job done quickly and without hassle", // en
    "Si vous devez effectuer le travail rapidement et sans tracas", // fr
);

addTranslation("M320", 
    "Если вы хотите быть уверены в качестве выполненных работ", // ru
    "Якщо ви хочете бути впевненими в якості виконаних робіт", // ua
    "If you want to be confident in the quality of the work done", // en
    "Si vous voulez être sûr de la qualité du travail effectué", // fr
);
addTranslation("M321",
  "Выбирая нас, вы получаете не только безупречный результат, но и гарантию качества.", // ru
  "Обираючи нас, ви отримуєте не лише бездоганний результат, а й гарантію якості.", // uk
  "By choosing us, you get not only a flawless result but also a quality guarantee.", // en
  "En nous choisissant, vous obtenez non seulement un résultat impeccable, mais aussi une garantie de qualité." // fr
);

addTranslation("M322",
  "Профессиональный мастер — качество, которое служит годами", // ru
  "Професійний майстер — якість, що служить роками", // uk
  "Professional master — quality that lasts for years", // en
  "Maître professionnel — qualité qui dure des années" // fr
);

addTranslation("M323",
  "Мы используем современные материалы, проверенные технологии и соблюдаем все строительные нормы, чтобы создать для вас комфорт и уют. Доверте ваше пространство профессионалам — и наслаждайтесь результатом без лишних хлопот!", // ru
  "Ми використовуємо сучасні матеріали, перевірені технології та дотримуємося всіх будівельних норм, щоб створити для вас комфорт і затишок. Довірте свій простір професіоналам — і насолоджуйтесь результатом без зайвого клопоту!", // uk
  "We use modern materials, proven technologies, and adhere to all building standards to create comfort and coziness for you. Trust your space to professionals and enjoy the result without unnecessary hassle!", // en
  "Nous utilisons des matériaux modernes, des technologies éprouvées et respectons toutes les normes de construction pour créer du confort et de la chaleur pour vous. Confiez votre espace à des professionnels et profitez du résultat sans tracas inutiles !" // fr
);

addTranslation("M324",
  "Оперативный выезд мастера", // ru
  "Оперативний виїзд майстра", // uk
  "Prompt arrival of the master", // en
  "Arrivée rapide du maître" // fr
);

addTranslation("M325",
  "Приезжаем в удобное для вас время.", // ru
  "Приїдемо у зручний для вас час.", // uk
  "We will come at a time convenient for you.", // en
  "Nous viendrons à un moment qui vous convient." // fr
);

addTranslation("M326",
  "Качественное выполнение работы", // ru
  "Якісне виконання роботи", // uk
  "Quality execution of work", // en
  "Exécution de qualité du travail" // fr
);

addTranslation("M327",
  "Опытные специалисты и профессиональные инструменты.", // ru
  "Досвідчені фахівці та професійні інструменти.", // uk
  "Experienced specialists and professional tools.", // en
  "Spécialistes expérimentés et outils professionnels." // fr
);

addTranslation("M328",
  "Доступные цены", // ru
  "Доступні ціни", // uk
  "Affordable prices", // en
  "Prix abordables" // fr
);

addTranslation("M329",
  "Оптимальное соотношение цены и качества", // ru
  "Оптимальне співвідношення вартості та якості", // uk
  "Optimal value for money", // en
  "Rapport qualité/prix optimal" // fr
);

addTranslation("M330",
  "Гарантия на услуги", // ru
  "Гарантію на послуги", // uk
  "Warranty on services", // en
  "Garantie sur les services" // fr
);

addTranslation("M331",
  "Ответственность за выполненные работы", // ru
  "Відповідальність за виконані роботи", // uk
  "Responsibility for the work performed", // en
  "Responsabilité des travaux effectués" // fr
);

addTranslation("M332",
  "Услуги, которые предоставляет наш мастер:", // ru
  "Послуги, які надає наш майстер:", // uk
  "Services provided by our master:", // en
  "Services fournis par notre maître :" // fr
);
addTranslation("M333",
  "Мастер на час — быстро и профессионально", // ru
  "Майстер на годину — швидко та професійно", // uk
  "Master by the hour — fast and professionally", // en
  "Maître à l'heure — rapide et professionnel" // fr
);

addTranslation("M334",
  "Когда возникают мелкие поломки или срочно требуется ремонт, важны два фактора — скорость и профессионализм. Не всегда есть время и возможность самостоятельно разбираться в тонкостях работы или тратить часы на решение проблемы.", // ru
  "Коли виникають дрібні поломки або терміново потрібен ремонт, важливі два фактори — швидкість і професіоналізм. Не завжди є час і можливість самостійно розбиратися в тонкощах роботи або витрачати години на вирішення проблеми.", // uk
  "When small breakdowns occur or urgent repairs are needed, two factors are important — speed and professionalism. There's not always time or the ability to deal with the intricacies of the work or spend hours solving the problem.", // en
  "Lorsque de petites pannes se produisent ou qu'une réparation urgente est nécessaire, deux facteurs sont importants — la rapidité et le professionnalisme. Il n'y a pas toujours le temps ou la possibilité de se pencher sur les subtilités du travail ou de passer des heures à résoudre le problème." // fr
);
addTranslation("M336",
  "Ремонт мебели — от мелких поломок до полного восстановления.", // ru
  "Ремонт меблів — від дрібних поломок до повного відновлення.", // uk
  "Furniture repair — from small repairs to full restoration.", // en
  "Réparation de meubles — des petites réparations à la restauration complète." // fr
);

addTranslation("M337",
  "Мы предоставляем качественные услуги по ремонту мебели, включая исправление трещин, замену фурнитуры и обновление покрытий.", // ru
  "Ми надаємо якісні послуги з ремонту меблів, включаючи виправлення тріщин, заміну фурнітури та оновлення покриттів.", // uk
  "We provide quality furniture repair services, including crack repair, hardware replacement, and finish restoration.", // en
  "Nous proposons des services de réparation de meubles de qualité, y compris la réparation des fissures, le remplacement des accessoires et la restauration des finitions." // fr
);
addTranslation("M338", 
  "Ремонт мебели", // ru
  "Ремонт меблів", // ua
  "Furniture repair", // en
  "Réparation de meubles" // fr
);

addTranslation("M339", 
  "— от мелких поломок до полного восстановления.", // ru
  "— від дрібних поломок до повного відновлення.", // ua
  "— from small fixes to complete restoration.", // en
  "— des petites pannes à la restauration complète." // fr
);
addTranslation("M340", 
  "Электрические работы", // ru
  "Електричні роботи", // ua
  "Electrical work", // en
  "Travaux électriques" // fr
);

addTranslation("M341", 
  "— ремонт и монтаж розеток, выключателей, освещения.", // ru
  "— ремонт та монтаж розеток, вимикачів, освітлення.", // ua
  "— repair and installation of sockets, switches, lighting.", // en
  "— réparation et installation de prises, interrupteurs, éclairage." // fr
);
addTranslation("M342", 
  "Сантехнические работы", // ru
  "Сантехнічні роботи", // ua
  "Plumbing work", // en
  "Travaux de plomberie" // fr
);

addTranslation("M343", 
  "— ремонт смесителей, замена труб, устранение протечек.", // ru
  "— ремонт змішувачів, заміна труб, усунення течей.", // ua
  "— repair of faucets, pipe replacement, leak fixing.", // en
  "— réparation de robinets, remplacement de tuyaux, réparation des fuites." // fr
);
addTranslation("M344", 
  "Мелкий ремонт", // ru
  "Дрібний ремонт", // ua
  "Minor repairs", // en
  "Petites réparations" // fr
);

addTranslation("M345", 
  "— устранение трещин, ремонт дверей, окон, стен.", // ru
  "— усунення тріщин, ремонти дверей, вікон, стін.", // ua
  "— crack repairs, door, window, and wall repairs.", // en
  "— réparation des fissures, portes, fenêtres et murs." // fr
);
addTranslation("M346", 
  "Сборка мебели", // ru
  "Збірка меблів", // ua
  "Furniture assembly", // en
  "Assemblage de meubles" // fr
);

addTranslation("M347", 
  "— быстро и качественно соберем вашу мебель.", // ru
  "— швидко та якісно зберемо ваші меблі.", // ua
  "— we will assemble your furniture quickly and efficiently.", // en
  "— nous assemblerons vos meubles rapidement et efficacement." // fr
);
addTranslation("M348", 
  "Другие бытовые работы", // ru
  "Інші побутові роботи", // ua
  "Other household tasks", // en
  "Autres tâches ménagères" // fr
);

addTranslation("M349", 
  "— от починки техники до установки бытовых приборов.", // ru
  "— від лагодження техніки до установки побутових пристроїв.", // ua
  "— from repairing appliances to installing household devices.", // en
  "— de la réparation des appareils à l'installation des appareils ménagers." // fr
);
addTranslation("M350", 
  "Не тратьте время на поиски мастера — мы готовы помочь вам прямо сейчас!", // ru
  "Не витрачайте час на пошуки майстра — ми готові допомогти вам прямо зараз!", // ua
  "Don't waste time looking for a handyman — we're ready to help you right now!", // en
  "Ne perdez pas de temps à chercher un artisan - nous sommes prêts à vous aider maintenant !", // fr
);
addTranslation("M351", 
  "ПРОИЗВОДСТВО ТИМ ХАУС", // ru
  "ВИРОБНИЦТВО ТІМ ХАУС", // uk
  "TEAM HOUSE PRODUCTION", // en
  "PRODUCTION TEAM HOUSE", // fr
);
addTranslation("M352", 
  "Наше производство — ваша опора, а качество продукции — гарантия долговечности!", // ru
  "Наше виробництво — ваша опора, а якість продукції — гарантія довговічності!", // uk
  "Our production is your support, and the quality of our products is the guarantee of longevity!", // en
  "Notre production est votre soutien, et la qualité de nos produits est la garantie de durabilité!", // fr
);
addTranslation("M353", 
  "Главная", // ru
  "Головна", // uk
  "Home", // en
  "Accueil", // fr
);

addTranslation("M354", 
  "Производство", // ru
  "Виробництво", // uk
  "Production", // en
  "Production", // fr
);
addTranslation("M355", 
  "Производство ограждений", // ru
  "Виробництво огорож", // uk
  "Fencing production", // en
  "Production de clôtures", // fr
);

addTranslation("M356", 
  "Террасная доска", // ru
  "Терасна дошка", // uk
  "Decking board", // en
  "Planche de terrasse", // fr
);

addTranslation("M357", 
  "Клееный брус для домов", // ru
  "Клеєний брус для будинків", // uk
  "Glued timber for houses", // en
  "Bois collé pour maisons", // fr
);

addTranslation("M358", 
  "Клееные балки конструкционные", // ru
  "Клеєні балки конструкційні", // uk
  "Glued structural beams", // en
  "Poutres collées pour structures", // fr
);

addTranslation("M359", 
  "Клееные балки на заказ", // ru
  "Клеєні балки на замовлення", // uk
  "Custom glued beams", // en
  "Poutres collées sur commande", // fr
);

addTranslation("M360", 
  "Колонны, стропила Клееные", // ru
  "Стовпи, крокви клеєні", // uk
  "Glued posts, rafters", // en
  "Poteaux, chevrons collés", // fr
);

addTranslation("M361", 
  "Сухие строганные пиломатериалы", // ru
  "Пиломатериали сухі, стругані", // uk
  "Dry planed timber", // en
  "Bois séché et raboté", // fr
);

addTranslation("M362", 
  "Профессионализм на каждом этапе производства", // ru
  "Професіоналізм на кожному етапі виробництва", // uk
  "Professionalism at every stage of production", // en
  "Professionnalisme à chaque étape de la production", // fr
);

addTranslation("M363", 
  "Мы используем только профессиональные клеи, которые обеспечивают надёжное соединение элементов и долговечность готовых изделий. Все процессы контролируются на каждом этапе — от выбора древесины до финальной обработки.", // ru
  "Ми використовуємо лише професійні клеї, які забезпечують надійне з’єднання елементів і довговічність готових виробів. Всі процеси контролюються на кожному етапі — від вибору деревини до фінальної обробки.", // uk
  "We use only professional glues that ensure a reliable connection of elements and the durability of the finished products. All processes are controlled at each stage — from selecting the wood to final processing.", // en
  "Nous utilisons uniquement des colles professionnelles qui assurent une connexion fiable des éléments et la durabilité des produits finis. Tous les processus sont contrôlés à chaque étape — de la sélection du bois à la finition finale.", // fr
);
addTranslation("M364", 
  "Почему стоит выбрать наше производство?", // ru
  "Чому варто обрати наше виробництво?", // uk
  "Why choose our production?", // en
  "Pourquoi choisir notre production?", // fr
);

addTranslation("M365", 
  "У нас есть собственная мастерская в Киеве, где мы выполняем заказы для наших клиентов с максимальной скоростью и точностью. В мастерской мы клеим, создаем ограждения, изготавливаем мебель и другие деревянные изделия, которые удовлетворяют все потребности наших заказчиков. Кроме того, мы сушим и строгаем древесину для дальнейшего производства.", // ru
  "У нас є власна майстерня в Києві, де ми виготовляємо замовлення для наших клієнтів з максимальною швидкістю та точністю. У майстерні ми клеїмо, створюємо огорожі, виготовляємо меблі та інші дерев'яні вироби, що задовольняють всі потреби наших замовників. Крім того, ми сушимо та стругаємо деревину для подальшого виробництва.", // uk
  "We have our own workshop in Kyiv where we produce orders for our clients with maximum speed and accuracy. In the workshop, we glue, create fences, make furniture, and other wooden products that meet all our clients' needs. In addition, we dry and plane the wood for further production.", // en
  "Nous avons notre propre atelier à Kyiv où nous fabriquons les commandes pour nos clients avec la plus grande rapidité et précision. Dans l'atelier, nous collons, créons des clôtures, fabriquons des meubles et d'autres produits en bois qui répondent à tous les besoins de nos clients. De plus, nous séchons et rabotons le bois pour la production future.", // fr
);
addTranslation("M366", 
  "Преимущества мастерской:", // ru
  "Переваги майстерні:", // uk
  "Advantages of the workshop:", // en
  "Avantages de l'atelier:", // fr
);
addTranslation("M367", 
  "Скорость выполнения заказов:", // ru
  "Швидкість виконання замовлень:", // uk
  "Order fulfillment speed:", // en
  "Vitesse d'exécution des commandes:", // fr
);

addTranslation("M368", 
  "Индивидуальный подход к каждому заказу:", // ru
  "Індивідуальний підхід до кожного замовлення:", // uk
  "Individual approach to each order:", // en
  "Approche individuelle pour chaque commande:", // fr
);

addTranslation("M369", 
  "Высокое качество обработки и материалов:", // ru
  "Висока якість обробки та матеріалів:", // uk
  "High quality of processing and materials:", // en
  "Haute qualité de traitement et de matériaux:", // fr
);
addTranslation("M370", 
  "наша мастерская в Киеве гарантирует оперативное изготовление изделий в кратчайшие сроки.", // ru
  "наша майстерня в Києві гарантує оперативне виготовлення виробів у найкоротші терміни.", // uk
  "our workshop in Kyiv guarantees the prompt production of products in the shortest terms.", // en
  "notre atelier à Kiev garantit une fabrication rapide des produits dans les plus brefs délais.", // fr
);
addTranslation("M371", 
  "мы изготавливаем продукцию по уникальным проектам, учитывая все пожелания и требования наших клиентов.", // ru
  "ми виготовляємо продукцію за унікальними проектами, враховуючи всі побажання та вимоги наших клієнтів.", // uk
  "we produce products according to unique projects, considering all the wishes and requirements of our clients.", // en
  "nous fabriquons des produits selon des projets uniques, en tenant compte de toutes les demandes et exigences de nos clients.", // fr
);
addTranslation("M372", 
  "в мастерской используются только проверенные материалы и профессиональное оборудование, что гарантирует долговечность и надежность каждого изделия.", // ru
  "у майстерні використовуються тільки перевірені матеріали та професійне обладнання, що гарантує довговічність і надійність кожного виробу.", // uk
  "only tested materials and professional equipment are used in the workshop, ensuring the durability and reliability of each product.", // en
  "dans l'atelier, seuls des matériaux éprouvés et des équipements professionnels sont utilisés, garantissant la durabilité et la fiabilité de chaque produit.", // fr
);
addTranslation("M373", 
  "Мы изготавливаем изделия из сосны, ели, ольхи, дуба, ясеня, кедра.", // ru
  "Ми виготовляємо вироби з сосни, смереки, ольхи, дуба, ясеня, кедра.", // uk
  "We manufacture products from pine, spruce, alder, oak, ash, cedar.", // en
  "Nous fabriquons des produits en pin, épicéa, aulne, chêne, frêne, cèdre.", // fr
);
addTranslation("M374", 
  "Производство в городе Сарны", // ru
  "Виробництво у місті Сарни", // uk
  "Production in the city of Sarny", // en
  "Production dans la ville de Sarny", // fr
);

addTranslation("M375", 
  "Оборудовано современными промышленными сушилками и немецким станком для производства клееного бруса. Это позволяет нам обеспечивать высокое качество материалов для строительства деревянных домов. Мы способны производить не только клееный брус, но и конструктивные балки и стропильные системы для строительства, гарантируя надежность и долговечность каждой детали. Наш подход к работе позволяет создавать продукты, соответствующие самым высоким стандартам качества и надежности.", // ru
  "Оснащене сучасними промисловими сушками та німецьким станком для виготовлення клеєного бруса. Це дозволяє нам забезпечити високу якість матеріалів для будівництва дерев'яних будинків. Ми здатні виготовляти не лише клеєний брус, а й конструкційні балки та стропильні системи для будівництва, гарантуючи надійність і довговічність кожної деталі. Наш підхід до роботи дозволяє створювати продукти, які відповідають найвищим стандартам якості та надійності.", // uk
  "Equipped with modern industrial dryers and a German machine for manufacturing glued timber. This allows us to ensure high quality materials for building wooden houses. We are able to produce not only glued timber but also structural beams and truss systems for construction, guaranteeing the reliability and durability of every detail. Our approach to work allows us to create products that meet the highest standards of quality and reliability.", // en
  "Équipé de séchoirs industriels modernes et d'une machine allemande pour fabriquer du bois lamellé-collé. Cela nous permet d'assurer la haute qualité des matériaux pour la construction de maisons en bois. Nous sommes capables de produire non seulement du bois lamellé-collé, mais aussi des poutres structurelles et des systèmes de fermes pour la construction, garantissant la fiabilité et la durabilité de chaque détail. Notre approche du travail permet de créer des produits qui répondent aux normes les plus élevées en matière de qualité et de fiabilité.", // fr
);
addTranslation("M376", 
  "Профилированный клееный брус", // ru
  "Профільований клеєний брус", // uk
  "Profiled glued timber", // en
  "Bois lamellé profilé", // fr
);

addTranslation("M377", 
  "Мы изготавливаем профилированный клееный брус, который соответствует самым высоким стандартам качества. Предлагаем европейский профиль с 7 уровнями защиты от продувания, что обеспечивает герметичность и теплоизоляцию. Также изготавливаем брус по индивидуальному профилю заказчика, используя высокоточное оборудование и надежные технологии склеивания.", // ru
  "Ми виготовляємо профільований клеєний брус, що відповідає найвищим стандартам якості. Пропонуємо європейський профіль із 7 ступенями захисту від продування, який забезпечує герметичність і теплоізоляцію. Також виготовляємо брус за індивідуальним профілем замовника, використовуючи високоточне обладнання та надійні технології склеювання.", // uk
  "We manufacture profiled glued timber that meets the highest quality standards. We offer a European profile with 7 levels of protection against drafts, ensuring airtightness and thermal insulation. We also produce timber according to the customer's custom profile, using high-precision equipment and reliable gluing technologies.", // en
  "Nous fabriquons du bois lamellé-collé profilé qui répond aux normes de qualité les plus élevées. Nous proposons un profil européen avec 7 niveaux de protection contre les courants d'air, assurant l'étanchéité et l'isolation thermique. Nous fabriquons également du bois selon le profil personnalisé du client, en utilisant des équipements de haute précision et des technologies de collage fiables.", // fr
);
addTranslation("M378", 
  "Профилированный сухой брус", // ru
  "Профільований сухий брус", // uk
  "Profiled dry timber", // en
  "Bois sec profilé", // fr
);

addTranslation("M379", 
  "Мы изготавливаем профилированный сухой брус, который проходит тщательную сушку и обработку, что гарантирует его прочность и долговечность. Благодаря стабильной геометрии и минимальному усадке, он идеально подходит для строительства. Мы предлагаем различные типы профилей, в том числе европейский с улучшенной герметичностью, а также возможность изготовления индивидуального профиля по вашему проекту.", // ru
  "Ми виготовляємо профільований сухий брус, який проходить ретельну сушку та обробку, що гарантує його міцність і довговічність. Завдяки стабільній геометрії та мінімальній усадці він ідеально підходить для будівництва. Пропонуємо різні типи профілів, зокрема європейський із покращеною герметичністю, а також можливість виготовлення індивідуального профілю за вашим проєктом.", // uk
  "We manufacture profiled dry timber that undergoes thorough drying and treatment, ensuring its strength and durability. Due to its stable geometry and minimal shrinkage, it is perfect for construction. We offer various profile types, including a European profile with enhanced airtightness, and also the possibility of making custom profiles based on your project.", // en
  "Nous fabriquons du bois sec profilé qui subit un séchage et un traitement minutieux, garantissant sa résistance et sa durabilité. Grâce à sa géométrie stable et à son faible taux de retrait, il est parfait pour la construction. Nous proposons différents types de profils, y compris un profil européen avec une meilleure étanchéité, ainsi que la possibilité de fabriquer des profils personnalisés selon votre projet.", // fr
);

addTranslation("M380", 
  "Конструкционный клееный брус", // ru
  "Конструкційний клеєний брус", // uk
  "Structural glued timber", // en
  "Bois lamellé-collé pour construction", // fr
);

addTranslation("M381", 
  "Мы изготавливаем конструкционный клееный брус, который соответствует конструкторским расчетам и обеспечивает прочность строительных конструкций. Склеивание выполняется с использованием современных технологий и проверенных клеев, что гарантирует стабильность геометрии и высокую несущую способность. Брус идеально подходит для балок перекрытия, стропильных систем и несущих конструкций, обеспечивая надежность и безопасность строительства.", // ru
  "Ми виготовляємо конструкційний клеєний брус, який відповідає конструкторським розрахункам та забезпечує міцність будівельних конструкцій. Склеювання виконується за сучасними технологіями з використанням перевірених клеїв, що гарантує стабільність геометрії та високу несучу здатність. Брус ідеально підходить для балок перекриття, стропильних систем і несучих конструкцій, забезпечуючи надійність та безпеку будівництва.", // uk
  "We manufacture structural glued timber that meets engineering calculations and ensures the strength of building structures. The gluing is done using modern technologies and tested adhesives, which guarantees geometry stability and high load-bearing capacity. The timber is ideal for floor beams, roof trusses, and load-bearing structures, ensuring the reliability and safety of the construction.", // en
  "Nous fabriquons du bois lamellé-collé pour la construction qui répond aux calculs structurels et assure la solidité des structures de bâtiment. Le collage est réalisé en utilisant des technologies modernes et des colles éprouvées, garantissant la stabilité de la géométrie et une grande capacité de charge. Le bois est idéal pour les poutres de plancher, les systèmes de fermes de toit et les structures porteuses, assurant la fiabilité et la sécurité de la construction.", // fr
);

addTranslation("M382", 
  "Клееные колонны и балки", // ru
  "Клеєні колони та балки", // uk
  "Glued columns and beams", // en
  "Colonnes et poutres collées", // fr
);

addTranslation("M383", 
  "Мы изготавливаем клееные колонны и балки из сосны и ели, отбирая древесину только с живым сучком, что придает им натуральный и благородный вид. Благодаря целостности и безупречной обработке, балки имеют эстетичный и завершенный вид, идеально дополняя любое пространство. Они подчеркивают природную красоту дерева и создают атмосферу уюта и гармонии.", // ru
  "Ми виготовляємо клеєні колони та балки з сосни та смереки, відбираючи деревину тільки з живим сучком, що надає їм природний та благородний вигляд. Завдяки цілісності й бездоганній обробці, балки мають естетичний та завершений вигляд, ідеально доповнюючи будь-який простір. Вони підкреслюють природну красу дерева та створюють атмосферу затишку й гармонії.", // uk
  "We manufacture glued columns and beams from pine and spruce, selecting wood only with live knots, which gives them a natural and noble appearance. Thanks to their integrity and impeccable processing, the beams have an aesthetic and finished look, perfectly complementing any space. They highlight the natural beauty of the wood and create an atmosphere of coziness and harmony.", // en
  "Nous fabriquons des colonnes et des poutres collées à partir de pin et d'épicéa, en sélectionnant le bois uniquement avec des nœuds vivants, ce qui leur donne un aspect naturel et noble. Grâce à leur intégrité et à leur traitement impeccable, les poutres ont un aspect esthétique et fini, complétant parfaitement n'importe quel espace. Elles soulignent la beauté naturelle du bois et créent une atmosphère de confort et d'harmonie.", // fr
);
addTranslation("M384", 
  "Вагонка, имитация бруса, доска для пола", // ru
  "Вагонка, імітація бруса, дошка для підлоги", // uk
  "Cladding, timber imitation, floorboard", // en
  "Revêtement, imitation de bois, plancher", // fr
);

addTranslation("M385", 
  "Мы изготавливаем вагонку, имитацию бруса и доску для пола в различных профилях, адаптируя продукцию индивидуально под ваш проект. Клиенты могут выбрать не только профиль, но и размер и тип древесины, что позволяет создать идеальное сочетание стиля и функциональности для любого интерьера или экстерьера.", // ru
  "Ми виготовляємо вагонку, імітацію бруса та дошку для підлоги у різних профілях, адаптуючи продукцію індивідуально під ваш проєкт. Клієнти можуть обрати не лише профіль, а й розмір та тип деревини, що дозволяє створити ідеальне поєднання стилю та функціональності для будь-якого інтер’єру чи екстер’єру.", // uk
  "We manufacture cladding, timber imitation, and floorboards in various profiles, tailoring the product individually to your project. Customers can choose not only the profile but also the size and type of wood, allowing for the perfect combination of style and functionality for any interior or exterior.", // en
  "Nous fabriquons des revêtements, des imitations de bois et des planchers dans différents profils, en adaptant le produit individuellement à votre projet. Les clients peuvent choisir non seulement le profil, mais aussi la taille et le type de bois, permettant ainsi une combinaison parfaite de style et de fonctionnalité pour tout intérieur ou extérieur.", // fr
);

addTranslation("M386", 
  "Кровельные системы, лаги, обрешетка, рейка", // ru
  "Стропильні системи, лаги, обрешітка, рейка", // uk
  "Roof trusses, beams, battens, slats", // en
  "Systèmes de charpente, poutres, liteaux, lattes", // fr
);

addTranslation("M387", 
  "Мы изготавливаем кровельные системы, лаги, обрешетку и рейку, обеспечивая точность размеров и качество обработки. Предлагаем материалы из сухой строганой древесины, которые идеально подходят для крыш, перекрытий и каркасного строительства. Изготовление осуществляется по индивидуальным проектам с учетом нагрузок и конструктивных особенностей.", // ru
  "Ми виготовляємо стропильні системи, лаги, обрешітку та рейку, забезпечуючи точність розмірів та якість обробки. Пропонуємо матеріали з сухої струганої деревини, які ідеально підходять для дахів, перекриттів та каркасного будівництва. Виготовлення відбувається за індивідуальними проєктами, з урахуванням навантажень та конструктивних особливостей.", // uk
  "We manufacture roof trusses, beams, battens, and slats, ensuring size accuracy and processing quality. We offer materials made from dry planed timber, which are perfect for roofs, floors, and frame construction. Manufacturing is done according to custom projects, taking into account loads and structural features.", // en
  "Nous fabriquons des systèmes de charpente, des poutres, des liteaux et des lattes, en garantissant la précision des dimensions et la qualité du traitement. Nous proposons des matériaux en bois sec raboté, qui conviennent parfaitement pour les toitures, les planchers et la construction à ossature. La fabrication se fait selon des projets personnalisés, en tenant compte des charges et des caractéristiques structurelles.", // fr
);
addTranslation("M388", 
  "ГАРАНТИЯ ТИМ ХАУС", // ru
  "ГАРАНТІЯ ТІМ ХАУС", // uk
  "TEAM HOUSE WARRANTY", // en
  "GARANTIE TEAM HOUSE", // fr
);
addTranslation("M389", 
  "Гарантированное качество, быстрый сервис – ваша уверенность на каждом этапе!", // ru
  "Гарантована якість, швидкий сервіс – ваша впевненість у кожному етапі!", // uk
  "Guaranteed quality, fast service – your confidence at every stage!", // en
  "Qualité garantie, service rapide – votre confiance à chaque étape !" // fr
);
addTranslation("M390", 
  "Главная", // ru
  "Головна", // uk
  "Home", // en
  "Accueil", // fr
);

addTranslation("M391", 
  "О нашей гарантии", // ru
  "Про нашу гарантію", // uk
  "About Our Guarantee", // en
  "À propos de notre garantie", // fr
);
addTranslation("M392", 
  "Качество материалов", // ru
  "Якість матеріалів", // uk
  "Material Quality", // en
  "Qualité des matériaux", // fr
);

addTranslation("M393", 
  "Производственный контроль", // ru
  "Виробничий контроль", // uk
  "Production Control", // en
  "Contrôle de production", // fr
);

addTranslation("M394", 
  "Долговечность", // ru
  "Довговічність", // uk
  "Durability", // en
  "Durabilité", // fr
);

addTranslation("M395", 
  "Прозрачность оплат", // ru
  "Прозорість оплат", // uk
  "Payment Transparency", // en
  "Transparence des paiements", // fr
);

addTranslation("M396", 
  "Поддержка клиентов", // ru
  "Підтримка клієнтів", // uk
  "Customer Support", // en
  "Support client", // fr
);
addTranslation("M397", 
  "Гарантия на материалы и работу!", // ru
  "Гарантія на матеріали та роботу!", // uk
  "Warranty on materials and work!", // en
  "Garantie sur les matériaux et le travail!", // fr
);
addTranslation("M398", 
  "В ТИМ ХАУС мы полностью уверены в качестве нашей работы и материалов, поэтому предоставляем гарантию как на выполненные работы, так и на использованные материалы.", // ru
  "В ТІМ ХАУС ми повністю впевнені в якості нашої роботи та матеріалів, тому надаємо гарантію як на виконані роботи, так і на використані матеріали.", // uk
  "At TEAM HOUSE, we are fully confident in the quality of our work and materials, so we provide a warranty on both the work performed and the materials used.", // en
  "Chez TEAM HOUSE, nous sommes entièrement confiants dans la qualité de notre travail et de nos matériaux, c'est pourquoi nous offrons une garantie sur le travail effectué ainsi que sur les matériaux utilisés.", // fr
);
addTranslation("M399", 
  "Гарантированное качество, быстрый сервис — ваша уверенность на каждом этапе!", // ru
  "Гарантована якість, швидкий сервіс – ваша впевненість у кожному етапі!", // uk
  "Guaranteed quality, fast service – your confidence at every stage!", // en
  "Qualité garantie, service rapide – votre confiance à chaque étape!", // fr
);

addTranslation("M400", 
  "Наша команда всегда быстро реагирует на гарантийные случаи и обеспечивает оперативный выезд, чтобы решить любые вопросы в кратчайшие сроки. TIM HOUSE находится в Киеве, и все наши сотрудники являются жителями города. Мы не работаем с гастарбайтерами или бригадами из других городов, где после получения оплаты невозможно связаться с исполнителями. Наши специалисты всегда на связи и готовы предоставить вам надежность и спокойствие, гарантируя бесперебойную поддержку на всех этапах выполнения работ. Не ждите — звоните прямо сейчас!", // ru
  "Наша команда завжди швидко реагує на гарантійні випадки та забезпечує оперативний виїзд, щоб вирішити будь-які питання у найкоротші терміни. ТІМ ХАУС знаходиться в Києві, і всі наші співробітники є мешканцями міста. Ми не працюємо з госторбайтерами чи бригадами з інших міст, де після отримання оплати неможливо зв'язатися з виконавцями. Наші спеціалісти завжди на зв'язку та готові надати вам надійність і спокій, гарантуючи безперервну підтримку на всіх етапах виконання робіт. Не чекай – дзвони прямо зараз!", // uk
  "Our team always responds quickly to warranty cases and provides prompt departure to resolve any issues as soon as possible. TIM HOUSE is located in Kyiv, and all our employees are residents of the city. We do not work with guest workers or teams from other cities, where after receiving payment it is impossible to contact the performers. Our specialists are always available and ready to provide you with reliability and peace of mind, guaranteeing continuous support at all stages of the work process. Don’t wait — call now!", // en
  "Notre équipe réagit toujours rapidement aux cas de garantie et assure un départ rapide pour résoudre tous les problèmes dans les plus brefs délais. TIM HOUSE est situé à Kiev, et tous nos employés sont des habitants de la ville. Nous ne travaillons pas avec des travailleurs étrangers ou des équipes d'autres villes, où après le paiement, il est impossible de contacter les exécutants. Nos spécialistes sont toujours disponibles et prêts à vous offrir fiabilité et tranquillité d'esprit, garantissant un soutien continu à toutes les étapes de l'exécution des travaux. N'attendez pas – appelez maintenant !", // fr
);
addTranslation("M401", 
  "Не жди — звони прямо сейчас!", // ru
  "Не чекай – дзвони прямо зараз!", // uk
  "Don't wait – call right now!", // en
  "N'attends pas – appelle dès maintenant !" // fr
);
addTranslation("M402", 
  "Как происходит работа с нами:", // ru
  "Як відбувається робота з нами:", // uk
  "How the work with us goes:", // en
  "Comment se passe le travail avec nous :" // fr
);
addTranslation("M403", 
  "Позвоните нам", // ru
  "Зателефонуйте нам", // uk
  "Call us", // en
  "Appelez-nous", // fr
);

addTranslation("M404", 
  "— для консультации и запроса на расчет.", // ru
  "— для консультації та запиту на розрахунок.", // uk
  "— for consultation and calculation request.", // en
  "— pour une consultation et une demande de devis.", // fr
);
addTranslation("M405", 
  "Предварительный расчет", // ru
  "Попередній прорахунок", // uk
  "Preliminary calculation", // en
  "Calcul préliminaire", // fr
);

addTranslation("M406", 
  "— стоимости работ и материалов.", // ru
  "— вартості робіт та матеріалів.", // uk
  "— cost of work and materials.", // en
  "— coût des travaux et des matériaux.", // fr
);
addTranslation("M407", 
  "Выезд на объект", // ru
  "Виїзд на об'єкт", // uk
  "Site visit", // en
  "Visite sur site", // fr
);

addTranslation("M408", 
  "— для детального осмотра и уточнения деталей проекта.", // ru
  "— для детального огляду та уточнення деталей проєкту.", // uk
  "— for a detailed inspection and clarification of project details.", // en
  "— pour une inspection détaillée et clarification des détails du projet.", // fr
);
addTranslation("M409", 
  "Предоплата", // ru
  "Передоплата", // uk
  "Prepayment", // en
  "Acompte", // fr
);

addTranslation("M410", 
  "— после согласования всех условий — для начала работ.", // ru
  "— після узгодження всіх умов — для початку робіт.", // uk
  "— after agreeing on all conditions — to start the work.", // en
  "— après avoir convenu de toutes les conditions — pour commencer les travaux.", // fr
);
addTranslation("M411", 
  "Предоплата", // ru
  "Передоплата", // uk
  "Prepayment", // en
  "Acompte", // fr
);

addTranslation("M412", 
  "— после согласования всех условий — для начала работ.", // ru
  "— після узгодження всіх умов — для початку робіт.", // uk
  "— after agreeing on all conditions — to start the work.", // en
  "— après avoir convenu de toutes les conditions — pour commencer les travaux.", // fr
);
addTranslation("M413", 
  "Конечный расчет", // ru
  "Кінцевий розрахунок,", // uk
  "Final calculation,", // en
  "Règlement final,", // fr
);

addTranslation("M414", 
  "— после завершения работ.", // ru
  "— після завершення робіт.", // uk
  "— after the work is completed.", // en
  "— après l'achèvement des travaux.", // fr
);
addTranslation("M415", 
  "Гарантия", // ru
  "Гарантія", // uk
  "Warranty", // en
  "Garantie", // fr
);

addTranslation("M416", 
  "— мы предоставляем гарантию на выполненные работы и материалы.", // ru
  "— ми надаємо гарантію на виконані роботи та матеріали.", // uk
  "— we provide a warranty on the completed work and materials.", // en
  "— nous offrons une garantie sur les travaux effectués et les matériaux.", // fr
);
addTranslation("M417", 
  "Мы всегда готовы обеспечить качество и надежность на каждом этапе!", // ru
  "Ми завжди готові забезпечити якість і надійність на кожному етапі!", // uk
  "We are always ready to ensure quality and reliability at every stage!", // en
  "Nous sommes toujours prêts à garantir la qualité et la fiabilité à chaque étape!", // fr
);
addTranslation("M418", 
  "ТИМ ХАУС", // ru
  "ТІМ ХАУС", // uk
  "TEAM HOUSE", // en
  "TEAM HOUSE", // fr
);
addTranslation("M419", 
  "УСЛУГИ ТИМ ХАУС", // ru  
  "ПОСЛУГИ ТІМ ХАУС", // uk  
  "TEAM HOUSE SERVICES", // en  
  "SERVICES TEAM HOUSE" // fr  
);
addTranslation("M420", 
  "Услуги", // ru  
  "Послуги", // uk  
  "Services", // en  
  "Services" // fr  
);

addTranslation("M421", 
  "Главная", // ru  
  "Головна", // uk  
  "Home", // en  
  "Accueil" // fr  
);

addTranslation("M422", 
  "Услуги", // ru  
  "Послуги", // uk  
  "Services", // en  
  "Services" // fr  
);
addTranslation("M423",  
  "Выбирая нас, вы выбираете спокойствие и уверенность.", // ru  
  "Обираючи нас, ви обираєте спокій і впевненість.", // uk  
  "By choosing us, you choose peace of mind and confidence.", // en  
  "En nous choisissant, vous choisissez la tranquillité d'esprit et la confiance." // fr  
);  

addTranslation("M424",  
  "Гарантированное качество, надежность и быстрое выполнение работ – ваш покой в надежных руках.", // ru  
  "Гарантована якість, надійність та швидке виконання робіт – ваш спокій у надійних руках.", // uk  
  "Guaranteed quality, reliability, and fast execution of work – your peace of mind is in safe hands.", // en  
  "Qualité garantie, fiabilité et exécution rapide des travaux – votre tranquillité d'esprit est entre de bonnes mains." // fr  
);
addTranslation("M425",  
  "Гарантированное качество, надежность и быстрое выполнение работ – ваш покой в надежных руках.", // ru  
  "Гарантована якість, надійність та швидке виконання робіт – ваш спокій у надійних руках.", // uk  
  "Guaranteed quality, reliability, and fast execution of work – your peace of mind is in safe hands.", // en  
  "Qualité garantie, fiabilité et exécution rapide des travaux – votre tranquillité d'esprit est entre de bonnes mains." // fr  
);
addTranslation("M426",  
  "Производство клееного бруса", // ru  
  "Виробництво клеєного брусу", // uk  
  "Glued timber production", // en  
  "Production de bois lamellé-collé" // fr  
);  

addTranslation("M427",  
  "Изготовление соединений", // ru  
  "Виготовлення з'єднань", // uk  
  "Joint manufacturing", // en  
  "Fabrication des assemblages" // fr  
);  
addTranslation("M428",  
  "Реставрация крупногабаритных окон", // ru  
  "Реставрація великогабарітних вікон", // uk  
  "Restoration of large-sized windows", // en  
  "Restauration de fenêtres de grande taille" // fr  
);  

addTranslation("M429",  
  "Реставрация без демонтажа", // ru  
  "Реставрація без демонтажу", // uk  
  "Restoration without dismantling", // en  
  "Restauration sans démontage" // fr  
);  

addTranslation("M430",  
  "Дом 300 м²", // ru  
  "Будинок 300 м²", // uk  
  "House 300 m²", // en  
  "Maison 300 m²" // fr  
);  

addTranslation("M431",  
  "Фундамент и строительство дома 200мм", // ru  
  "Фундамент та будівництво будинку 200мм", // uk  
  "Foundation and house construction 200mm", // en  
  "Fondations et construction de maison 200mm" // fr  
);  
addTranslation("M432",  
  "Баня из клееного бруса 143 м²", // ru  
  "Лазня з клеєного брусу 143 м²", // uk  
  "Bathhouse made of glued timber 143 m²", // en  
  "Bain en bois lamellé-collé 143 m²" // fr  
);  

addTranslation("M433",  
  "Клееный брус 180 мм, стены, кровля", // ru  
  "Клеєний брус 180 мм, стіни, покрівля", // uk  
  "Glued timber 180 mm, walls, roof", // en  
  "Bois lamellé-collé 180 mm, murs, toiture" // fr  
);  
addTranslation("M434",  
  "Реставрация лестницы", // ru  
  "Реставрація сходів", // uk  
  "Staircase restoration", // en  
  "Restauration d'escalier" // fr  
);  

addTranslation("M435",  
  "Обновление краски и лака, устранение повреждений и скрипов", // ru  
  "Оновлення фарби та лаку, усунення пошкоджень і скрипів", // uk  
  "Coating renewal, damage and squeak elimination", // en  
  "Renouvellement du revêtement, élimination des dommages et des grincements" // fr  
);  
addTranslation("M436",  
  "Реставрация ограждений", // ru  
  "Реставрація огорож", // uk  
  "Fence restoration", // en  
  "Restauration des clôtures" // fr  
);  

addTranslation("M437",  
  "Обновление покрытия, ремонт, герметизация и покраска", // ru  
  "Оновлення покриття, ремонт, герметизація та фарбування", // uk  
  "Coating renewal, repair, sealing, and painting", // en  
  "Renouvellement du revêtement, réparation, étanchéité et peinture" // fr  
);  
addTranslation("M438",  
  "Дом-баня 350 м²", // ru  
  "Будинок-лазня 350 м²", // uk  
  "House-bathhouse 350 m²", // en  
  "Maison-sauna 350 m²" // fr  
);  

addTranslation("M439",  
  "Строительство дома из клееного бруса 200 мм", // ru  
  "Будівництво будинку з клеєного брусу 200 мм", // uk  
  "Construction of a house made of glued timber 200 mm", // en  
  "Construction d'une maison en bois lamellé-collé 200 mm" // fr  
);  
addTranslation("M440",  
  "Строительство фундамента", // ru  
  "Будівництво фундаменту", // uk  
  "Foundation construction", // en  
  "Construction de fondation" // fr  
);  

addTranslation("M441",  
  "Ленточный фундамент с плитой 150 мм", // ru  
  "Ленточний фундамент із плитою 150 мм", // uk  
  "Strip foundation with a 150 mm slab", // en  
  "Fondation en bande avec une dalle de 150 mm" // fr  
);  
addTranslation("M442",  
  "Реставрация уникальных старинных объектов", // ru  
  "Реставрація унікальних старовинних об’єктів", // uk  
  "Restoration of unique historical objects", // en  
  "Restauration d'objets anciens uniques" // fr  
);  

addTranslation("M443",  
  "Герметизация, обновление краски снаружи", // ru  
  "Герметизація, оновлення фарби зовні", // uk  
  "Sealing, exterior paint renewal", // en  
  "Étanchéité, renouvellement de la peinture extérieure" // fr  
);  
addTranslation("M444",  
  "Проектирование деревянных домов, визуализация", // ru  
  "Проектування дерев'яних будинків, візуалізація", // uk  
  "Design and visualization of wooden houses", // en  
  "Conception et visualisation de maisons en bois" // fr  
);  

addTranslation("M445",  
  "Баня из сруба и ландшафт", // ru  
  "Лазня зі зрубу та ландшафт", // uk  
  "Log sauna and landscape", // en  
  "Sauna en rondins et paysage" // fr  
);  
addTranslation("M446",  
  "Реставрация ограждений", // ru  
  "Реставрація огорож", // uk  
  "Fence restoration", // en  
  "Restauration des clôtures" // fr  
);  

addTranslation("M447",  
  "Обновление покрытия, ремонт, герметизация и покраска", // ru  
  "Оновлення покриття, ремонт, герметизація та фарбування", // uk  
  "Coating renewal, repair, sealing, and painting", // en  
  "Renouvellement du revêtement, réparation, étanchéité et peinture" // fr  
);  
addTranslation("M448",  
  "ОТКРЫТО БРОНИРОВАНИЕ НА 2025 ГОД! 5% СКИДКИ НА ЗАКАЗ ДО 1 АПРЕЛЯ 2025 Г.! ТЕЛЕФОН/TELEGRAM: +380 93 752 74 77 УСПЕЙ ВОСПОЛЬЗОВАТЬСЯ ВЫГОДНЫМ ПРЕДЛОЖЕНИЕМ!", // ru  
  "ВІДКРИТО БРОНЮВАННЯ НА 2025 РІК! 5% ЗНИЖКИ НА ЗАМОВЛЕННЯ ДО 1 КВІТНЯ 2025 Р.! ТЕЛЕФОН/TELEGRAM: +380 93 752 74 77 ВСТИГНИ СКОРИСТАТИСЯ ВИГІДНОЮ ПРОПОЗИЦІЄЮ!", // uk  
  "BOOKING FOR 2025 IS OPEN! 5% DISCOUNT ON ORDERS UNTIL APRIL 1, 2025! PHONE/TELEGRAM: +380 93 752 74 77 HURRY UP TO TAKE ADVANTAGE OF THIS GREAT OFFER!", // en  
  "RÉSERVATIONS OUVERTES POUR 2025! 5% DE RÉDUCTION SUR LES COMMANDES JUSQU'AU 1ER AVRIL 2025! TÉLÉPHONE/TELEGRAM: +380 93 752 74 77 DÉPÊCHEZ-VOUS DE PROFITER DE CETTE OFFRE AVANTAGEUSE!" // fr  
);
addTranslation("M448",  
  "ОТКРЫТО БРОНИРОВАНИЕ НА 2025 ГОД! 5% СКИДКИ НА ЗАКАЗ ДО 1 АПРЕЛЯ 2025 Г.! ТЕЛЕФОН/TELEGRAM: +380 93 752 74 77 УСПЕЙ ВОСПОЛЬЗОВАТЬСЯ ВЫГОДНЫМ ПРЕДЛОЖЕНИЕМ!", // ru  
  "ВІДКРИТО БРОНЮВАННЯ НА 2025 РІК! 5% ЗНИЖКИ НА ЗАМОВЛЕННЯ ДО 1 КВІТНЯ 2025 Р.! ТЕЛЕФОН/TELEGRAM: +380 93 752 74 77 ВСТИГНИ СКОРИСТАТИСЯ ВИГІДНОЮ ПРОПОЗИЦІЄЮ!", // uk  
  "BOOKING FOR 2025 IS OPEN! 5% DISCOUNT ON ORDERS UNTIL APRIL 1, 2025! PHONE/TELEGRAM: +380 93 752 74 77 HURRY UP TO TAKE ADVANTAGE OF THIS GREAT OFFER!", // en  
  "RÉSERVATIONS OUVERTES POUR 2025! 5% DE RÉDUCTION SUR LES COMMANDES JUSQU'AU 1ER AVRIL 2025! TÉLÉPHONE/TELEGRAM: +380 93 752 74 77 DÉPÊCHEZ-VOUS DE PROFITER DE CETTE OFFRE AVANTAGEUSE!" // fr  
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
        "M299", "M300", "M301", "M302", "M303", "M304", "M305", "M306", "M307", "M308", "M309", 
        "M310", "M311", "M312", "M313", "M314", "M315", "M316", "M317", "M318", "M319", 
        "M320", "M321", "M322", "M323", "M324", "M325", "M326", "M327", "M328", "M329", 
        "M330", "M331", "M332", "M333", "M334", "M335", "M336", "M337", "M338", "M339", 
        "M340", "M341", "M342", "M343", "M344", "M345", "M346", "M347", "M348", "M349", 
        "M350", "M351", "M352", "M353", "M354", "M355", "M356", "M357", "M358", "M359", 
        "M360", "M361", "M362", "M363", "M364", "M365", "M366", "M367", "M368", "M369", 
        "M370", "M371", "M372", "M373", "M374", "M375", "M376", "M377", "M378", "M379", 
        "M380", "M381", "M382", "M383", "M384", "M385", "M386", "M387", "M388", "M389", 
        "M390", "M391", "M392", "M393", "M394", "M395", "M396", "M397", "M398", "M399", 
        "M400", "M401", "M402", "M403", "M404", "M405", "M406", "M407", "M408", "M409",
        "M410", "M411", "M412", "M413", "M414", "M415", "M416", "M417", "M418", "M419",
        "M420", "M421", "M422", "M423", "M424", "M425", "M426", "M427", "M428", "M429",
        "M430", "M431", "M432", "M433", "M434", "M435", "M436", "M437", "M438", "M439",
        "M440", "M441", "M442", "M443", "M444", "M445", "M446", "M447", "M448", "M449"];

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




