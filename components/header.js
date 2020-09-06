import Link from "next/link";

import "./Header.scss";

const Header = (props) => (
    <div className="Header">
        <Link href="/">
            <div className="HeaderLogo">{props.appTitle}</div>
        </Link>
        <Link href="/">
            <div className="HeaderNav">Home</div>
        </Link>
        <Link href="/stats">
            <div className="HeaderNav">Stats</div>
        </Link>
        <Link href="/analysis">
            <div className="HeaderNav">News & Analysis</div>
        </Link>
        <div className="HeaderRight">
            <Link href="/login">
                <div className="HeaderLogin">Login</div>
            </Link>
            <Link href="/signup">
                <div className="HeaderLogin">Sign Up</div>
            </Link>
        </div>
    </div>
);

export default Header;
