import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16 sm:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-900 px-3 py-1 text-xs font-semibold mb-4">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" /> Top-rated pet treats
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Real Ingredients. Real Tail Wags.
            </h1>
            <p className="mt-4 text-lg text-neutral-700 max-w-xl">
              Nutritious, vet-approved snacks your pets will love — crafted with human-grade ingredients, no fillers, and zero junk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#products" className="inline-flex items-center rounded-full bg-orange-600 px-6 py-3 text-sm font-bold text-white shadow hover:bg-orange-700">Shop Bestsellers</a>
              <a href="#benefits" className="inline-flex items-center rounded-full border border-orange-200 px-6 py-3 text-sm font-bold text-orange-700 hover:bg-orange-50">See Benefits</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-neutral-600">
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=200&auto=format&fit=crop" alt="happy pet" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1541592553160-82008b127ccb?q=80&w=200&auto=format&fit=crop" alt="happy pet" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBldHxlbnwwfDB8fHwxNzYxMzQ0NDgzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="happy pet" />
              </div>
              <div>
                <span className="font-semibold text-neutral-900">10,000+ pets</span> can’t stop wagging
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-tr from-orange-200 to-amber-100 blur-2xl opacity-60" />
            <img
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1200&auto=format&fit=crop"
              alt="Dog enjoying treats"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
