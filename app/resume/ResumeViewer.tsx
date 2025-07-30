'use client';

import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function ResumeViewer({ resumeUrl }: { resumeUrl: string }) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [],
  });

  if (!resumeUrl) {
    return <div>Resume not found.</div>;
  }

  console.log(resumeUrl)

  return (
    <div className="flex justify-center mt-2">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div className="mx-auto w-[95%] md:w-[80%] h-dvh">
        <Viewer
          fileUrl={resumeUrl}
          plugins={[defaultLayoutPluginInstance]}
          theme="dark"
          defaultScale={SpecialZoomLevel.PageWidth}
        />
      </div>
    </Worker>
    </div>
  );
}