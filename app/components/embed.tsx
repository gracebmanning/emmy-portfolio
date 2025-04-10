import React from 'react'
import ReactPlayer from 'react-player'
import { SanityDocument } from "next-sanity";
import styles from './embed.module.css';

export const EmbedVideo = ({project}:{project:SanityDocument}) => {
  if(project.mediaSource == "videofile"){
    return(
      <div className={styles.reactPlayerContainer}>
        <ReactPlayer 
          className={styles.reactPlayer}
          url={project.videoFile?.asset?.url} 
          width="100%" 
          height="auto" 
          controls 
        />
      </div>
    )
  } else{
    return(
      <div className={styles.reactPlayerContainer}>
        <ReactPlayer
          url={project.videoLink}
          className={styles.reactPlayer}
          width="100%"
          height="100%"
          controls
        />
      </div>
    )
  }
}