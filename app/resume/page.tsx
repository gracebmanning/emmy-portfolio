import { client } from "../../sanity/lib/client";
import { type SanityDocument, PortableText } from "next-sanity";
import { BasicPageLayout } from "../components/basicPageLayout";
import { siteSettingsQuery } from "@/sanity/lib/queries";

function Resume({ siteSettings }: { siteSettings: SanityDocument }){
    return(
        <iframe src={siteSettings.resume?.asset?.url} style={{width: "100%", aspectRatio:"22/17", overflow: "scroll"}} />
    )
}


const options = { next: { revalidate: 30 } };
export default async function Page(){
    const siteSettings = await client.fetch<SanityDocument>(siteSettingsQuery, {}, options);
    return(
        <BasicPageLayout>
            <Resume siteSettings={siteSettings} />
        </BasicPageLayout>
    )
}