"use client"
import { BasicPageLayout } from "../components/basicPageLayout"

function Resume(){
    return(
        <iframe src="/documents/resume.pdf" style={{width: "100%", aspectRatio:"22/17", overflow: "scroll"}} />
    )
}

export default function Page(){
  return(
    <BasicPageLayout>
      <Resume/>
    </BasicPageLayout>
  )
}