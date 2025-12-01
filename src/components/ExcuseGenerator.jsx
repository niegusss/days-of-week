import React, { useState } from 'react';

const ExcuseGenerator = () => {
    const [excuse, setExcuse] = useState('');
    const [category, setCategory] = useState('work');
    const [copied, setCopied] = useState(false);

    const excuses = {
        work: [
            "Moje Wi-Fi kłóci się z mikrofalówką sąsiada.",
            "Mój kot zasnął na klawiaturze i nie mogę go obudzić, bo wygląda zbyt słodko.",
            "Musiałem pomóc AI zrozumieć sens życia, to zajęło całe rano.",
            "Mój budzik przeszedł na czas marsjański.",
            "Zgubiłem się w Google Maps, szukając skrótu do piątku.",
            "Moja kawa potrzebowała kawy, żeby się obudzić.",
            "Aktualizacja Windowsa utknęła na 99% i trzyma mnie jako zakładnika.",
            "Mój pies zjadł mój kabel od internetu (cyfrowo).",
            "Grawitacja w moim łóżku była dziś rano wyjątkowo silna.",
            "Musiałem negocjować z drukarką, żeby oddała mi kartkę."
        ],
        school: [
            "Mój pies zjadł moją pracę domową... z chmury.",
            "Zapomniałem hasła do mózgu.",
            "Długopis mi się wyczerpał, a nie miałem ładowarki.",
            "Myślałem, że dziś jest sobota.",
            "Kosmici porwali mój plecak.",
            "Moja praca domowa dokonała samozniszczenia po przeczytaniu.",
            "Zostałem zaatakowany przez dzikie podręczniki.",
            "Mój autobus odjechał do innego wymiaru."
        ],
        social: [
            "Mój introwertyzm właśnie osiągnął poziom krytyczny.",
            "Muszę podlać rybki.",
            "Mój horoskop zabronił mi wychodzić z domu.",
            "Netflix wypuścił nowy sezon, to siła wyższa.",
            "Moja kanapa mnie przytula i nie chce puścić.",
            "Jestem zajęty planowaniem przejęcia świata (przez sen).",
            "Moja aura jest dziś w remoncie."
        ],
        remote_it: [
            "Mój VPN łączy się przez Narnię 🦁.",
            "Kontenery Dockera wyciekają mi na dywan 🐳.",
            "Kompiluję kawę, to potrwa jeszcze godzinę ☕.",
            "Moja klawiatura aktualizuje firmware ⌨️.",
            "Powiadomienia ze Slacka zablokowały mi czakry 🧘‍♂️.",
            "Muszę zdefragmentować rozmycie tła w Teamsach 🌫️.",
            "Mój drugi monitor mnie ghostuje 👻.",
            "Mam konflikt scalania (merge conflict) w mózgu 🧠.",
            "Czekam aż `npm install` skończy pobierać internet 📦.",
            "Mój router ogłosił strajk generalny 📶.",
            "Muszę ręcznie przepisać 0 i 1 w pliku binarnym 👾.",
            "Mój firewall myśli, że jestem hakerem i mnie zablokował 🛡️.",
            "Próbuję wyjść z Vima od wczoraj 🆘.",
            "Moja myszka uciekła do sąsiada (bezprzewodowo) 🖱️.",
            "Stack Overflow nie działa, więc nie mogę pracować 🤷‍♂️.",
            "Czekam na builda, który trwa już 3 lata świetlne ⏳.",
            "Mój kod działa tylko na moim komputerze, a ja jestem w kuchni 🏠.",
            "Muszę nakarmić pytona (język programowania, nie wąż) 🐍."
        ]
    };

    const generateExcuse = () => {
        const list = excuses[category];
        const randomExcuse = list[Math.floor(Math.random() * list.length)];
        setExcuse(randomExcuse);
        setCopied(false);
    };

    const copyToClipboard = () => {
        if (!excuse) return;
        navigator.clipboard.writeText(excuse);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const sendToBoss = () => {
        alert("Wysłano do szefa! (Żartuję, nie zrobiliśmy tego... chyba 🤖)");
    };

    return (
        <div className="excuse-container animate-fade-in">
            <div className="card excuse-card animate-slide-up">
                <h2 className="section-title">Generator Wymówek 3000</h2>
                <p className="excuse-description">
                    Potrzebujesz szybkiej wymówki? AI Cię kryje!
                </p>

                <div className="category-selector">
                    <button
                        className={`category-btn ${category === 'work' ? 'active' : ''}`}
                        onClick={() => setCategory('work')}
                    >
                        Praca 💼
                    </button>
                    <button
                        className={`category-btn ${category === 'school' ? 'active' : ''}`}
                        onClick={() => setCategory('school')}
                    >
                        Szkoła 🎓
                    </button>
                    <button
                        className={`category-btn ${category === 'social' ? 'active' : ''}`}
                        onClick={() => setCategory('social')}
                    >
                        Życie 🏠
                    </button>
                    <button
                        className={`category-btn ${category === 'remote_it' ? 'active' : ''}`}
                        onClick={() => setCategory('remote_it')}
                    >
                        IT / Zdalna 💻
                    </button>
                </div>

                <button className="generate-btn" onClick={generateExcuse}>
                    Generuj Wymówkę 🎲
                </button>

                {excuse && (
                    <div className="excuse-result animate-slide-up">
                        <p>"{excuse}"</p>
                        <div className="excuse-actions">
                            <button className="action-btn copy-btn" onClick={copyToClipboard}>
                                {copied ? "Skopiowano! ✅" : "Kopiuj 📋"}
                            </button>
                            <button className="action-btn boss-btn" onClick={sendToBoss}>
                                Wyślij do Szefa 👔
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExcuseGenerator;
