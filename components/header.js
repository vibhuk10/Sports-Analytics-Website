import Link from "next/link";

export default () => (
    <header>
        <ul>
            <li>
                <Link href="/stats">
                    <a>Stats</a>
                </Link>
            </li>
            <li>
                <Link href="/login">
                    <a>Login</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
        </ul>
    </header>
);
