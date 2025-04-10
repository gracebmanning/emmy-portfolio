"use client";
import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { MdArrowOutward } from "react-icons/md";
import { EmbedVideo } from "@/app/components/embed";

function ProjectPage({ project }: {project: SanityDocument}) {
      return(
        <div className="w-full md:m-5 m-0 flex flex-col justify-center items-center">
          <Link href="/projects" className="w-[80vw] mb-5 underline hover:text-accent">
            ← Back to projects
          </Link>
          <div className="w-[80vw] flex flex-row justify-between items-center">
              <h2 className="m-0.5">{project.title}</h2>
              <div className="flex flex-col">
                  <h3 className="m-0.5">{project.month} {project.year}</h3>
                  {project.companyLink === "" ? <h3>{project.company}</h3> : <a className="text-accent hover:underline" href={project.companyLink} target='_blank' rel='noreferrer'><h3>{project.company}</h3></a>}
              </div>
          </div>
          <div className="w-[80vw] flex flex-col mt-7 border-b-1 border-text">
              <h3>{project.role}</h3>
              <p className="md:w-full w-[90%]">{project.roleDescription}</p>
          </div>
          <div className="w-[80vw] flex md:flex-row flex-col justify-between items-start mt-8">
              <div className="w-[48%] flex flex-col items-baseline mt-1 mb-1">
                  <h3>Project Description</h3>
                  <p className="md:w-full w-[90%]">{project.projectDescription}</p>
                  <br/>
                  {project.moreInfoLink === null ? 
                    null : 
                    <a className="flex flex-row justify-center items-center mb-1 p-2.5 rounded-3xl bg-accent text-background w-fit duration-200 ease-in-out hover:scale-105" href={project.moreInfoLink} target='_blank' rel='noreferrer'>
                      more info <MdArrowOutward/>
                    </a>}
              </div>
              <div className="md:w-[50%] w-[90%] flex flex-row justify-center items-center">
                  <EmbedVideo project={project} />
              </div>
          </div>
      </div>
    )
}

export default ProjectPage;