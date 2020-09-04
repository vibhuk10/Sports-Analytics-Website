import Header from "../components/header";
import { useRouter } from "next/router";

const Login = () => {
    const router = useRouter();

    const onLogin = (e) => {
        e.preventDefault();

        router.push("/");
    };

    return (
        <>
            <Header />
            <input placeholder="User name" />
            <input placeholder="Password" type="password" />
            <button onClick={onLogin} type="button">
                Log In
            </button>
        </>
    );
};

export default Login;
