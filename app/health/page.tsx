"use client";
import { useState } from "react";

import Link from "next/link";

export default function HealthPage() {
  const [fileName, setFileName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-3xl px-6 py-8">
        <Link href="/" className="text-sm text-zinc-400 hover:text-white">
          ← Back
        </Link>

        <section className="py-10">
          <p className="text-sm font-medium text-purple-400">
            🩺 Health Records
          </p>

          <h1 className="mt-2 text-3xl font-bold">Bruno's Health</h1>

          <p className="mt-3 text-zinc-400">
            Keep veterinary reports, prescriptions and important health
            information organised in one place.
          </p>
        </section>
        <section className="rounded-3xl border border-dashed border-zinc-700 bg-zinc-900 p-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-500/10 text-2xl">
            +
          </div>

          <h2 className="mt-4 text-lg font-semibold">
            Upload a veterinary report
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
            Upload a blood report, prescription or veterinary document. AI can
            extract useful information and organise it for you.
          </p>

          {/* <button className="mt-6 rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold hover:bg-purple-500">
            Upload Report
          </button> */}

          <input
            id="report-upload"
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            className="hidden"
            onChange={(event) => {
              const file = event.target.files?.[0];

              if (!file) return;

              setFileName(file.name);
              setIsProcessing(true);
              setShowResult(false);

              setTimeout(() => {
                setIsProcessing(false);
                setShowResult(true);
              }, 1500);
            }}
          />

          <label
            htmlFor="report-upload"
            className="mt-6 inline-block cursor-pointer rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold hover:bg-purple-500"
          >
            Upload Report
          </label>

          <p className="mt-3 text-xs text-zinc-500">PDF, JPG or PNG · Demo</p>
          {fileName && (
            <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-800/50 p-4 text-left">
              <p className="text-sm font-medium">Selected report</p>

              <p className="mt-1 text-sm text-zinc-400">{fileName}</p>
            </div>
          )}
          {isProcessing && (
            <div className="mt-4 rounded-xl border border-purple-500/20 bg-purple-500/10 p-4">
              <p className="text-sm font-medium text-purple-300">
                ✦ AI is analysing the report...
              </p>

              <p className="mt-1 text-xs text-zinc-400">
                Extracting patient information, test values and important
                observations.
              </p>
            </div>
          )}
          {showResult && (
            <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
              <div className="flex items-center gap-2">
                <span className="text-purple-400">✦</span>

                <h2 className="font-semibold">AI extracted information</h2>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-zinc-800 p-4">
                  <p className="text-xs text-zinc-500">Patient</p>

                  <p className="mt-1 font-medium">Bruno</p>
                </div>

                <div className="rounded-xl border border-zinc-800 p-4">
                  <p className="text-xs text-zinc-500">Report type</p>

                  <p className="mt-1 font-medium">Blood Test</p>
                </div>

                <div className="rounded-xl border border-zinc-800 p-4">
                  <p className="text-xs text-zinc-500">Report date</p>

                  <p className="mt-1 font-medium">15 September 2026</p>
                </div>

                <div className="rounded-xl border border-zinc-800 p-4">
                  <p className="text-xs text-zinc-500">Values extracted</p>

                  <p className="mt-1 font-medium">12</p>
                </div>
              </div>
            </div>
          )}
          <div className="mt-5 rounded-xl bg-zinc-800/50 p-4">
            <p className="text-sm font-semibold">AI Summary</p>

            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Most reported values are within the provided reference ranges. A
              few values may require discussion with the veterinarian.
            </p>
          </div>

          <p className="mt-3 text-xs text-zinc-500">
            AI-generated summary. This is not a diagnosis and does not replace
            veterinary advice.
          </p>
        </section>

        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent records</h2>

            <span className="text-sm text-zinc-500">1 record</span>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold">Complete Blood Count</h3>

                <p className="mt-1 text-sm text-zinc-400">
                  Veterinary diagnostic report
                </p>
              </div>

              <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                AI processed
              </span>
            </div>

            <p className="mt-4 text-sm text-zinc-500">12 September 2026</p>
          </div>
          <div className="mt-5 rounded-2xl bg-zinc-800/50 p-4">
            <div className="flex items-center gap-2">
              <span className="text-purple-400">✦</span>

              <p className="text-sm font-semibold">AI Summary</p>
            </div>

            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Most reported values are within the provided reference ranges. The
              report contains a few values that may require discussion with the
              veterinarian.
            </p>
          </div>
          <p className="mt-3 text-xs text-zinc-500">
            AI-generated summary. This does not provide a diagnosis or replace
            veterinary advice.
          </p>
        </section>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-800 p-4">
            <p className="text-xs text-zinc-500">Patient</p>

            <p className="mt-1 font-medium">Bruno</p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-4">
            <p className="text-xs text-zinc-500">Report type</p>

            <p className="mt-1 font-medium">Blood Test</p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-4">
            <p className="text-xs text-zinc-500">Report date</p>

            <p className="mt-1 font-medium">12 Sep 2026</p>
          </div>

          <div className="rounded-xl border border-zinc-800 p-4">
            <p className="text-xs text-zinc-500">Values extracted</p>

            <p className="mt-1 font-medium">12</p>
          </div>
        </div>
      </div>
    </main>
  );
}
