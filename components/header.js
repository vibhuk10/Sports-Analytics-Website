import Link from "next/link";
import Head from "next/head";

export default () => (
    <header>
        <ul>
            <Head>
                <div>
                    <Link href="/stats">
                        <a>Stats</a>
                    </Link>
                </div>
                <div>
                    <Link href="/login">
                        <a>Login</a>
                    </Link>
                </div>
                <div>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </div>
            </Head>
        </ul>
    </header>
);
