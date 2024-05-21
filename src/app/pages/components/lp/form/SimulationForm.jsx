import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import { TextField } from "@mui/material";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import InputMask from "react-input-mask";
import infoJson from '../../../../../../public/home-info.json';
import economyIcon from "../../../../../resources/icons/small/economy-icon-small.png";
import { schemaValidation } from './schema';
import {
    HomeMainForm as Form,
    FormButton,
    HomeMainFormContainer as FormContainer,
    FormFooterContainer,
    FormSlider, FormTitleContainer,
    HomeFormContainer,
    HomeMainFormSimulationContainer,
    Loading,
    FormSelect as Select,
    UserTypeFormButtonContainer,
    UserTypeFormContainer
} from "./styles";

export default function SimulationForm({ setErrorMessage, setNotifications }) {

    const router = useRouter()

    const [isLoading, setLoading] = useState(false)
    const [simulationCost, setSimulationCost] = useState(150)

    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const cepRef = useRef()

    const texts = infoJson

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)

        const submitData = {
            nome: nameRef.current.value,
            email: emailRef.current.value?.toLowerCase(),
            telefone: phoneRef.current.value,
            cep: cepRef.current.value,
            valor: simulationCost,
            redirect_to: "www.leveenergia.com.br",
            type: selectedUserType === "Residencia" ? "PF" : "PJ",
        }

        const response = await schemaValidation(submitData)
        await requestValidation(response, setNotifications, setErrorMessage, router)

        setLoading(false)
    }


    return (
        <HomeFormContainer>
            <FormContainer>
                <Form id='leadForm' onSubmit={handleSubmit}>
                    <FormTitleContainer>
                        <Image src={economyIcon} className='economyIcon' alt={"Logo Leve"} priority />
                        <h2>{texts.simulate}</h2>
                    </FormTitleContainer>
                    <p variant="body1">{texts.in}<span className="highlighted">{texts.threeClicks}</span>{texts.guarantee}<span className="highlighted">{texts.solarEnergy}</span>{texts.reduceInvoices}</p>
                    <TextField
                        inputRef={nameRef}
                        className="homeFormInput"
                        label={`Nome Completo`}
                        placeholder={`Nome Completo`}
                        variant="outlined"
                        type="text"
                        disabled={isLoading}
                        required
                    />
                    <InputMask mask="(99) 99999-9999"
                        disabled={isLoading}>
                        {() => <TextField
                            className="homeFormInput"
                            inputRef={phoneRef}
                            label={`Telefone (com DDD)`}
                            placeholder={`Telefone`}
                            variant="outlined"
                            type="text"
                            inputProps={{ inputMode: 'numeric' }}
                            disabled={isLoading}
                            required
                        />}
                    </InputMask>
                    <TextField
                        className="homeFormInput"
                        inputRef={emailRef}
                        label={`E-mail `}
                        placeholder={`E-mail`}
                        variant="outlined"
                        type="text"
                        disabled={isLoading}
                        required
                    />

                    <UserTypeFormContainer>
                        <p className='chooseWhereToEconomy'>{texts.iWantToEconomy}</p>
                        <UserTypeFormButtonContainer>
                            <Select
                                startIcon={<HomeIcon />}
                                selected>
                                {texts.house}
                            </Select>
                        </UserTypeFormButtonContainer>
                    </UserTypeFormContainer>
                    <FormFooterContainer>
                        <InputMask mask="99999-999" disabled={isLoading}>
                            {() => <TextField
                                className="homeFormInput"
                                inputRef={cepRef}
                                label={`CEP`}
                                placeholder={`CEP`}
                                variant="outlined"
                                type="text"
                                disabled={isLoading}
                                inputProps={{ inputMode: 'numeric' }}
                                required
                            />}
                        </InputMask>

                    </FormFooterContainer>
                </Form>
                <HomeMainFormSimulationContainer>
                    <h6 variant="subtitle1" className='averageUserCost'>{texts.averageCost} <span className='simulationCost'>R${simulationCost}{simulationCost === 3000 ? "+" : ""}</span></h6>
                    <FormSlider
                        className='formSlider'
                        onChange={(event) => setSimulationCost(event.target.value)}
                        value={simulationCost}
                        step={10}
                        defaultValue={150}
                        min={150}
                        max={3000}
                        valueLabelDisplay="off"
                        aria-labelledby="simulationSlider"
                    />
                    {/* <SwipeRightOutlinedIcon className='sliderTip' /   */}
                </HomeMainFormSimulationContainer>
            </FormContainer>
            <FormButton
                type='submit'
                form='leadForm'
                endIcon={!isLoading ? <ArrowForwardIcon /> : <ArrowForwardIcon sx={{ display: "none" }} />}>
                {isLoading ? <Loading size={20} /> : <span>{texts.discountCalculate}</span>}
            </FormButton>
            <p className='privacyPolicyDisclaimer'>{texts.agreedToReceiveEmails}<span className='privacyPolicy'>{texts.privacyPolicy}</span>.</p>
        </HomeFormContainer>
    )
}