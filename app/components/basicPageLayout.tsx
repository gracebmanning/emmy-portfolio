import Navbar from "./navbar";
import Footer from "./footer";

export function BasicPageLayout(props: { children: React.ReactNode }){
    return(
        <div className="flex flex-col min-h-screen">
            <Navbar/>
                <div className="grow h-full">
                    {props.children}
                </div>
            <Footer/>
        </div>
    )
}