import { PawPrint } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-orange-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white shadow-sm">
              <PawPrint className="h-5 w-5" />
            </div>
            <span className="font-extrabold text-lg tracking-tight">Pawsome Bites</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
            <a href="#products" className="hover:text-orange-600 transition-colors">Snacks</a>
            <a href="#benefits" className="hover:text-orange-600 transition-colors">Why Us</a>
            <a href="#faq" className="hover:text-orange-600 transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#products" className="hidden sm:inline-flex items-center rounded-full border border-orange-200 px-4 py-2 text-sm font-semibold text-orange-700 hover:bg-orange-50">Explore</a>
            <a href="#products" className="inline-flex items-center rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-orange-700">Shop now</a>
          </div>
        </div>
      </div>
    </header>
  );
}
