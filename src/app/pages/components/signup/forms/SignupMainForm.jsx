import { useStoreUser } from "@/app/hooks/stores/useStore"
import SignupCompanyForm from "./company/SignupCompanyForm"
import SignupUserForm from "./user/SignupUserForm"

export default function SignupMainForm() {

    const storeUser = useStoreUser()

    const { isCompany } = storeUser?.user || {}

    return (
        <>
            {isCompany ? <SignupCompanyForm /> : <SignupUserForm />}
        </>
    )
}