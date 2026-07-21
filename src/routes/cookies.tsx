import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ArrowLeft, Cookie, Info, ToggleLeft } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies · Hidrolinfa Detox" },
      {
        name: "description",
        content:
          "Informações detalhadas sobre a utilização de cookies no site da Hidrolinfa Detox.",
      },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="container-narrow py-20 md:py-28">
        {/* BACK LINK */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" />{" "}
          {t("Voltar ao Início") || "Voltar ao Início"}
        </Link>

        {/* HEADER */}
        <SectionHeading
          eyebrow={
            t("Preferências de Navegação") || "Preferências de Navegação"
          }
          title={
            <>
              {t("Política de")} <em className="text-gold">{t("Cookies")}</em>
            </>
          }
          description={
            t(
              "Explicamos de forma simples e transparente como, quando e por que motivo utilizamos cookies no nosso website para melhorar a sua experiência.",
            ) ||
            "Explicamos de forma simples e transparente como, quando e por que motivo utilizamos cookies no nosso website para melhorar a sua experiência."
          }
        />

        {/* CONTENT */}
        <div className="mt-16 max-w-3xl prose prose-neutral text-sm leading-relaxed text-muted-foreground space-y-8">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Cookie className="h-5 w-5 text-gold" strokeWidth={1.5} />
              <h3 className="font-serif text-xl font-medium">
                {t("1. O que são Cookies?") || "1. O que são Cookies?"}
              </h3>
            </div>
            <p>
              {t(
                "Cookies são pequenos ficheiros de texto guardados no seu computador ou dispositivo móvel através do seu navegador (browser) ao visitar um site. Eles ajudam o site a reconhecer o seu dispositivo e a guardar informações sobre as suas preferências e escolhas de navegação.",
              ) ||
                "Cookies são pequenos ficheiros de texto guardados no seu computador ou dispositivo móvel através do seu navegador (browser) ao visitar um site. Eles ajudam o site a reconhecer o seu dispositivo e a guardar informações sobre as suas preferências e escolhas de navegação."}
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Info className="h-5 w-5 text-gold" strokeWidth={1.5} />
              <h3 className="font-serif text-xl font-medium">
                {t("2. Que Tipos de Cookies Utilizamos?") ||
                  "2. Que Tipos de Cookies Utilizamos?"}
              </h3>
            </div>
            <p>
              {t(
                "Utilizamos apenas cookies essenciais e funcionais mínimos para garantir que o site funciona de forma rápida, segura e com uma experiência fluida:",
              ) ||
                "Utilizamos apenas cookies essenciais e funcionais mínimos para garantir que o site funciona de forma rápida, segura e com uma experiência fluida:"}
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>
                  {t("Cookies Estritamente Necessários (Técnicos):") ||
                    "Cookies Estritamente Necessários (Técnicos):"}
                </strong>{" "}
                {t(
                  "Indispensáveis para navegar no site e utilizar as suas funcionalidades, como guardar as suas preferências de idioma e a escolha do banner de privacidade.",
                ) ||
                  "Indispensáveis para navegar no site e utilizar as suas funcionalidades, como guardar as suas preferências de idioma e a escolha do banner de privacidade."}
              </li>
              <li>
                <strong>
                  {t("Cookies de Funcionalidade:") ||
                    "Cookies de Funcionalidade:"}
                </strong>{" "}
                {t(
                  "Permitem que o website se lembre de escolhas feitas por si (como o fecho do modal promocional) para evitar repetir as mesmas perguntas ou mensagens em cada página.",
                ) ||
                  "Permitem que o website se lembre de escolhas feitas por si (como o fecho do modal promocional) para evitar repetir as mesmas perguntas ou mensagens em cada página."}
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <ToggleLeft className="h-5 w-5 text-gold" strokeWidth={1.5} />
              <h3 className="font-serif text-xl font-medium">
                {t("3. Como Controlar e Gerir os Cookies?") ||
                  "3. Como Controlar e Gerir os Cookies?"}
              </h3>
            </div>
            <p>
              {t(
                "O utilizador tem o controlo total sobre os cookies e pode gerir as suas definições a qualquer momento diretamente no seu navegador. Pode optar por bloquear, apagar ou recusar cookies de forma muito simples:",
              ) ||
                "O utilizador tem o controlo total sobre os cookies e pode gerir as suas definições a qualquer momento diretamente no seu navegador. Pode optar por bloquear, apagar ou recusar cookies de forma muito simples:"}
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                {t(
                  "Se utiliza o Google Chrome: Vá a Definições > Privacidade e Segurança > Cookies.",
                ) ||
                  "Se utiliza o Google Chrome: Vá a Definições > Privacidade e Segurança > Cookies."}
              </li>
              <li>
                {t(
                  "Se utiliza o Safari: Vá a Definições > Privacidade > Gerir Cookies.",
                ) ||
                  "Se utiliza o Safari: Vá a Definições > Privacidade > Gerir Cookies."}
              </li>
              <li>
                {t(
                  "Se utiliza o Mozilla Firefox: Vá a Opções > Privacidade e Segurança > Cookies.",
                ) ||
                  "Se utiliza o Mozilla Firefox: Vá a Opções > Privacidade e Segurança > Cookies."}
              </li>
            </ul>
            <p>
              {t(
                "Tenha em consideração que desativar totalmente os cookies pode comprometer a sua experiência de navegação, impedindo que certas funcionalidades funcionem de forma otimizada (como a memorização do idioma ativo).",
              ) ||
                "Tenha em consideração que desativar totalmente os cookies pode comprometer a sua experiência de navegação, impedindo que certas funcionalidades funcionem de forma otimizada (como a memorização do idioma ativo)."}
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-primary font-medium">
              {t("4. Cookies de Terceiros") || "4. Cookies de Terceiros"}
            </h3>
            <p>
              {t(
                "Não partilhamos cookies de rastreamento de publicidade com terceiros e não permitimos publicidade segmentada no nosso website, garantindo a sua total privacidade de navegação de acordo com a legislação RGPD.",
              ) ||
                "Não partilhamos cookies de rastreamento de publicidade com terceiros e não permitimos publicidade segmentada no nosso website, garantindo a sua total privacidade de navegação de acordo com a legislação RGPD."}
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-primary font-medium">
              {t("5. Alterações à nossa Política") ||
                "5. Alterações à nossa Política"}
            </h3>
            <p>
              {t(
                "Esta política de cookies pode ser atualizada sempre que necessário para acompanhar desenvolvimentos regulamentares ou operacionais. Qualquer alteração importante será assinalada no website.",
              ) ||
                "Esta política de cookies pode ser atualizada sempre que necessário para acompanhar desenvolvimentos regulamentares ou operacionais. Qualquer alteração importante será assinalada no website."}
            </p>
            <p className="text-xs text-muted-foreground pt-4 border-t border-border/40">
              {t("Última atualização: 30 de Maio de 2026.") ||
                "Última atualização: 30 de Maio de 2026."}
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
