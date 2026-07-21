import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ArrowLeft, Shield, Lock, Eye } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade · Hidrolinfa Detox" },
      {
        name: "description",
        content:
          "Política de Privacidade e Proteção de Dados (RGPD) da Hidrolinfa Detox.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
          eyebrow={t("Segurança e RGPD") || "Segurança e RGPD"}
          title={
            <>
              {t("Política de")}{" "}
              <em className="text-gold">{t("Privacidade")}</em>
            </>
          }
          description={
            t(
              "Na Hidrolinfa Detox, levamos a sério a privacidade e a segurança dos seus dados pessoais, em total conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) da União Europeia.",
            ) ||
            "Na Hidrolinfa Detox, levamos a sério a privacidade e a segurança dos seus dados pessoais, em total conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) da União Europeia."
          }
        />

        {/* CONTENT */}
        <div className="mt-16 max-w-3xl prose prose-neutral text-sm leading-relaxed text-muted-foreground space-y-8">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Shield className="h-5 w-5 text-gold" strokeWidth={1.5} />
              <h3 className="font-serif text-xl font-medium">
                {t("1. Informações que Recolhemos") ||
                  "1. Informações que Recolhemos"}
              </h3>
            </div>
            <p>
              {t(
                "Recolhemos apenas as informações estritamente necessárias para processar as suas consultas e garantir a segurança dos tratamentos terapêuticos. Isto inclui:",
              ) ||
                "Recolhemos apenas as informações estritamente necessárias para processar as suas consultas e garantir a segurança dos tratamentos terapêuticos. Isto inclui:"}
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                {t(
                  "Dados de identificação e contacto (nome, telemóvel, e-mail).",
                ) ||
                  "Dados de identificação e contacto (nome, telemóvel, e-mail)."}
              </li>
              <li>
                {t(
                  "Informações de saúde relevantes fornecidas por si durante a avaliação inicial (para garantir a segurança de tratamentos como a Hidrolinfa).",
                ) ||
                  "Informações de saúde relevantes fornecidas por si durante a avaliação inicial (para garantir a segurança de tratamentos como a Hidrolinfa)."}
              </li>
              <li>
                {t(
                  "Dados de navegação recolhidos através de cookies técnicos.",
                ) ||
                  "Dados de navegação recolhidos através de cookies técnicos."}
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Lock className="h-5 w-5 text-gold" strokeWidth={1.5} />
              <h3 className="font-serif text-xl font-medium">
                {t("2. Como Utilizamos os seus Dados") ||
                  "2. Como Utilizamos os seus Dados"}
              </h3>
            </div>
            <p>
              {t(
                "Os seus dados de saúde e contacto são utilizados exclusivamente para as seguintes finalidades:",
              ) ||
                "Os seus dados de saúde e contacto são utilizados exclusivamente para as seguintes finalidades:"}
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                {t(
                  "Agendamento, confirmação e acompanhamento personalizado de consultas.",
                ) ||
                  "Agendamento, confirmação e acompanhamento personalizado de consultas."}
              </li>
              <li>
                {t(
                  "Avaliação clínica para contraindicações médicas relativas aos tratamentos estéticos e desintoxicantes.",
                ) ||
                  "Avaliação clínica para contraindicações médicas relativas aos tratamentos estéticos e desintoxicantes."}
              </li>
              <li>
                {t(
                  "Comunicação direta sobre marcações ou alterações de horários.",
                ) ||
                  "Comunicação direta sobre marcações ou alterações de horários."}
              </li>
            </ul>
            <p className="italic text-xs border-l-2 border-gold pl-3">
              {t(
                "Nota Importante: Nunca vendemos, partilhamos ou alugamos os seus dados pessoais a terceiros para fins de marketing ou qualquer outra atividade comercial.",
              ) ||
                "Nota Importante: Nunca vendemos, partilhamos ou alugamos os seus dados pessoais a terceiros para fins de marketing ou qualquer outra atividade comercial."}
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Eye className="h-5 w-5 text-gold" strokeWidth={1.5} />
              <h3 className="font-serif text-xl font-medium">
                {t("3. Os Seus Direitos Legais (RGPD)") ||
                  "3. Os Seus Direitos Legais (RGPD)"}
              </h3>
            </div>
            <p>
              {t(
                "Ao abrigo do Regulamento Geral sobre a Proteção de Dados (RGPD), o utilizador detém os seguintes direitos em relação aos seus dados pessoais:",
              ) ||
                "Ao abrigo do Regulamento Geral sobre a Proteção de Dados (RGPD), o utilizador detém os seguintes direitos em relação aos seus dados pessoais:"}
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>
                  {t("Direito de Acesso:") || "Direito de Acesso:"}
                </strong>{" "}
                {t(
                  "Pode solicitar uma cópia dos seus dados pessoais arquivados por nós a qualquer momento.",
                ) ||
                  "Pode solicitar uma cópia dos seus dados pessoais arquivados por nós a qualquer momento."}
              </li>
              <li>
                <strong>
                  {t("Direito de Retificação:") || "Direito de Retificação:"}
                </strong>{" "}
                {t(
                  "Pode corrigir ou atualizar qualquer informação incorreta ou desatualizada.",
                ) ||
                  "Pode corrigir ou atualizar qualquer informação incorreta ou desatualizada."}
              </li>
              <li>
                <strong>
                  {t("Direito ao Esquecimento:") || "Direito ao Esquecimento:"}
                </strong>{" "}
                {t(
                  "Pode solicitar a exclusão total dos seus dados de contacto e histórico clínico, exceto nos casos exigidos por lei.",
                ) ||
                  "Pode solicitar a exclusão total dos seus dados de contacto e histórico clínico, exceto nos casos exigidos por lei."}
              </li>
              <li>
                <strong>
                  {t("Direito de Oposição:") || "Direito de Oposição:"}
                </strong>{" "}
                {t(
                  "Pode opor-se ao tratamento de dados para comunicações de agendamento.",
                ) ||
                  "Pode opor-se ao tratamento de dados para comunicações de agendamento."}
              </li>
            </ul>
            <p>
              {t(
                "Para exercer qualquer um destes direitos, basta entrar em contacto connosco através do e-mail:",
              ) ||
                "Para exercer qualquer um destes direitos, basta entrar em contacto connosco através do e-mail:"}{" "}
              <a
                href="mailto:contato@hidrolinfadetox.com"
                className="text-gold hover:underline"
              >
                contato@hidrolinfadetox.com
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-primary font-medium">
              {t("4. Segurança e Conservação dos Dados") ||
                "4. Segurança e Conservação dos Dados"}
            </h3>
            <p>
              {t(
                "Os seus dados pessoais e de saúde são guardados de forma segura em ambiente protegido e encriptado. Apenas os profissionais responsáveis pela aplicação dos tratamentos têm acesso restrito a estes dados. Conservamos as fichas de avaliação apenas durante o período necessário para prestar os serviços ou conforme as obrigações legais em vigor.",
              ) ||
                "Os seus dados pessoais e de saúde são guardados de forma segura em ambiente protegido e encriptado. Apenas os profissionais responsáveis pela aplicação dos tratamentos têm acesso restrito a estes dados. Conservamos as fichas de avaliação apenas durante o período necessário para prestar os serviços ou conforme as obrigações legais em vigor."}
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-primary font-medium">
              {t("5. Atualizações da Política") ||
                "5. Atualizações da Política"}
            </h3>
            <p>
              {t(
                "Esta política de privacidade pode ser atualizada periodicamente para refletir alterações nos nossos serviços ou nas leis de proteção de dados. Aconselhamos a consulta regular desta página.",
              ) ||
                "Esta política de privacidade pode ser atualizada periodicamente para refletir alterações nos nossos serviços ou nas leis de proteção de dados. Aconselhamos a consulta regular desta página."}
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
