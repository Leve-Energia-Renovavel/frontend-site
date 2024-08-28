import { getCityNameByStateIdAndCityId } from "@/app/service/utils/addressUtilsService"
import { stateOptions } from "@/app/utils/form-options/addressFormOptions"
import { CardContainer, CardContent, CardHeader, CardParentContainer, CardTitleContainer, EditIcon, HomeIcon } from "./styles"
import { formatCep } from "@/app/utils/formatters/documentFormatter"
import { capitalizeFirstLetter } from "@/app/utils/formatters/textFormatter"

export default function InstallationCard({ installation, index }) {

    const { status, address, street, zipCode, neighborhood, number, stateId, cityId, } = installation

    return (
        <CardParentContainer status={status} hoverColor={false}>
            <CardContainer>
                <CardHeader>
                    <CardTitleContainer>
                        <HomeIcon className="cardTitleIcon" />
                        <p className="cardTitle">{`Casa ${index}`}</p>
                    </CardTitleContainer>
                    {/* <EditIcon /> */}
                </CardHeader>
                <CardContent>
                    <p>{`${address ? address : street}, ${number} - ${neighborhood}, ${getCityNameByStateIdAndCityId(stateId, cityId)} - ${stateOptions[stateId]?.sigla}, ${formatCep(zipCode)}`}</p>
                </CardContent>

            </CardContainer>
            <p className="cardStatus">{capitalizeFirstLetter(status)}</p>
        </CardParentContainer>
    )
}

