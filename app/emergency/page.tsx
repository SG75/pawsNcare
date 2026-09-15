"use client";
import { useState } from "react";
import Link from "next/link";

export default function EmergencyPage() {
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [selectedNeed, setSelectedNeed] = useState("");
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-2xl px-6 py-8">
        <Link href="/" className="text-sm text-zinc-400 hover:text-white">
          ← Back
        </Link>

        <section className="py-12">
          <p className="text-sm font-medium text-red-400">🚨 Emergency Help</p>

          <h1 className="mt-3 text-4xl font-bold">
            An animal needs urgent care?
          </h1>

          <p className="mt-4 text-zinc-400">
            Tell us a little about the situation and we'll help you find
            relevant care nearby.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Who needs help?</h2>

          <div className="mt-4 grid gap-3">
            <button
              onClick={() => setSelectedAnimal("Dog")}
              className={`rounded-2xl border p-5 text-left transition ${selectedAnimal == "Dog" ? " border-purple-500 bg-purple-500/10" : "border-zinc-800 bg-zinc-900  hover:border-zinc-600"}`}
            >
              <span className="text-lg">🐕</span>
              <span className="ml-3 font-medium">Dog</span>
            </button>

            <button
              onClick={() => setSelectedAnimal("Cat")}
              className={`rounded-2xl border p-5 text-left transition ${
                selectedAnimal == "Cat"
                  ? " border-purple-500 bg-purple-500/10"
                  : "border-zinc-800 bg-zinc-900 hover:border-zinc-600"
              }`}
            >
              <span className="text-lg">🐈</span>
              <span className="ml-3 font-medium">Cat</span>
            </button>

            <button
              onClick={() => setSelectedAnimal("Other")}
              className={`rounded-2xl border p-5 text-left transition ${selectedAnimal == "Other" ? " border-purple-500 bg-purple-500/10" : "border-zinc-800 bg-zinc-900 hover:border-zinc-600"}`}
            >
              <span className="text-lg">🐾</span>
              <span className="ml-3 font-medium">Other</span>
            </button>
          </div>
        </section>
        <section className="mt-10">
          <h2 className="text-xl font-semibold">What do you need?</h2>

          <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-800">
            <button
              onClick={() => setSelectedNeed("Animal ambulance")}
              className={`block w-full border-b border-zinc-800 p-5 text-left ${selectedNeed === "Animal ambulance" ? "bg-purple-500/10 text-purple-300" : "bg-zinc-900  hover:bg-zinc-800"}`}
            >
              🚑
              <span className="ml-3">Animal ambulance</span>
            </button>

            <button
              onClick={() => setSelectedNeed("Emergency vet")}
              className={`block w-full border-b border-zinc-800 p-5 text-left ${selectedNeed === "Emergency vet" ? "bg-purple-500/10 text-purple-300" : "bg-zinc-900  hover:bg-zinc-800"} `}
            >
              🏥
              <span className="ml-3">Emergency vet</span>
            </button>

            <button
              onClick={() => setSelectedNeed("Rescue organisation")}
              className={`block w-full p-5 text-left ${selectedNeed === "Rescue organisation" ? "bg-purple-500/10 text-purple-300" : "bg-zinc-900  hover:bg-zinc-800"} `}
            >
              🐾
              <span className="ml-3">Rescue organisation</span>
            </button>
          </div>
        </section>
        <div className="mt-10">
          {selectedAnimal && selectedNeed && (
            <p className="mb-4 text-center text-sm text-zinc-400">
              Finding {selectedNeed.toLowerCase()} for a{" "}
              {selectedAnimal.toLowerCase()} near you.
            </p>
          )}
          <Link
            href={
              selectedAnimal && selectedNeed
                ? `/results?animal=${encodeURIComponent(selectedAnimal)}&need=${encodeURIComponent(selectedNeed)}`
                : "#"
            }
            className={`block w-full rounded-2xl px-6 py-4 text-center font-semibold transition ${selectedAnimal && selectedNeed ? "bg-purplr-600 text-white hover:bg-purple-500" : "cursor-not-allowed bg-zinc-800 text-zinc-500"}`}
          >
            Find Help
          </Link>
        </div>
      </div>
    </main>
  );
}
