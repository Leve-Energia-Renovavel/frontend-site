import { getCityNameByStateIdAndCityId } from "@/app/service/utils/addressUtilsService"
import { stateOptions } from "@/app/utils/form-options/addressFormOptions"
import { formatCep } from "@/app/utils/formatters/documentFormatter"
import { capitalizeFirstLetter } from "@/app/utils/formatters/textFormatter"
import { CardContainer, CardContent, CardHeader, CardParentContainer, CardTitleContainer, HomeIcon } from "../styles"

export default function InstallationCardOption({ installation, index, handleSelectInstallationToBeCancelled }) {

    const { status, street, zipCode, neighborhood, number, stateId, cityId, } = installation

    return (
        <CardParentContainer status={status} hoverColor={true} onClick={() => handleSelectInstallationToBeCancelled(installation)} >
            <CardContainer>
                <CardHeader>
                    <CardTitleContainer>
                        <HomeIcon className="cardTitleIcon" />
                        <p className="cardTitle">{`Casa ${index}`}</p>
                    </CardTitleContainer>
                </CardHeader>
                <CardContent>
                    <p>{`${street}, ${number} - ${neighborhood}, ${getCityNameByStateIdAndCityId(stateId, cityId)} - ${stateOptions[stateId]?.sigla}, ${formatCep(zipCode)}`}</p>
                </CardContent>

            </CardContainer>
            <p className="cardStatus">{capitalizeFirstLetter(status)}</p>
        </CardParentContainer>
    )
}

