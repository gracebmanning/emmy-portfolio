import Link from "next/link";

export default function Footer() {
    return(
        <footer className="flex flex-row justify-center items-center p-7 border-1 border-solid border-text">
            site created by&nbsp;<Link className="hover:text-accent" href='https://grace-manning.com/' target='_blank' rel='noreferrer'>Grace Manning</Link>
        </footer>
    )
}