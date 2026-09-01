import { notFound } from "next/navigation";
import { DivisionPage } from "@/components/sections/DivisionPage";
import { DIVISIONES, EMPRESA, getDivision } from "@/lib/constants";

type Props = {
  params: Promise<{ division: string }>;
};

export function generateStaticParams() {
  return DIVISIONES.map((division) => ({ division: division.id }));
}

export async function generateMetadata({ params }: Props) {
  const { division: id } = await params;
  const division = getDivision(id);
  if (!division) return {};
  return {
    title: `${division.titulo} — ${EMPRESA.nombre}`,
    description: division.resumen,
  };
}

export default async function ServicioDivisionPage({ params }: Props) {
  const { division: id } = await params;
  const division = getDivision(id);
  if (!division) notFound();
  return (
    <main>
      <DivisionPage division={division} />
    </main>
  );
}
