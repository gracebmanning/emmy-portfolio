import { BasicPageLayout } from "../../components/basicPageLayout";
import { type SanityDocument } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import { projectQuery, projectPathsQuery } from "@/sanity/lib/queries";
import ProjectPage from "./Project";
import { sanityFetch } from "@/sanity/lib/fetch";

const options = { next: { revalidate: 30 } };

export async function generateStaticParams() {
  const posts = await client.fetch(projectPathsQuery);
  return posts;
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page(props: Props) {
    const params = await props.params;
    const project = await sanityFetch<SanityDocument>({ query: projectQuery, params })
    return(
        <BasicPageLayout>
            <ProjectPage project={project} />
        </BasicPageLayout>
    );
}