"use client";
import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { MdArrowOutward } from "react-icons/md";
//import { EmbedVideo } from "@/app/components/embed";
import dynamic from 'next/dynamic';

const EmbedVideo = dynamic(() => import('@/app/components/embed').then((mod) => mod.EmbedVideo), {
  ssr: false,
});

function ProjectPage({ project }: {project: SanityDocument}) {
      return(
        <div className="w-full md:m-5 m-0 mb-5 flex flex-col justify-center items-center">
          <Link href="/projects" className="w-[80vw] mb-5 text-accent hover:underline">
            ← Back to projects
          </Link>
          <div className="lg:w-[80vw] w-[90vw] flex flex-row justify-between items-center text-text dark:text-white">
              <h2 className="m-0.5">{project.title}</h2>
              <div className="flex flex-col">
                  <h3 className="m-0.5">{project.month} {project.year}</h3>
                  {project.companyLink === "" ? <h3>{project.company}</h3> : <a className="text-accent hover:underline" href={project.companyLink} target='_blank' rel='noreferrer'><h3>{project.company}</h3></a>}
              </div>
          </div>
          <div className="w-[80vw] flex flex-col mt-7 border-b-1 border-text dark:border-white text-text dark:text-white">
              <h3>{project.role}</h3>
              <p className="md:w-full w-[90%]">{project.roleDescription}</p>
          </div>
          <div className="w-[80vw] flex lg:flex-row flex-col justify-between items-start mt-8 text-text dark:text-white">
              <div className="lg:w-[48%] w-full flex flex-col items-baseline mt-1 mb-1">
                  <h3>Project Description</h3>
                  <p className="md:w-full w-[90%]">{project.projectDescription}</p>
                  {project.moreInfoLink === null ? 
                    null : 
                    <a className="flex flex-row justify-center items-center mb-1 p-2.5 rounded-3xl bg-accent text-background w-fit duration-200 ease-in-out hover:scale-105" href={project.moreInfoLink} target='_blank' rel='noreferrer'>
                      more info <MdArrowOutward/>
                    </a>}
              </div>
              <div className="lg:w-[50%] w-full lg:mt-0 mt-5 flex flex-row justify-center items-center">
                  <EmbedVideo project={project} />
              </div>
          </div>
      </div>
    )
}

export default ProjectPage;