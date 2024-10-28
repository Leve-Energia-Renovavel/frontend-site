import { useStoreInstallations } from "@/app/hooks/useStore";
import InstallationCard from "../../utils/cards/InstallationCard";
import { AddIcon, RegisteredInstallationsMainContainer as MainContainer, NewInstallationsContainer, RegisteredInstallationsContainer } from "./styles";

export default function RegisteredInstallations() {

    const storeInstallations = useStoreInstallations()
    const installations = storeInstallations.installations

    return (
        <MainContainer className='registeredInstallations'>
            <h2 className="title">Meus endereços cadastrados</h2>

            <RegisteredInstallationsContainer className="registeredInstallationsContainer">
                {installations?.filter(installation => installation.status !== "em_cancelamento")
                .slice(-2).map((installation, index) => {
                    return (
                        <InstallationCard key={installation?.uuid} installation={installation} index={index + 1} />
                    )
                })}
                {/* <NewInstallationsContainer>
                    <AddIcon />
                    <p className="addNewInstallationButton">Cadastrar nova unidade</p>
                </NewInstallationsContainer> */}

            </RegisteredInstallationsContainer>
        </MainContainer>
    )
}
