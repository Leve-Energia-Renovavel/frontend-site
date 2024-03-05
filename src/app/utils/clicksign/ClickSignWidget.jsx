/* eslint-disable react-hooks/exhaustive-deps */
import ContractFormProgress from '@/app/register/forms/contract-signature-form/ContractFormProgress';
import ContractFormTitle from '@/app/register/forms/contract-signature-form/ContractFormTitle';
import { FormHeader } from '@/app/register/forms/contract-signature-form/styles';
import { useEffect, useState } from 'react';
import Clicksign from "./embedded";
import { ClicksignWidgetContainer } from './styles';
import { useRouter } from 'next/navigation';
import { useStoreClickSign } from '@/app/hooks/useStore';
import { Typography } from '@mui/material';

export default function ClicksignWidget() {
    const router = useRouter()

    const storeClicksign = useStoreClickSign()
    const clickSign = storeClicksign.data

    const [widget, setWidget] = useState(null);

    useEffect(() => {
        if (widget) {
            widget.unmount();
        }

        const run = () => {
            const widgetInstance = new Clicksign(clickSign.key);
            widgetInstance.endpoint = 'https://app.clicksign.com';
            widgetInstance.origin = window.location.protocol + '//' + window.location.host;

            widgetInstance.mount('clicksign-container');

            // Callback que será disparado quando o documento for assinado
            widgetInstance.on('signed', function (event) {
                // console.log('signed!');
                router.push(`/register/success`)

            });

            setWidget(widgetInstance);

        };

        if (storeClicksign.key != '') {
            run()
        }

        return () => {
            if (widget) {
                widget.unmount();
            }
        };
    }, []);

    return (
        <ClicksignWidgetContainer>
            <FormHeader>
                <ContractFormTitle />
                <ContractFormProgress />
            </FormHeader>
            {clickSign.key != '' ? <div id="clicksign-container" /> :
                <Typography>Carregando dados...</Typography>}
        </ClicksignWidgetContainer>

    )
};