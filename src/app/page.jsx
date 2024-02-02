"use client"

// pages/index.js
import { useState, useEffect } from 'react';
import { formatDistanceToNowStrict, parse } from 'date-fns';
import Image from 'next/image';
import logo from "../../public/logo.png";
import Timeline from './components/Timeline';

const WeddingCountdown = () => {
  const weddingDate = parse('2024-06-29', 'yyyy-MM-dd', new Date());
  const [timeRemaining, setTimeRemaining] = useState(formatDistanceToNowStrict(weddingDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date1 = new Date();
      const date2 = new Date('2024-07-13');
      const diffTime = Math.abs(date2 - date1);
      const remaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      setTimeRemaining(diffTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [new Date()]);

  return (
    <div>
      <h1>Contagem Regressiva para o Casamento</h1>
      <p>Em:</p>
      <p>... {timeRemaining} ms</p>
      <p>............... {parseInt( timeRemaining/1000)} segundos</p>
      <p>.............................. {parseInt( timeRemaining/(1000*60))} minutos</p>
      <p>............................................. {parseInt( timeRemaining/(1000*60*60))} horas</p>
      <p>............................................................... {parseInt( timeRemaining/(1000*60*60*24))} dias</p>
      <p>.................................................................................... {parseInt( timeRemaining/(1000*60*60*24*30))} meses e {parseInt((timeRemaining/(1000*60*60*24*30) - parseInt( timeRemaining/(1000*60*60*24*30)))*30)} dias</p>
    </div>
  );
};

const WeddingDate = () => {
  return (
    <div className="wedding-date">
      <h2>Data do Casamento Profético</h2>
      <p>O casamento de Paulo e Quezia será realizado em 16 de julho de 2024.</p>
    </div>
  )
}

const BibleVerses = () => {
  return (
    <div>
      <h2>Versículos Bíblicos</h2>
      <p>&quot;Portanto, o que Deus uniu, ninguém o separe.&quot; - Marcos 10:9</p>
      <p>&quot;O amor é paciente, o amor é bondoso.&quot; - 1 Coríntios 13:4</p>
      {/* Adicione mais versículos bíblicos conforme necessário */}
    </div>
  );
};

const WeddingMessages = () => {
  return (
    <div>
      <h2>Mensagens de Padrinhos</h2>

      <div className="message">
        <h3>Caio</h3>
        <p>Queridos Paulo e Quezia,</p>
        <p>É uma honra ser escolhido como padrinho para o casamento de vocês. Estou emocionado por fazer parte desse momento tão especial em suas vidas.</p>
        <p>Que a jornada que vocês estão prestes a embarcar seja repleta de amor, compreensão e momentos inesquecíveis. Estou ansioso para testemunhar a união de duas almas tão incríveis.</p>
        <p>Que Deus abençoe ricamente o casamento de vocês e os guie em cada passo do caminho.</p>
        <p>Com carinho,<br />Caio</p>
      </div>

      <div className="message">
        <h3>Lara</h3>
        <p>Queridos Paulo e Quezia,</p>
        <p>Estou radiante por ser escolhida como madrinha em um momento tão especial e significativo em suas vidas. Ver o amor de vocês crescer e se transformar em uma jornada matrimonial é verdadeiramente inspirador.</p>
        <p>Vocês formam um casal incrível, e tenho certeza de que a vida a dois será cheia de alegrias, desafios superados juntos e momentos de profundo carinho.</p>
        <p>Que Deus ilumine o caminho de vocês e que o casamento seja um reflexo constante do amor divino. Estou ansiosa para celebrar esse dia extraordinário ao lado de vocês.</p>
        <p>Com amor,<br />Lara</p>
      </div>
    </div>
  );
};


export default function Home() {
  const weddingDate = parse('2024-07-16', 'yyyy-MM-dd', new Date());
  const timeRemaining = formatDistanceToNowStrict(weddingDate);

  return (
    <div>
      <header>
        <Image src={logo} heigth={150} width={150} alt="logo"></Image>
        <h1>
          <span style={{"color": "#e74c3c"}}>P</span>aulo 
          & <span style={{"color": "#d81865"}}>Q</span>uezia
        </h1>
      </header>
      <main>

        <WeddingDate />
        <WeddingCountdown />
        <BibleVerses />
        <WeddingMessages />
        <Timeline />
     
      </main>
      <footer>
        <p>&copy; 2024 BeMarried</p>
      </footer>
    </div>
  );
}