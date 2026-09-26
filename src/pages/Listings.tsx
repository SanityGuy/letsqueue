import { useMemo, useState } from "react";
import Navbar from '../components/listings/Navbar'

type Listing = {
    name: string;
    description: string;
    category: string;
    distance: number;
    originalPrice: number;
    price: number;
    image: string;
    calories?: number;
    tag: string;
};

const listings: Listing[] = [
    { name: "Roasted veggie grain bowl", description: "Farro, seasonal vegetables, herby tahini and toasted seeds.", category: "Lunch · Bowl", distance: 0.4, originalPrice: 14, price: 8.5, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85", calories: 520, tag: "Plant-based" },
    { name: "Sourdough breakfast stack", description: "House sourdough with smashed avocado and a little chili oil.", category: "Breakfast · Toast", distance: 0.8, originalPrice: 12, price: 7, image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85", calories: 460, tag: "Bestseller" },
    { name: "Miso-glazed salmon plate", description: "Flaky salmon, sesame rice, crisp greens and ginger dressing.", category: "Lunch · Plate", distance: 1.2, originalPrice: 18, price: 11, image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=85", calories: 610, tag: "Fresh today" },
    { name: "Wild mushroom focaccia", description: "Pillowy rosemary focaccia with mushrooms and whipped ricotta.", category: "Bakery · Savory", distance: 0.6, originalPrice: 10, price: 5.5, image: "https://images.unsplash.com/photo-1608198093002-ad4e005484df?auto=format&fit=crop&w=900&q=85", tag: "Vegetarian" },
    { name: "Citrus & burrata salad", description: "Creamy burrata, sweet citrus, peppery leaves and pistachio.", category: "Lunch · Salad", distance: 1.6, originalPrice: 16, price: 9, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85", calories: 390, tag: "Seasonal" },
    { name: "Dark chocolate oat cookie", description: "A chewy, generously sized cookie with dark chocolate chunks.", category: "Bakery · Treat", distance: 0.3, originalPrice: 5, price: 2.5, image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=85", tag: "Sweet treat" },
];

type SortKey = "recommended" | "price" | "name" | "distance";
const money = (amount: number) => `$${amount.toFixed(2).replace(/\.00$/, "")}`;

export default function Listings() {
    const [sortBy, setSortBy] = useState<SortKey>("recommended");
    const sortedListings = useMemo(() => {
        const result = [...listings];
        if (sortBy === "price") result.sort((a, b) => a.price - b.price);
        if (sortBy === "name") result.sort((a, b) => a.name.localeCompare(b.name));
        if (sortBy === "distance") result.sort((a, b) => a.distance - b.distance);
        return result;
    }, [sortBy]);

    return (
        <>
        <Navbar />
        <main className="min-h-screen bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">
            <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
                <section className="relative overflow-hidden rounded-3xl bg-brand-primary px-7 py-10 text-white shadow-xl sm:px-12 sm:py-14">
                    <div className="pointer-events-none absolute -right-12 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10" />
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">Good food, less waste</p>
                    <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">A little less waiting.<br />A lot more delicious.</h1>
                    <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">Discover nearby meals from local favorites, rescued for a lovely price. Fresh finds, ready when you are.</p>
                    <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium">
                        <span className="rounded-full bg-white/15 px-4 py-2">📍 Downtown & nearby</span>
                        <span className="rounded-full bg-white/15 px-4 py-2">♻️ Better bites, less waste</span>
                    </div>
                </section>

                <section className="mt-12" aria-labelledby="listings-heading">
                    <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                        <div>
                            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-primary">Made for right now</p>
                            <h2 id="listings-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">Today's good finds</h2>
                            <p className="mt-2 max-w-xl text-light-text/70 dark:text-dark-text/70">Great food from the neighborhood, at prices worth leaving the house for.</p>
                        </div>
                        <label className="flex items-center gap-3 text-sm font-medium">
                            <span>Sort by</span>
                            <select value={sortBy} onChange={(event) => setSortBy(event.target.value as SortKey)} className="rounded-xl border border-black/10 bg-white px-4 py-3 text-light-text shadow-sm outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 dark:border-white/10 dark:bg-dark-bg dark:text-dark-text">
                                <option value="recommended">Recommended</option>
                                <option value="price">Price: lowest first</option>
                                <option value="name">Name: A–Z</option>
                                <option value="distance">Distance: nearest</option>
                            </select>
                        </label>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {sortedListings.map((listing) => {
                            const discount = Math.round((1 - listing.price / listing.originalPrice) * 100);
                            return (
                                <article key={listing.name} className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5">
                                    <div className="relative h-52 overflow-hidden">
                                        <img src={listing.image} alt={listing.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                                        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-light-text shadow-sm">{listing.tag}</span>
                                        <span className="absolute right-4 top-4 rounded-full bg-brand-primary px-3 py-1.5 text-xs font-bold text-white">−{discount}%</span>
                                    </div>
                                    <div className="p-5">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-brand-primary">{listing.category}</p>
                                        <h3 className="mt-1 text-xl font-bold leading-snug">{listing.name}</h3>
                                        <p className="mt-2 min-h-[3rem] text-sm leading-6 text-light-text/70 dark:text-dark-text/70">{listing.description}</p>
                                        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-light-text/60 dark:text-dark-text/60">
                                            <span>📍 {listing.distance.toFixed(1)} mi away</span>
                                            {listing.calories && <span>{listing.calories} kcal</span>}
                                        </div>
                                        <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4 dark:border-white/10">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-2xl font-bold text-brand-primary">{money(listing.price)}</span>
                                                <span className="text-sm text-light-text/45 line-through dark:text-dark-text/45">{money(listing.originalPrice)}</span>
                                            </div>
                                            <button type="button" className="rounded-xl bg-brand-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2">View meal</button>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>
            </div>
        </main>
        </>
    );
}   