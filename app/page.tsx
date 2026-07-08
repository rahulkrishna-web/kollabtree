import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background font-sans">
      <div className="mb-8">
        <Image
          src="/Kolabtree_logo.svg"
          alt="Kolabtree Logo"
          width={240}
          height={54}
          priority
          className="h-12 w-auto"
        />
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-brand-primary tracking-tight text-center">
        Welcome to Kolabtree
      </h1>
      <p className="mt-4 text-zinc-600 text-lg md:text-xl text-center max-w-2xl px-4">
        We are preparing something amazing. Stay tuned!
      </p>
    </div>
  );
}
