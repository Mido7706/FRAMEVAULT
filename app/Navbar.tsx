export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
        <p className="font-luxury text-sm uppercase tracking-[0.4em] text-yellow-400/80">
          Mohamed Amr
        </p>

        <div className="hidden gap-8 text-sm md:flex">
          <a href="#" className="transition hover:text-yellow-300">
            Home
          </a>
          <a href="#about" className="transition hover:text-yellow-300">
            About
          </a>
          <a href="#gallery" className="transition hover:text-yellow-300">
            Gallery
          </a>
          <a href="#contact" className="transition hover:text-yellow-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}