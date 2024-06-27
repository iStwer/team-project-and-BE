import profile1 from '../../assets/about-us/profile1.png';
import profile2 from '../../assets/about-us/profile2.png';
import profile3 from '../../assets/about-us/profile3.png';
import profile4 from '../../assets/about-us/profile4.png';

interface Employees {
  id: number;
  name: string;
  specialization: string;
  education: string;
  freeTime: string;
  others: string;
  src: string;
  alt: string;
}

export const employees: Employees[] = [
  {
    id: 1,
    name: 'Mgr. Jan Novák',
    specialization: 'Manuální terapie a sportovní fyzioterapie',
    education: 'Magisterské studium fyzioterapie na Univerzitě Karlově',
    freeTime:
      'Jan je vášnivý horolezec a miluje turistiku. Ve volném čase také rád hraje na kytaru a věnuje se fotografování přírody.',
    others:
      'Jan má více než 15 let zkušeností v oboru fyzioterapie a je odborníkem na manuální techniky a rehabilitaci sportovců.',
    src: profile1,
    alt: 'Jan Novák profile picture',
  },
  {
    id: 2,
    name: 'Bc. Petra Svobodová',
    specialization: 'Rehabilitace po operacích a úrazech',
    education: 'Bakalářské studium fyzioterapie na Masarykově univerzitě',
    freeTime:
      'Petra je nadšená běžkyně a pravidelně se účastní maratonů. Ráda také čte detektivky a tráví čas se svou rodinou na chalupě.',
    others:
      'Petra se zaměřuje na komplexní rehabilitaci a pomáhá pacientům vrátit se k normálnímu životu po úrazech a chirurgických zákrocích.',
    src: profile2,
    alt: 'Petra Svobodová profile picture',
  },
  {
    id: 3,
    name: 'Mgr. Karel Dvořák',
    specialization: 'Terapeutické cvičení a posilování',
    education:
      'Magisterské studium fyzioterapie na Univerzitě Palackého v Olomouci',
    freeTime:
      'Karel je zapálený cyklista a často jezdí na dlouhé vyjížďky po celé České republice. Ve volném čase také rád vaří a experimentuje s novými recepty.',
    others:
      'Karel je odborníkem na sestavování individuálních cvičebních plánů zaměřených na zlepšení síly, flexibility a stability.',
    src: profile3,
    alt: 'Karel Dvořák profile picture',
  },
  {
    id: 4,
    name: 'Bc. Eva Novotná',
    specialization: 'Elektroterapie a ultrazvuk',
    education:
      'Bakalářské studium fyzioterapie na Západočeské univerzitě v Plzni',
    freeTime:
      'Eva miluje jógu a pravidelně navštěvuje různé workshopy. Kromě toho ráda cestuje a objevuje nové kultury a kuchyně.',
    others:
      'Eva využívá moderní technologie k úlevě od bolesti a urychlení hojení. Má bohaté zkušenosti s léčbou zánětlivých stavů a svalových spasmů.',
    src: profile4,
    alt: 'Eva Novotná profile picture',
  },
];
