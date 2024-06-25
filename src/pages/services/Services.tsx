import { Container } from 'react-bootstrap';
import ServiceCard from './ServiceCard';

export const Services = () => {
  return (
    <Container>
       <h1>Naše služby</h1>
            <p>
            Jsme tady proto, abychom vám pomohli dosáhnout optimální pohyblivosti a pohodlí ve vašem životě. Nabízíme širokou škálu specializovaných služeb, které jsou navrženy tak, aby vyhověly individuálním potřebám každého klienta. 
            </p>

            <div className="service-list">
                <ServiceCard
                    title="Individuální fyzioterapeutické plány"
                    description="Plánovaní a vedení individuálních fyzioterapeutických programů přizpůsobených potřebám každého klienta."
                />
                <ServiceCard
                    title="Manuální terapie a mobilizace"
                    description="Manuální terapie a mobilizace kloubů a svalů k zajištění optimální pohyblivosti a bolesti."
                />
                <ServiceCard
                    title="Terapeutické cvičení a posilování"
                    description="Cvičení zaměřená na zlepšení síly, flexibility a stability. Tento typ terapie je ideální pro pacienty s chronickými bolestmi, po úrazech nebo pro sportovce hledající prevenci zranění. Sezení obvykle trvají 45–60 minut."
                />
                <ServiceCard
                    title="Elektroterapie a ultrazvuk"
                    description="Použití elektrostimulace a ultrazvuku k léčbě bolesti a urychlení hojení tkání. Tato terapie je vhodná pro zánětlivé stavy, svalové spasmy nebo bolesti kloubů. Ošetření trvá 20–30 minut."
                />
                <ServiceCard
                    title="Sportovní fyzioterapie"
                    description="Specificky zaměřená na sportovce a aktivní jedince, kteří potřebují prevenci zranění nebo rehabilitaci po sportovních úrazech. Tato terapie zahrnuje kombinaci manuálních technik, cvičení a poradenství. Délka sezení je 45–60 minut."
                />
                <ServiceCard
                    title="Rehabilitace po operacích a úrazech"
                    description="Komplexní rehabilitační plány navržené pro obnovu pohyblivosti a síly po chirurgických zákrocích nebo závažných úrazech. Tato terapie zahrnuje řadu technik od manuální terapie po cvičení a trvá 60–90 minut."
                />
                <ServiceCard
                    title="Prevence a poradenství"
                    description="Konzultace zaměřené na prevenci zranění a zlepšení celkového zdravotního stavu prostřednictvím správné pohybové techniky a ergonomických rad. Tato služba je ideální pro všechny věkové kategorie. Sezení obvykle trvají 30–45 minut."
                />
            </div>
    </Container>
  );
};

