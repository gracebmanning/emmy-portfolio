import './projects.css';
import { Route } from 'react-router-dom';
import { thumb_bigJoe, thumb_IMTS2024, thumb_STS, thumb_IMO, thumb_IMEMDM } from '../../assets/thumbnails';
import IMTSWestVideo from '../../assets/IMTS-West-2024.mp4';
import { MdArrowOutward } from "react-icons/md";

const projects = [
    {
        title: "Is Mommy Okay?",
        path: "is-mommy-okay",
        thumbnail: thumb_IMO,
        thumbnailAlt: `Ashley Tisdale, Halle Bailey, Tess Holliday, Elaine Welteroth, Stephanie Beatriz. Overlay of retro text that reads "Is Mommy Okay?".`,
        date: "February 2024",
        company: "Good Creative",
        companyLink: "https://www.wearegoodcreative.com/",
        role: "Production Assistant",
        roleDescription: "for this project, i reported to the first A.D. and Production Coordinator to perform standard PA duties; i organized craft services, assisted set decorators, distributed/collected walkies, ran errands, distributed schedules, coordinated talent, and more. i checked in frequently with the production team, stayed nearby and was ready to help at all times.",
        projectDescription: `the embedded video is one of many produced for an extensive social media campaign to bring awareness to maternal / postpartum mental health challenges by utilizing notable public figures. click "more info" below to see more of the deliverables produced for this project!`,
        moreInfoLink: "https://www.wearegoodcreative.com/is-mommy-okay",
        embed:
        <object width="100%" height="315px">
            <param name="movie" value="https://www.youtube.com/embed/4NiYhuYjEx4?si=xF0HtBlZ7h-Jzp7w"/>
            <param name="allowFullScreen" value="true"/>
            <param name="allowscriptaccess" value="always"/>
            <embed width="100%" height="100%" src="https://www.youtube.com/embed/4NiYhuYjEx4?si=xF0HtBlZ7h-Jzp7w" class="youtube-player" type="text/html" allowscriptaccess="always" allowfullscreen="true"/>
        </object>
    },
    {
        title: "Big Joe's Dent Removal",
        path: "big-joes-dent-removal",
        thumbnail: thumb_bigJoe,
        thumbnailAlt: `dark blue background with white text reading "Big Joe's Dent Removal" with a phone number, website, and address.`,
        date: "September 2024",
        company: "Bay 31 Productions",
        companyLink: "",
        role: "Production Assistant",
        roleDescription: `for this project, i coordinated various aspects of production, ensuring seamless and on-schedule shoots of several local car wash commercials. i assisted grip and gaffers in lighting and framing shots, and meticulously budgeted expenses and tracked receipts for the production. i drove set cars for various scenes and served as an extra for "reaction shots" (enjoy my 23 frame cameo!). `,
        projectDescription: `one of several commercials made for local car wash and dent repair locations. we utilized a small production team, meaning my role of Production Assistant was more critical than usual.`,
        moreInfoLink: "",
        embed: 
        <object width="100%" height="315px">
            <param name="movie" value="https://www.youtube.com/embed/J2SW92eQ_Jk?si=rUVrV8Be0hUbxLFg"/>
            <param name="allowFullScreen" value="true"/>
            <param name="allowscriptaccess" value="always"/>
            <embed width="100%" height="100%" src="https://www.youtube.com/embed/J2SW92eQ_Jk?si=rUVrV8Be0hUbxLFg" class="youtube-player" type="text/html" allowscriptaccess="always" allowfullscreen="true"/>
        </object>
    },
    {
        title: "IMTS 2024",
        path: "imts-2024",
        thumbnail: thumb_IMTS2024,
        thumbnailAlt: `blue background with text reading "IMTS+ Creators' Lounge".`,
        date: "September 2024",
        company: "Corporate Streams",
        companyLink: "https://www.corporatestreams.com/",
        role: "Camera Operator, Production Consultant",
        roleDescription: `on this set, i operated 6 Sony FR7 PTZ cameras simultaneously with precise control, efficiently following the shot requests of the Technical Director under pressure of a live-streamed event. i gave creative and technical input on set design, blocking and graphics, and assisted in set up and striking of all equipment including cameras, audio equipment, monitors.`,
        projectDescription: `the embedded video is part of many included in a live to tape series of interviews and segments at IMTS, one of the largest conventions on emerging manufacturing technology in the world. utilized notable figures within the manufacturing and engineering industries to spearhead interviews and discussions about emerging technologies and changes in the industry.`,
        moreInfoLink: "https://directory.imts.com/8_0/exhibitor/00090774/IMTS-Creators-Lounge",
        embed: <video src={IMTSWestVideo} width="100%" controls></video>
    },
    {
        title: "Strip the Shame",
        path: "strip-the-shame",
        thumbnail: thumb_STS,
        thumbnailAlt: `Three people holding fentanyl test strips with text reading "Strip the Shame".`,
        date: "July 2024",
        company: "Good Creative",
        companyLink: "https://www.wearegoodcreative.com/",
        role: "Production Assistant",
        roleDescription: `for this project, i reported to the first A.D. and Production Coordinator to perform standard PA duties; i organized craft services, assisted set decorators, distributed/collected walkies, ran errands, distributed schedules, coordinated talent, served as a background extra, and more. i checked in frequently with the production team, stayed nearby and was ready to help at all times.`,
        projectDescription: `this video is part of a campaign made in partnership with the Overdose Lifeline, an Indiana-based harm reduction nonprofit, to promote safe drug usage and make people aware of fentanyl test strips available to them.`,
        moreInfoLink: "https://www.wearegoodcreative.com/strip-the-shame",
        embed: 
        <a id='embedSTS' href="https://vimeo.com/999632261" target="_blank" rel="noreferrer">
            <img src={thumb_STS} alt={`Three people holding fentanyl test strips with text reading "Strip the Shame".`} />
            <p>video will open in new tab <MdArrowOutward/></p>
        </a>
    },
    {
        title: "IME/MD&M WEST 2024",
        path: "ime-mdm-west-2024",
        thumbnail: thumb_IMEMDM,
        thumbnailAlt: `a microphone in front of a glass of beer, with text overlay that reads "News & Brews".`,
        date: "February 2024",
        company: "Corporate Streams",
        companyLink: "https://www.corporatestreams.com/",
        role: "Camera Operator, Production Consultant",
        roleDescription: `on this set, i operated 5 Sony FR7 PTZ cameras simultaneously with precise control, efficiently following the shot requests of the Technical Director under pressure of a live-streamed event. i gave creative and technical input on set design, blocking and graphics, and assisted in set up and striking of all equipment including cameras, audio equipment, monitors.`, 
        projectDescription: `the embedded video is one of many that comprise a live streamed series of interviews and segments at IME/MD&M West, a multi-day manufacturing technology exposition/convention that draws industry attendees from all over the west coast. our team at Corporate Streams produced a segment called "News and Brews" that used notable figures within the manufacturing industry to lead discussions and interviews concerning advancements in the industry, over a "brew" of coffee or beer. `,
        moreInfoLink: "",
        embed: 
        <object width="100%" height="315px">
            <param name="movie" value="https://www.youtube.com/embed/0nOPBGSjeEs?si=zgeiV8S1S12CtmpV"/>
            <param name="allowFullScreen" value="true"/>
            <param name="allowscriptaccess" value="always"/>
            <embed width="100%" height="100%" src="https://www.youtube.com/embed/0nOPBGSjeEs?si=zgeiV8S1S12CtmpV" class="youtube-player" type="text/html" allowscriptaccess="always" allowfullscreen="true"/>
        </object>
    },
];

export const projectRoutes = projects.map((project) => <Route path={`/projects/${project.path}`} element={ProjectPage(project)} key={project.path} />);

function ProjectPage(project){
    return(
        <div className='container projectPage'>
            <div className='projectPageHeader'>
                <h2>{project.title}</h2>
                <div className='projectPageDetails'>
                    <h3>{project.date}</h3>
                    {project.companyLink === "" ? <h3>{project.company}</h3> : <a className='projectPageCompanyLink' href={project.companyLink} target='_blank' rel='noreferrer'><h3>{project.company}</h3></a>}
                </div>
            </div>
            <div className='projectPageRole'>
                <h3>{project.role}</h3>
                <p>{project.roleDescription}</p>
            </div>
            <div className='projectPageDescAndEmbed'>
                <div className='projectPageDescription'>
                    <h3>Project Description</h3>
                    <p>{project.projectDescription}</p>
                    <br/>
                    {project.moreInfoLink === "" ? null : <a className='projectPageButton' href={project.moreInfoLink} target='_blank' rel='noreferrer'>more info <MdArrowOutward/></a>}
                </div>
                <div className='projectPageEmbed'>
                    {project.embed}
                </div>
            </div>
        </div>
    )
}

function ProjectTile(project, index){
    return(
        <a className='projectTile' href={`/projects/${project.path}`} key={index} id={project.thumbnailID}>
            <img className='projectTileImage' src={project.thumbnail} alt={project.thumbnailAlt} />
            <h3>{project.title}</h3>
        </a>
    )
}

export default function Projects(){
    return(
        <div className='container projectTileContainer'>
            {projects.map((project, index) => ProjectTile(project, index))}
        </div>
    )
}