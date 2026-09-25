import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Administração",
  robots: { index: false, follow: false },
};
export default function Page() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-24">
      <p className="label-eyebrow">Mademoiselle</p>
      <h1 className="mt-5 font-display text-4xl">Administração</h1>
      <p className="mt-6 text-muted-foreground">
        A área administrativa ainda não está disponível.
      </p>
      <Link href="/" className="mt-8 inline-block underline">
        Voltar ao início
      </Link>
    </main>
  );
}
