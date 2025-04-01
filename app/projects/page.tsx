import { BasicPageLayout } from "../components/basicPageLayout";
import { type SanityDocument } from "next-sanity";
import { client } from "../../sanity/lib/client";
import { allProjectsQuery } from "@/sanity/lib/queries";
import Projects from "./Projects";

const options = { next: { revalidate: 30 } };

export default async function Page() {
  const projects = await client.fetch<SanityDocument[]>(allProjectsQuery, {}, options);
  return(
    <BasicPageLayout>
        <Projects projects={projects} />
    </BasicPageLayout>
  );
}