"use client";

import { useSearchParams } from "next/navigation";

import Link from "next/link";

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const animal = searchParams.get("animal");
  const need = searchParams.get("need");
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-3xl px-6 py-8">
        <Link
          href="/emergency"
          className="text-sm text-zinc-400 hover:text-white"
        >
          ← Change search
        </Link>

        <section className="py-10">
          <p className="text-sm font-medium text-red-400">Emergency care</p>
          <p className="text-sm font-medium text-purple-400">
            📍Bengaluru - 5 Km radius
          </p>

          <h1 className="mt-2 text-3xl font-bold">Help available near you</h1>

          <p className="mt-3 text-zinc-400">
            Showing results{" "}
            {animal && (
              <>
                {" "}
                for a <span className="text-white">{animal}</span>
              </>
            )}
            {need && (
              <>
                {" "}
                - <span className="text-white">{need}</span>
              </>
            )}
          </p>
        </section>
        <section className="space-y-4">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">
                  Green Paws Veterinary Hospital
                </h2>
                <span className="mt-2 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                  ✓ Verified provider
                </span>

                <p className="mt-1 text-sm text-zinc-400">
                  Emergency Veterinary Hospital
                </p>
              </div>

              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                Open
              </span>
              <div className="mt-4 rounded-xl bg-zinc-800/50 p-3 text-sm">
                <p className="font-medium text-zinc-200">Why this result?</p>

                <p className="mt-1 text-zinc-400">
                  Emergency veterinary care available and currently open.
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm text-zinc-400">
              <p>📍 2.1 km away</p>
              <p>⭐ 4.7 · 328 reviews</p>
              <p>🚨 Emergency care · Surgery</p>
            </div>

            <div className="mt-5 flex gap-3">
              <a
                href="tel:918000000000"
                className="flex-1 rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold hover:bg-purple-500"
              >
                Call
              </a>

              <button className="flex-1 rounded-xl border border-zinc-700 px-4 py-3 text-sm font-semibold hover:bg-zinc-800">
                Directions
              </button>
            </div>
          </div>
        </section>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">Animal Rescue Ambulance</h2>

              <p className="mt-1 text-sm text-zinc-400">
                Emergency Animal Transport
              </p>
            </div>

            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              Available
            </span>
            <div className="mt-4 rounded-xl bg-zinc-800/50 p-3 text-sm">
              <p className="font-medium text-zinc-200">Why this result?</p>

              <p className="mt-1 text-zinc-400">
                Provides animal ambulance and injured-animal rescue services.
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-2 text-sm text-zinc-400">
            <p>📍 3.4 km away</p>
            <p>🐾 Stray & injured animal rescue</p>
            <p>🚑 Animal ambulance</p>
          </div>

          <div className="mt-5 flex gap-3">
            <button className="flex-1 rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold hover:bg-purple-500">
              Call
            </button>

            <button className="flex-1 rounded-xl border border-zinc-700 px-4 py-3 text-sm font-semibold hover:bg-zinc-800">
              Directions
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
