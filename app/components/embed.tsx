import { MdArrowOutward } from "react-icons/md";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const EmbedVideoFile = ({videoSource}:{videoSource:string}) => {
  return(
    <video src={videoSource} width="100%" controls></video>
  );
}

export const EmbedYouTubeVideo = ({videoSource}:{videoSource:string}) => {
    return(
        <iframe
        width="100%"
        height="400px"
        src={videoSource}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    );
}

export const EmbedOtherHostedVideo = ({videoSource, imageSource, imageAlt}:{videoSource:string, imageSource:SanityImageSource, imageAlt:string}) => {
    return(
        <a className="inline relative w-full h-fit" href={videoSource} target="_blank" rel="noreferrer">
            <img 
                className="w-[90%] h-[350px]"
                src={urlFor(imageSource).url()}
                alt={imageAlt} />
            <p className="mt-1 flex flex-row items-center">video will open in new tab <MdArrowOutward/></p>
        </a>
    );
}