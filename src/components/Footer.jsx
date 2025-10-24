import { PawPrint } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-orange-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-600 text-white">
              <PawPrint className="h-5 w-5" />
            </div>
            <div>
              <p className="font-extrabold tracking-tight">Pawsome Bites</p>
              <p className="text-xs text-neutral-600">Wholesome snacks for happy pets</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
            <a href="#products" className="text-neutral-700 hover:text-orange-700">Shop</a>
            <a href="#benefits" className="text-neutral-700 hover:text-orange-700">Benefits</a>
            <a href="#faq" className="text-neutral-700 hover:text-orange-700">FAQ</a>
            <a href="#" className="text-neutral-700 hover:text-orange-700">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} Pawsome Bites. All rights reserved.</div>
      </div>
    </footer>
  );
}
