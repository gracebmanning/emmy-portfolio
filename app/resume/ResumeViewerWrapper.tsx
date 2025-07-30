"use client";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import('./ResumeViewer'), {
    ssr: false,
    loading: () => <p style={{ textAlign: 'center' }}>Loading resume...</p>,
})

export default function ResumeViewerWrapper({ resumeUrl }: { resumeUrl: string }){
    return <DynamicComponent resumeUrl={resumeUrl} />
}