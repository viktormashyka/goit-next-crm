'use client';

import { useRouter } from 'next/navigation';
import { useTheme } from './providers/theme-provider';
import Button from './components/button';

export default function Home() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <main>
        <h1 className="text-xl">Home page</h1>
        <Button
          onClick={() => {
            router.push('./dashboard');
          }}
        >
          Navigate to Dashboard
        </Button>
        <div className="flex flex-row gap-2 mt-2">
          <Button onClick={toggleTheme}>Change theme</Button>
          <h2 className="text-xl">{theme}</h2>
        </div>
      </main>
    </div>
  );
}
