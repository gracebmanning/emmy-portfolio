import './projects.css';
import { Route } from 'react-router-dom';
import { thumb_bigJoe, thumbIMTS, thumb_STS, thumb_IMO } from '../../assets/thumbnails';
import IMTSWestVideo from '../../assets/IMTS-West-2024.mp4';

// Is Mommy Okay?
// Strip the Stigma
// Big Joe's Dent Removal commercial
// IMTS West

<script src="https://player.vimeo.com/api/player.js"></script>

const projects = [
    {
        title: "Is Mommy Okay?",
        path: "is-mommy-okay",
        thumbnail: thumb_IMO,
        thumbnailAlt: `Ashley Tisdale, Halle Bailey, Tess Holliday, Elaine Welteroth, Stephanie Beatriz. Overlay of retro text that reads "Is Mommy Okay?".`,
        date: "February 2024",
        company: "Good Creative",
        role: "Production Assistant",
        roleDescription: "Reported to First A.D. and Production Coordinator to perform standard PA duties; organized craft services, assisted set decorators, distributed/collected walkies, ran errands, distributed schedules, coordinated talent, etc. Checked in frequently with production team, stayed nearby and ready to help at all times.",
        projectDescription: "Part of a social media campaign to bring awareness to maternal / post-partum mental health challenges by utilizing notable public figures.",
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
        role: "Production Assistant",
        roleDescription: "Coordinated various aspects of production, ensuring seamless and on-schedule shoots of several local car wash commercials. Assisted grip and gaffers in lighting and framing shots. Drove set cars for various scenes. Meticulously tracked receipts and budgeted expenses for the production.",
        projectDescription: "One of several commercials made for local car wash and dent repair locations.",
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
        title: "IMTS West 2024",
        path: "imts-west-2024",
        thumbnail: thumbIMTS,
        thumbnailAlt: `blue background with text reading "IMTS+ Creators' Lounge".`,
        date: "September 2024",
        company: "Corporate Streams",
        role: "Camera Operator, Production Consultant",
        roleDescription: "Operated multiple Sony FR7 PTZ cameras with precise control. Efficiently followed shot requests of Technical Director under pressure of live-streamed events. Gave creative and technical input on productions, assisted in set up and striking of all equipment including cameras, audio equipment, monitors; practiced good cable management",
        projectDescription: "Part of a live to tape series of interviews and segments at IMTS West, one of the largest conventions on emerging manufacturing technology in the world.",
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
        role: "Production Assistant",
        roleDescription: "Reported to First A.D. and Production Coordinator to perform standard PA duties; organized craft services, assisted set decorators, distributed/collected walkies, ran errands, distributed schedules, coordinated talent, etc. Checked in frequently with production team, stayed nearby and ready to help at all times.",
        projectDescription: "Part of a campaign to promote safe drug usage and make people aware of fentanyl test strips being provided for them.",
        moreInfoLink: "https://www.wearegoodcreative.com/strip-the-shame",
        embed: 
        <a id='embedSTS' href="https://vimeo.com/999632261" target="_blank" rel="noreferrer">
            <img src={thumb_STS} alt={`Three people holding fentanyl test strips with text reading "Strip the Shame".`} />
        </a>
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
                    <h3>{project.company}</h3>
                </div>
            </div>
            <div className='projectPageRole'>
                <h3>{project.role}</h3>
                <p className='projectRoleDesc'>{project.roleDescription}</p>
            </div>
            <div className='projectPageDescAndEmbed'>
                <div className='projectPageDescription'>
                    <h3>Project Description</h3>
                    <p>{project.projectDescription}</p>
                    <br/>
                    {project.moreInfoLink === "" ? null : <a className='viewMoreButton' href={project.moreInfoLink} target='_blank' rel='noreferrer'>view more here</a>}
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