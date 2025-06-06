import Link from "next/link";

export default function Footer() {
    return(
        <footer className="flex flex-row justify-center items-center p-7 border-t-1 border-solid border-text text-text dark:text-white">
            site created by&nbsp;<Link className="text-accent hover:underline" href='https://grace-manning.com/' target='_blank' rel='noreferrer'>Grace Manning</Link>
        </footer>
    )
}