"use client";

import { AnimatedHeader } from "./components/AnimatedHeader";

export default function HomePage() {
  return (
    <>
      <AnimatedHeader className="bg-vegas-black text-white px-4 py-4 fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Las Vegas Good Times</h1>
          <nav className="space-x-6">
            <a href="/" className="hover:text-vegas-gold">Home</a>
            <a href="/category/nightlife" className="hover:text-vegas-gold">Nightlife</a>
            <a href="/contact" className="hover:text-vegas-gold">Contact</a>
          </nav>
        </div>
      </AnimatedHeader>

      <main className="pt-24 px-6">
        <h2 className="text-3xl font-semibold text-white mb-4">Welcome to the Strip ✨</h2>
        <p className="text-gray-300">Plan, book, and enjoy your ultimate Las Vegas experience.</p>
      </main>
    </>
  );
}
