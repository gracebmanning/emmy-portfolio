import Nav from "./navbar";
import Footer from "./footer";

export function BasicPageLayout(props: { children: React.ReactNode }){
    return(
        <div className="flex flex-col min-h-screen">
            <Nav/>
                <main className="grow">
                    {props.children}
                </main>
            <Footer/>
        </div>
    )
}