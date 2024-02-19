/* eslint-disable react-hooks/exhaustive-deps */
import ContractFormProgress from '@/app/register/forms/contract-signature-form/ContractFormProgress';
import ContractFormTitle from '@/app/register/forms/contract-signature-form/ContractFormTitle';
import { FormHeader } from '@/app/register/forms/contract-signature-form/styles';
import { useEffect, useState } from 'react';
import Clicksign from "./embedded";
import { ClicksignWidgetContainer } from './styles';
import { useRouter } from 'next/navigation';

export default function ClicksignWidget() {
    const router = useRouter()
    const [widget, setWidget] = useState(null);

    useEffect(() => {
        if (widget) {
            widget.unmount();
        }

        const run = () => {
            // const request_signature_key = process.env.NEXT_PUBLIC_CLICK_SIGN_ASSIGNATURE;
            const request_signature_key = "a4bf758f-1ace-49d7-aadf-4c9ae0bda495";
            const widgetInstance = new Clicksign(request_signature_key);
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

        run();

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
            <div id="clicksign-container" />
        </ClicksignWidgetContainer>

    )
};