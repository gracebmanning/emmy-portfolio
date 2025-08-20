import { client } from "../sanity/lib/client";
import { type SanityDocument, PortableText } from "next-sanity";
import { BasicPageLayout } from "./components/basicPageLayout";
import { FilmStripRow, FilmStripColumn } from "./components/filmStrip";
import { homeContentQuery } from "@/sanity/lib/queries";

function Home({ homeContent }: { homeContent: SanityDocument }) {
  return(
    <div className='w-full m-0 mb-2.5 md:mb-0'>
        <div className='w-screen flex md:flex-row flex-col justify-center items-center md:m-5 m-0'>
            <img className='bg-gray-500 md:w-[250px] w-[150px] m-5' src={homeContent.headshot.asset.url} alt={homeContent.headshot.alt} />
            <div className='bio prose md:m-5 m-0 md:w-[40%] w-[80%] md:text-left text-justify leading-[1.5] text-text dark:text-white'>
                {Array.isArray(homeContent.bio) && <PortableText value={homeContent.bio} />}
            </div>
        </div>
        <div>
            <FilmStripRow images={homeContent.filmStripImages} />
            <FilmStripColumn images={homeContent.filmStripImages} />
        </div>
    </div>
    )
}

const options = { next: { revalidate: 30 } };
export default async function Page(){
    const homeContent = await client.fetch<SanityDocument>(homeContentQuery, {}, options);
    return(
        <BasicPageLayout>
            <Home homeContent={homeContent} />
        </BasicPageLayout>
    )
}