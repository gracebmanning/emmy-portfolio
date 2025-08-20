import { client } from "../../sanity/lib/client";
import { type SanityDocument } from "next-sanity";
import { BasicPageLayout } from "../components/basicPageLayout";
import { resumeQuery } from "@/sanity/lib/queries";
import ResumeViewerWrapper from "./ResumeViewerWrapper";

const options = { next: { revalidate: 30 } };
export default async function Page(){
    const siteSettings = await client.fetch<SanityDocument>(resumeQuery, {}, options);
    const resumeUrl = siteSettings.resume?.asset?.url;
    return(
        <BasicPageLayout>
            <ResumeViewerWrapper resumeUrl={resumeUrl} />
        </BasicPageLayout>
    )
}