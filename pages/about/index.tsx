import Head from "next/head";
import Link from 'next/link'
import { useApp } from "../../contexts/AppContext";

function About() {
    const [state, dispatch] = useApp();
    console.log(state);
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <p>About Page</p>
            <Link shallow href="/">Home Page</Link>
        </div>
    )
}

export default About;
