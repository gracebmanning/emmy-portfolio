import Image from "next/image";
import { BasicPageLayout } from "./components/basicPageLayout";
import { FilmStripRow, FilmStripColumn } from "./components/filmStrip";

function Home() {
  return(
    <div className='w-full flex flex-col justify-center items-center md:m-5 m-0'>
        <div className='w-screen flex md:flex-row flex-col justify-center items-center m-0'>
            <img className='bg-gray-500 md:w-[250px] w-[150px] m-5' src="/images/headshot.jpg" alt='Emmy holding a slate at a production' />
            <div className='md:m-5 m-0 md:w-[40%] w-[80%] md:text-left text-justify leading-[1.5]'>
                <p>
                    hi, I'm <b>Emmy</b>!
                </p>
                <p>
                    welcome to my website. 
                    i am aspiring in the field of <b>digital and traditional media production</b> with a particular interest in <b>screenwriting</b> and <b>producing</b>. 
                    i have spent the past year working as a production assistant and operating cameras under several different production companies. 
                    if you click on the <a className="text-accent hover:underline" id='projectsLink' href='/projects'>projects</a> tab of this website, you'll find examples of some projects i've worked on. 
                </p>
                <p>
                    outside of my work, i am also an avid media consumer myself. i love to spend time with my cat, hit up the local vintage, thrift, and oddities shops, and go hiking around LA. i have worked at several zoos and am passionate about animal care and environmental conservation. i will do just about anything for a can of diet coke. 
                </p>
                <p>
                    thanks for visiting my website!
                </p>
                <p>
                    you can contact me with any inquiries at emmythegardner [@] gmail.com
                </p>
            </div>
        </div>
        <FilmStripRow/>
        <FilmStripColumn/>
    </div>
)
}

export default function Page(){
  return(
    <BasicPageLayout>
      <Home/>
    </BasicPageLayout>
  )
}