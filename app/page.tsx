import { DSUDashboard } from './dashboard';
//import './globals.css';

const shuffle = <T,>(array: T[]): T[] => [...array].sort(() => Math.random() - 0.5);

export default function Home() {
  const members = shuffle([
    { id: 1, name: 'Ivan', activated: false },
    { id: 2, name: 'Yember', activated: false },
    { id: 3, name: 'Camilo', activated: false },
    { id: 4, name: 'Leandro', activated: false },
    { id: 5, name: 'Andrés', activated: false },
    { id: 6, name: 'Alex', activated: false },
    { id: 7, name: 'Gloria', activated: false },
    { id: 9, name: 'Mike', activated: false },
    { id: 10, name: 'Bernardo', activated: false },
    { id: 11, name: 'Juan', activated: false },
  ]);

  return <DSUDashboard members={members} />;
}
