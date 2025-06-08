import { client } from "../sanity/lib/client";
import { type SanityDocument, PortableText } from "next-sanity";
import { BasicPageLayout } from "./components/basicPageLayout";
import { FilmStripRow, FilmStripColumn } from "./components/filmStrip";
import { siteSettingsQuery } from "@/sanity/lib/queries";

function Home({ siteSettings }: { siteSettings: SanityDocument }) {
  return(
    <div className='w-full m-0'>
        <div className='w-screen flex md:flex-row flex-col justify-center items-center md:m-5 m-0'>
            <img className='bg-gray-500 md:w-[250px] w-[150px] m-5' src="/images/headshot.jpg" alt='Emmy holding a slate at a production' />
            <div className='bio prose md:m-5 m-0 md:w-[40%] w-[80%] md:text-left text-justify leading-[1.5] text-text dark:text-white'>
                {Array.isArray(siteSettings.bio) && <PortableText value={siteSettings.bio} />}
            </div>
        </div>
        <div>
            <FilmStripRow/>
            <FilmStripColumn/>
        </div>
    </div>
)
}

const options = { next: { revalidate: 30 } };
export default async function Page(){
    const siteSettings = await client.fetch<SanityDocument>(siteSettingsQuery, {}, options);
    return(
        <BasicPageLayout>
            <Home siteSettings={siteSettings} />
        </BasicPageLayout>
    )
}