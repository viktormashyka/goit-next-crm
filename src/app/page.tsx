import ActiveLabel from './components/active-label';
import NotActiveLabel from './components/not-active-label';

export default function Home() {
  return (
    <div>
      <main>
        <h1>Home page</h1>
        <ActiveLabel>Active</ActiveLabel>
        <NotActiveLabel>Not Active</NotActiveLabel>
      </main>
    </div>
  );
}
