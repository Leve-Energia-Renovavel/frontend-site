
import dynamic from "next/dynamic";
const SignupMain = dynamic(() => import("../pages/components/signup/SignupMain"), { ssr: false });

export default function Dashboard() {

    return (
        <>
            <SignupMain />
        </>
    );
}
