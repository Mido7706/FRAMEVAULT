"use client";

import { useState } from "react";
import Navbar from "./Navbar";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const photos = [
    { src: "/images/image1.jpg", title: "Photo 1" },
    { src: "/images/image2.jpg", title: "Photo 2" },
    { src: "/images/image3.jpg", title: "Photo 3" },
    { src: "/images/image4.jpg", title: "Photo 4" },
    { src: "/images/image5.jpg", title: "Photo 5" },
    { src: "/images/image6.jpg", title: "Photo 6" },
    { src: "/images/image7.jpg", title: "Photo 7" },
    { src: "/images/image8.jpg", title: "Photo 8" },
    { src: "/images/image9.jpg", title: "Photo 9" },
    { src: "/images/image10.jpg", title: "Photo 10" },
    { src: "/images/image11.jpg", title: "Photo 11" },
    { src: "/images/image12.jpg", title: "Photo 12" },
    { src: "/images/image13.jpg", title: "Photo 13" },
    { src: "/images/image14.jpg", title: "Photo 14" },
    { src: "/images/image15.jpg", title: "Photo 15" },
    { src: "/images/image16.jpg", title: "Photo 16" },
    { src: "/images/image17.jpg", title: "Photo 17" },
    { src: "/images/image18.jpg", title: "Photo 18" },
    { src: "/images/image19.jpg", title: "Photo 19" },
  ];

  const visiblePhotos = photos.slice(0, visibleCount);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(120,119,198,0.18),transparent_30%),linear-gradient(to_bottom,#050505,#0f0f12,#050505)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="relative z-10">
        <Navbar />

        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
          <div
            className="hero-zoom absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/image1.jpg')" }}
          />
          <div className="absolute inset-0 bg-black/72 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-black" />

          <div className="relative z-10">
            <p className="fade-up text-xs uppercase tracking-[0.45em] text-yellow-400/80">
              Luxury Visual Portfolio
            </p>

            <h1 className="font-luxury fade-up-delay-1 mt-5 max-w-5xl text-6xl font-semibold leading-tight tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] md:text-8xl xl:text-9xl">
              Mohamed Amr
            </h1>

            <div className="fade-up-delay-2 mt-6 h-px w-24 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

            <p className="fade-up-delay-2 mt-8 max-w-3xl text-base leading-8 text-zinc-200 md:text-lg">
              Photographer, Creative Media Contributor, and Computer Science
              Student. A refined visual space built to showcase moments,
              atmosphere, and storytelling through clean composition and premium
              presentation.
            </p>

            <div className="fade-up-delay-3 mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#gallery"
                className="rounded-full border border-yellow-400/30 bg-yellow-400 px-7 py-3 text-sm font-semibold text-black shadow-[0_0_30px_rgba(255,215,0,0.3)] transition duration-300 hover:scale-[1.05] hover:bg-yellow-300"
              >
                Explore Gallery
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold backdrop-blur transition duration-300 hover:border-white/30 hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="px-6 pb-10 pt-10 md:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="text-xs uppercase tracking-[0.35em] text-yellow-400/70">
                About
              </p>
              <h2 className="font-luxury mt-3 text-4xl font-semibold md:text-6xl">
                Creative Identity
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                I am a Computer Science student at Asia Pacific University with
                a strong passion for photography, media, and visual
                storytelling. I currently serve as the Media Head of the
                Egyptian Community at APU and I am also part of the TEDx APU
                Production Team.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="fade-up rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-yellow-400/70">
                  Role
                </p>
                <p className="mt-3 font-luxury text-2xl text-white">
                  Media Head
                </p>
                <p className="mt-2 text-sm text-zinc-300">
                  Egyptian Community @ APU
                </p>
              </div>

              <div className="fade-up-delay-1 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-yellow-400/70">
                  Team
                </p>
                <p className="mt-3 font-luxury text-2xl text-white">
                  TEDx APU
                </p>
                <p className="mt-2 text-sm text-zinc-300">
                  Production Team
                </p>
              </div>

              <div className="fade-up-delay-2 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-yellow-400/70">
                  Focus
                </p>
                <p className="mt-3 font-luxury text-2xl text-white">
                  Visual Storytelling
                </p>
                <p className="mt-2 text-sm text-zinc-300">
                  Photography, Editing, Creative Direction
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="px-6 py-20 md:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-yellow-400/70">
                  Curated Selection
                </p>
                <h2 className="font-luxury mt-3 text-4xl font-semibold md:text-6xl">
                  Featured Work
                </h2>
              </div>

              <div className="hidden h-px flex-1 bg-gradient-to-r from-yellow-400/40 to-transparent md:block" />
            </div>

            <div className="columns-1 gap-5 sm:columns-2 md:columns-3">
              {visiblePhotos.map((photo, index) => (
                <div
                  key={index}
                  className="group mb-5 break-inside-avoid cursor-pointer"
                  onClick={() => setSelectedImage(photo.src)}
                >
                  <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-black/30 backdrop-blur transition duration-300 group-hover:-translate-y-1 group-hover:border-yellow-400/30">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full rounded-[1.2rem] object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              ))}
            </div>

            {visibleCount < photos.length && (
              <div className="mt-12 text-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="rounded-full border border-yellow-400/30 bg-yellow-400 px-8 py-3 text-sm font-semibold text-black shadow-[0_0_30px_rgba(255,215,0,0.2)] transition duration-300 hover:scale-[1.02] hover:bg-yellow-300"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </section>

        <section id="contact" className="px-6 py-20 md:px-16">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur md:p-12">
            <p className="text-xs uppercase tracking-[0.35em] text-yellow-400/70">
              Contact
            </p>

            <h2 className="font-luxury mt-4 text-4xl font-semibold md:text-6xl">
              Let’s Create Something Distinctive
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Available for creative collaborations, event coverage, visual
              content, and photography-focused projects.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <a
                href="mailto:Mido_Shahbour@yahoo.com"
                className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-yellow-400/30 hover:bg-black/40"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-yellow-400/70">
                  Email
                </p>
                <p className="mt-3 break-words text-sm text-white">
                  Mido_Shahbour@yahoo.com
                </p>
              </a>

              <a
                href="https://www.linkedin.com/in/mohamed-amr-b87224396/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-yellow-400/30 hover:bg-black/40"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-yellow-400/70">
                  LinkedIn
                </p>
                <p className="mt-3 text-sm text-white">
                  Mohamed Amr LinkedIn
                </p>
              </a>

              <a
                href="https://instagram.com/ms.phg"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-yellow-400/30 hover:bg-black/40"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-yellow-400/70">
                  Instagram
                </p>
                <p className="mt-3 text-sm text-white">@ms.phg</p>
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-zinc-500">
          © 2026 Mohamed Amr. All rights reserved.
        </footer>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-[1.5rem] border border-white/10 object-contain shadow-2xl shadow-black/50"
          />
        </div>
      )}
    </main>
  );
}