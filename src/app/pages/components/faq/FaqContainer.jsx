import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { questions } from '../../../utils/helper/faqHelper';

export default function FaqContainer() {
    return (
        <>
            {questions.map((question) => {
                return (
                    <Accordion key={question.title} className='faqContainer'>
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon className='arrowIcon'/>}
                            aria-controls="faq-container"
                            id="faq-container"
                        >
                            <Typography className='question'>{question.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='answer'>{question.description}</Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </>
    )
}