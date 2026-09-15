import { Stethoscope, Ambulance, PawPrint, House } from "lucide-react";
import CareCard from "./components/CareCard";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐾</span>
            <span className="text-xl font-bold">Paws N Care</span>
          </div>
        </header>

        <section className="py-16">
          <p className="mb-3 text-sm font-medium text-zinc-400">📍 Bengaluru</p>
          <h2 className="max-w-2xl text-4xl font-bold tracking-tight">
            Find the right care for your animal
          </h2>
          <p className="mt-4 max-w-xl text-lg text-zinc-400">
            Find trusted veterinary and animal-care services near you, when you
            need them.
          </p>
        </section>

        <section>
          <h2>What do you need?</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <CareCard
              icon={Stethoscope}
              title="Find a Vet"
              description="Find veterinary care near you"
            />
            <Link href="/emergency">
              <CareCard
                icon={Ambulance}
                title="Emergency"
                description="Find urgent animal care near you"
              />
            </Link>

            <CareCard
              icon={PawPrint}
              title="Rescue / NGO"
              description="Find rescue orginisation"
            />
            <CareCard
              icon={House}
              title="Boarding"
              description="Find boarding facilities"
            />
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium">🩺 Your animal's health</p>

              <h2 className="mt-2 text-2xl font-bold">
                Keep health records organised
              </h2>

              <p className="mt-2 max-w-xl text-sm text-zinc-400">
                Upload reports and prescriptions and use AI to organise
                important information in one place.
              </p>
            </div>

            <Link
              href="/health"
              className="hidden rounded-full border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-800 sm:block"
            >
              View Records
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
