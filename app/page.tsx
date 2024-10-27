'use client'
import { useTheme } from './components/themeProvider';

export default function Home ()
{
  const { theme } = useTheme();
  return (
    <div className={`${theme === 'light' ? 'bg-blue-500 text-cyan-900' : 'bg-gray-800 text-white'}`}>
      {process.env.nextVideoToken}
    </div>
  );
}
