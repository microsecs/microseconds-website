import Image from "next/image";

export const metadata = {
  title: "Website Under Construction | MicroSECONDS Computer Consulting",
  description: "The MicroSECONDS Computer Consulting website is being updated. Please check back soon.",
};

export default function Home() {
  return (
    <main data-construction-home className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.10),transparent_48%)]" />
      <section className="relative mx-auto w-full max-w-2xl rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-12 text-center shadow-2xl sm:px-12 sm:py-16">
        <div className="mx-auto mb-6 flex items-center justify-center gap-3">
          <Image src="/microseconds-logo.png" alt="MicroSECONDS logo" width={64} height={64} className="h-16 w-16 object-contain" priority />
          <div className="text-left">
            <div className="text-xl font-bold tracking-tight text-white sm:text-2xl">MicroSECONDS</div>
            <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">Computer Consulting</div>
          </div>
        </div>
        <div className="mx-auto mb-7 h-px max-w-xs bg-white/10" />
        <div className="mb-4 text-4xl" aria-hidden="true">🚧</div>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Website Under Construction</h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-300">
          We’re updating our website to better showcase our IT consulting,
          cybersecurity training, and security monitoring services.
        </p>
        <p className="mt-4 text-slate-400">Please check back soon.</p>
      </section>
    </main>
  );
}
