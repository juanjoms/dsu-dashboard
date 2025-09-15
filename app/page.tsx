import { randomUUID } from 'crypto';
import { DSUDashboard } from './components/dashboard';

const shuffle = <T,>(array: T[]): T[] => [...array].sort(() => Math.random() - 0.5);
const member = (name: string): Member => ({
  name,
  id: randomUUID(),
  active: false,
  match: '',
  rest: name,
});

export default function Home() {
  const members: Member[] = shuffle([
    member('Ivan'),
    member('Yember'),
    member('Camilo'),
    member('Leandro'),
    member('Andrés'),
    member('Alex'),
    member('Gloria'),
    member('Mike'),
    member('Bernardo'),
    member('Juanjo'),
    member('Victor'),
  ]);

  return <DSUDashboard members={members} />;
}
