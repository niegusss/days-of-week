import React, { useState } from 'react';
import DayDetail from './DayDetail';

const Learning = () => {
    const [selectedDay, setSelectedDay] = useState(null);

    const daysOfWeek = [
        {
            name: 'Poniedziałek',
            description: 'Pierwszy dzień tygodnia. Czas wrócić do szkoły lub pracy!',
            color: 'from-blue-400 to-blue-600',
            etymology: 'Nazwa pochodzi od zwrotu "po niedzieli". W tradycji chrześcijańskiej niedziela była dniem odpoczynku, a poniedziałek następuje bezpośrednio po niej.',
            trivia: [
                'Patronem poniedziałku jest Księżyc.',
                'Osoby urodzone w poniedziałek są uważane za wrażliwe i empatyczne.',
                'W wielu kulturach poniedziałek jest dniem rozpoczynającym tydzień pracy.'
            ],
            famousPeople: [
                { name: 'Angelina Jolie', role: 'Aktorka' },
                { name: 'Leonardo da Vinci', role: 'Artysta i wynalazca' },
                { name: 'Bill Clinton', role: 'Polityk' }
            ]
        },
        {
            name: 'Wtorek',
            description: 'Drugi dzień tygodnia. Rozkręcamy się!',
            color: 'from-indigo-400 to-indigo-600',
            etymology: 'Nazwa pochodzi od staropolskiego słowa "wtóry", co oznacza "drugi". Jest to więc drugi dzień tygodnia po niedzieli.',
            trivia: [
                'Patronem wtorku jest Mars, rzymski bóg wojny.',
                'Osoby urodzone we wtorek są uważane za energiczne i waleczne.',
                'W języku angielskim (Tuesday) nazwa pochodzi od nordyckiego boga Tyra.'
            ],
            famousPeople: [
                { name: 'Rihanna', role: 'Piosenkarka' },
                { name: 'Cristiano Ronaldo', role: 'Piłkarz' },
                { name: 'Keanu Reeves', role: 'Aktor' }
            ]
        },
        {
            name: 'Środa',
            description: 'Trzeci dzień tygodnia. Połowa za nami!',
            color: 'from-purple-400 to-purple-600',
            etymology: 'Nazwa pochodzi od słowa "środek". Wskazuje na to, że środa jest środkowym dniem tygodnia (licząc od niedzieli do soboty).',
            trivia: [
                'Patronem środy jest Merkury, posłaniec bogów.',
                'Osoby urodzone w środę są uważane za inteligentne i komunikatywne.',
                'W kulturze ludowej środa była często dniem targowym.'
            ],
            famousPeople: [
                { name: 'Mikołaj Kopernik', role: 'Astronom' },
                { name: 'William Shakespeare', role: 'Pisarz' },
                { name: 'Pablo Picasso', role: 'Malarz' }
            ]
        },
        {
            name: 'Czwartek',
            description: 'Czwarty dzień tygodnia. Weekend już blisko.',
            color: 'from-pink-400 to-pink-600',
            etymology: 'Nazwa pochodzi od liczebnika "czwarty". Jest to czwarty dzień tygodnia po niedzieli.',
            trivia: [
                'Patronem czwartku jest Jowisz, król bogów.',
                'Osoby urodzone w czwartek są uważane za optymistyczne i szczęśliwe.',
                'Tłusty Czwartek to znane święto ruchome w Polsce.'
            ],
            famousPeople: [
                { name: 'David Letterman', role: 'Prezenter TV' },
                { name: 'Chris Hemsworth', role: 'Aktor' },
                { name: 'M. Night Shyamalan', role: 'Reżyser' }
            ]
        },
        {
            name: 'Piątek',
            description: 'Piąty dzień tygodnia. Początek weekendu!',
            color: 'from-rose-400 to-rose-600',
            etymology: 'Nazwa pochodzi od liczebnika "piąty". Jest to piąty dzień tygodnia po niedzieli.',
            trivia: [
                'Patronem piątku jest Wenus, bogini miłości.',
                'Osoby urodzone w piątek są uważane za romantyczne i wrażliwe na piękno.',
                'Piątek 13-go jest w wielu kulturach uważany za dzień pechowy.'
            ],
            famousPeople: [
                { name: 'Alfred Hitchcock', role: 'Reżyser' },
                { name: 'Steve Jobs', role: 'Współzałożyciel Apple' },
                { name: 'Katy Perry', role: 'Piosenkarka' }
            ]
        },
        {
            name: 'Sobota',
            description: 'Szósty dzień tygodnia. Czas na odpoczynek i zabawę.',
            color: 'from-orange-400 to-orange-600',
            etymology: 'Nazwa pochodzi od szabatu (hebr. szabat), dnia odpoczynku w judaizmie.',
            trivia: [
                'Patronem soboty jest Saturn.',
                'Osoby urodzone w sobotę są uważane za odpowiedzialne i pracowite.',
                'W Polsce sobota jest tradycyjnie dniem sprzątania i przygotowań do niedzieli.'
            ],
            famousPeople: [
                { name: 'Karen Gillan', role: 'Aktorka' },
                { name: 'Paul Shaffer', role: 'Muzyk' },
                { name: 'Taylor Swift', role: 'Piosenkarka' }
            ]
        },
        {
            name: 'Niedziela',
            description: 'Siódmy dzień tygodnia. Dzień dla rodziny i relaksu.',
            color: 'from-yellow-400 to-yellow-600',
            etymology: 'Nazwa pochodzi od słów "nie działać" (nie pracować). Jest to dzień świąteczny i wolny od pracy.',
            trivia: [
                'Patronem niedzieli jest Słońce.',
                'Osoby urodzone w niedzielę są uważane za szczęściarzy i optymistów.',
                'W większości krajów chrześcijańskich jest to dzień święty.'
            ],
            famousPeople: [
                { name: 'Barack Obama', role: 'Polityk' },
                { name: 'Dwayne Johnson', role: 'Aktor' },
                { name: 'Meryl Streep', role: 'Aktorka' }
            ]
        },
    ];

    if (selectedDay) {
        return <DayDetail day={selectedDay} onBack={() => setSelectedDay(null)} />;
    }

    return (
        <div className="learning-container">
            <h2 className="section-title">Poznaj Dni Tygodnia</h2>
            <div className="days-grid">
                {daysOfWeek.map((day, index) => (
                    <div
                        key={index}
                        className="day-card clickable"
                        style={{ '--day-index': index }}
                        onClick={() => setSelectedDay(day)}
                    >
                        <div className="day-number">{index + 1}</div>
                        <h3 className="day-name">{day.name}</h3>
                        <p className="day-description">{day.description}</p>
                        <div className="click-hint">Kliknij, aby dowiedzieć się więcej</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Learning;
