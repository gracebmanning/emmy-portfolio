"use client";
import Link from "next/link";
import { type SanityDocument, PortableText } from "next-sanity";

function ProjectPage({ project }: {project: SanityDocument}) {
    return (
        <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
          <Link href="/projects" className="hover:underline">
            ← Back to projects
          </Link>
          <h1>{project.title}</h1>
        </main>
      );
}

export default ProjectPage;