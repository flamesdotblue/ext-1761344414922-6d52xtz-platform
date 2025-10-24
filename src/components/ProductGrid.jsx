import { Leaf, Truck, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Chicken Crunch Bites',
    desc: 'High-protein, oven-baked bites made with free-range chicken.',
    price: 16.99,
    rating: 5,
    tag: 'Best Seller',
    img: 'https://images.unsplash.com/photo-1558944351-c0f0e0e8e408?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Peanut Butter Chews',
    desc: 'Creamy peanut butter flavor with a chewy, satisfying texture.',
    price: 14.5,
    rating: 4,
    tag: 'Grain-Free',
    img: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Salmon Softies',
    desc: 'Omega-rich soft treats perfect for training and skin health.',
    price: 18.0,
    rating: 5,
    tag: 'New',
    img: 'https://images.unsplash.com/photo-1583338917451-face2751d111?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Pumpkin Dental Sticks',
    desc: 'Naturally helps clean teeth while supporting digestion.',
    price: 15.75,
    rating: 4,
    tag: 'Vet-Approved',
    img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800&auto=format&fit=crop',
  },
];

function Stars({ count }) {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'}`}
        />
      ))}
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section id="products" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div id="benefits" className="grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-2xl bg-white p-6 shadow-sm border border-orange-100">
          <div className="flex items-center gap-3">
            <Leaf className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-semibold">All-natural</p>
              <p className="text-sm text-neutral-600">No fillers, colors, or artificial flavors</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="h-6 w-6 text-orange-600" />
            <div>
              <p className="font-semibold">Fast shipping</p>
              <p className="text-sm text-neutral-600">Free on orders over $35</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Stars count={5} />
            <div>
              <p className="font-semibold">Loved by pets</p>
              <p className="text-sm text-neutral-600">10k+ five-star ratings</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Shop our snacks</h2>
            <p className="text-neutral-600 mt-1">Wholesome treats crafted for wagging tails and happy purrs.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm font-semibold text-orange-700 hover:text-orange-800">See all products →</a>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group rounded-2xl bg-white border border-orange-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src={p.img} alt={p.name} className="h-44 w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-orange-600 px-2.5 py-1 text-xs font-bold text-white shadow">
                  {p.tag}
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold tracking-tight text-neutral-900 group-hover:text-orange-700">{p.name}</h3>
                  <div className="text-right">
                    <p className="text-sm text-neutral-500">from</p>
                    <p className="font-extrabold">${p.price.toFixed(2)}</p>
                  </div>
                </div>
                <p className="mt-1 text-sm text-neutral-600 line-clamp-2">{p.desc}</p>
                <div className="mt-3 flex items-center justify-between">
                  <Stars count={p.rating} />
                  <button className="inline-flex items-center rounded-full bg-neutral-900 px-3 py-1.5 text-xs font-bold text-white hover:bg-neutral-800">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="faq" className="mt-14 rounded-2xl bg-amber-50 border border-amber-100 p-6 sm:p-8">
          <h3 className="text-xl font-extrabold">Questions, answered</h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="font-semibold">Are these treats safe for puppies/kittens?</p>
              <p className="text-sm text-neutral-700 mt-1">Yes. Our snacks are formulated for all life stages. For very young or small pets, break treats into smaller pieces and supervise chewing.</p>
            </div>
            <div>
              <p className="font-semibold">Do you use any artificial flavors or fillers?</p>
              <p className="text-sm text-neutral-700 mt-1">Never. We use simple, human-grade ingredients you can pronounce, gently baked for maximum wag.</p>
            </div>
            <div>
              <p className="font-semibold">What is your shipping policy?</p>
              <p className="text-sm text-neutral-700 mt-1">Orders over $35 ship free in the contiguous U.S. Most deliveries arrive in 2–4 business days.</p>
            </div>
            <div>
              <p className="font-semibold">Do you offer returns?</p>
              <p className="text-sm text-neutral-700 mt-1">We have a 30-day happiness guarantee. If your pet isn’t obsessed, we’ll make it right.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
