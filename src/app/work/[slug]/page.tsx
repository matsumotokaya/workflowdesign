import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects, getProjectBySlug } from "@/data/profile";
import ProjectDetail from "./ProjectDetail";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects
    .filter((p) => p.detailImages?.length)
    .map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title.ja} — Kaya Matsumoto`,
    description: project.description.ja,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.detailImages?.length) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
