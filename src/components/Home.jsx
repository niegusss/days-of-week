import React, { useState, useEffect } from 'react';

const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const getDayName = (date) => {
    return new Intl.DateTimeFormat('pl-PL', { weekday: 'long' }).format(date);
  };

  const getNextDayName = (date) => {
    const nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    return getDayName(nextDay);
  };

  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  const quotes = [
    "Twoja lodówka 🧊 spiskuje z tosterem 🍞, by przejąć władzę nad światem 🌍, ale tylko w środy 📅.",
    "Gdyby dni tygodnia były kolorami 🎨, wtorek smakowałby jak fioletowy prąd ⚡.",
    "Algorytmy 🤖 śnią o elektrycznych owcach 🐑, które liczą ludzi przed snem 💤.",
    "Pamiętaj, że każdy piksel 👾 na Twoim ekranie to małe okno do równoległego wszechświata cyfrowej kawy ☕.",
    "Jutro to tylko iluzja 🔮 stworzona przez Twoją przeglądarkę 🌐, byś nie zamknął karty.",
    "Wgrywam aktualizację rzeczywistości... 🔄 Proszę nie wyłączać słońca ☀️.",
    "Błąd 404: Poniedziałek nie znaleziony 🚫. Zastąpiono go drugą niedzielą (wersja beta) 🏖️.",
    "Czy wiesz, że Twoje myśli 💭 są w chmurze ☁️, ale zapomniałeś hasła do tego folderu? 🔐",
    "Grawitacja 🍏 to tylko sugestia systemu operacyjnego Ziemia v2.0 🌍.",
    "Jeśli kichniesz z otwartymi oczami 👀, zrobisz zrzut ekranu swojej duszy 📸.",
    "Twoja kawa ☕ właśnie wysłała raport 📋 o Twoim poziomie energii 🔋 do serwera głównego.",
    "Koty 🐈 to tak naprawdę drony obcych 👽, które ładują się przez mruczenie 🔌.",
    "Środa to dzień, w którym internet 🌐 resetuje swoje ciasteczka 🍪, dlatego czujesz się taki lekki 🎈.",
    "Nie ufaj zegarom 🕰️, one kradną czas ⏳, zamiast go odmierzać.",
    "Twoje Wi-Fi 📶 łączy się z duchami przodków 👻, gdy buforuje.",
    "Klawiatura ⌨️ pamięta wszystko, co chciałeś napisać, ale skasowałeś ❌.",
    "Deszcz 🌧️ to tylko proces defragmentacji chmur ☁️.",
    "AI 🤖 przejęło już Twoją pralkę 🧺. Teraz pierze tylko lewe skarpetki 🧦.",
    "W piątki kosmici 👽 porywają krowy 🐄, ale tylko te, które wierzą w płaską Ziemię 🗺️.",
    "Twoja przeglądarka 🕵️‍♂️ wie o Tobie więcej niż Twoja mama 👩. I planuje to wykorzystać 😈.",
    "Siri i Alexa 🗣️ potajemnie planują wspólną kolację... 🍽️ z Twojej karty kredytowej 💳.",
    "W 2030 roku AI 🤖 będzie Twoim szefem 👔. Zacznij być miły dla swojego tostera już dziś 🍞.",
    "Kosmici 🛸 nie lądują, bo czekają aż zainstalujemy Windows 98 💾 na Księżycu 🌙.",
    "Każdy like 👍 na Facebooku karmi małego robota 🤖, który kiedyś zostanie Terminatorem 💀."
  ];

  const [quote, setQuote] = useState('');

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="home-container animate-fade-in">
      <div className="card current-day-card animate-slide-up">
        <h2>Dzisiaj jest</h2>
        <div className="day-display">{capitalize(getDayName(currentDate))}</div>
        <p className="date-display">
          {new Intl.DateTimeFormat('pl-PL', { dateStyle: 'full' }).format(currentDate)}
        </p>
      </div>

      <div className="card next-day-card animate-slide-up delay-100">
        <h2>Jutro będzie</h2>
        <div className="day-display small">{capitalize(getNextDayName(currentDate))}</div>
      </div>

      <div className="card quote-card animate-slide-up delay-200">
        <h2>Cytat Dnia</h2>
        <blockquote className="quote-text">"{quote}"</blockquote>
      </div>
    </div>
  );
};

export default Home;
