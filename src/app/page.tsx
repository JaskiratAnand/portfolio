import Introduction from '@/components/Introduction';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div className="max-w-screen-md mx-auto p-2">
      <Introduction />
      <Projects />
    </div>
  );
}
