import { FormSubtitleContainer, FormTitleContainer } from './styles';

export default function NewHomeMainFormHeader() {

    return (
        <>
            <FormTitleContainer className='formTitleContainer'>
                <h2 className='formTitle'>Calcule sua economia</h2>
            </FormTitleContainer>
            <FormSubtitleContainer className='formSubtitleContainer'>
                <p className='formSubtitle'>e veja como você ajuda a reduzir os danos ao meio ambiente sendo Leve</p>
            </FormSubtitleContainer>
        </>
    )
}