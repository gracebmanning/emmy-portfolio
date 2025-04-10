import React from 'react'
import ReactPlayer from 'react-player'
import { SanityDocument } from "next-sanity";

export const EmbedVideo = ({project}:{project:SanityDocument}) => {
  if(project.mediaSource == "videofile"){
    return(
      <ReactPlayer url={project.videoFile?.asset?.url} width="100%" height="auto" controls />
    )
  } else{
    return(
      <ReactPlayer url={project.videoLink} width="100%" height="auto" controls />
    )
  }
}