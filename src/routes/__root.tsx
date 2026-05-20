import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import favIcon from "../assets/fav.png";
import { Leaf, ArrowRight } from "lucide-react";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-lg text-center flex flex-col items-center">
        <Leaf className="h-16 w-16 text-gold mb-6" strokeWidth={1} />
        <h1 className="font-serif text-6xl text-primary md:text-8xl">404</h1>
        <h2 className="mt-6 font-serif text-3xl font-medium text-primary">
          Respire fundo, <em className="text-gold">está tudo bem</em>.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          A página que procurava desvaneceu-se, mas a sua paz interior não tem de ir junto. Sinta-se à vontade para regressar e reencontrar o seu equilíbrio.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 border border-primary bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
          >
            Regressar zen à Home
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hidrolinfa Detox" },
      { name: "description", content: "Hidrolinfa Detox - Tratamentos estéticos e terapêuticos de excelência em Portugal e Europa." },
      { name: "author", content: "Hidrolinfa Detox" },
      { property: "og:title", content: "Hidrolinfa Detox" },
      { property: "og:description", content: "Hidrolinfa Detox - Tratamentos estéticos e terapêuticos de excelência em Portugal e Europa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Hidrolinfa Detox" },
      { name: "twitter:description", content: "Hidrolinfa Detox - Tratamentos estéticos e terapêuticos de excelência em Portugal e Europa." },
    ],
    links: [
      {
        rel: "icon",
        type: "image/png",
        href: favIcon,
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
