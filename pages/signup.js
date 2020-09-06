import { useRouter } from "next/router";
import Layout from "../components/layout";

const Login = () => {
    const router = useRouter();

    const onLogin = (e) => {
        e.preventDefault();

        router.push("/");
    };

    return (
        <>
            <Layout>
                <input placeholder="Create Userame" />
                <input placeholder="Create Password" />
                <button onClick={onLogin} type="button">
                    Log In
                </button>
            </Layout>
        </>
    );
};

export default Login;
