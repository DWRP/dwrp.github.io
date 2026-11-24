import { routing } from "@/i18n/routing";

/**
 * Static export cannot rely on next/navigation redirect for `/`.
 * A postexport script overwrites out/index.html with a meta refresh;
 * this page remains a typed fallback during `next build`.
 */
export default function RootPage() {
  const href = `/${routing.defaultLocale}/`;

  return (
    <main>
      <p>
        Redirecting to <a href={href}>portfolio</a>…
      </p>
    </main>
  );
}
