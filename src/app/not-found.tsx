import Link from "next/link";
export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="font-display text-4xl">Página não encontrada</h1>
      <Link href="/" className="mt-6 inline-block underline">
        Voltar ao início
      </Link>
    </main>
  );
}
