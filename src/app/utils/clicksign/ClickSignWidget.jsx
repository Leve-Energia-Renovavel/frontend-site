import { useEffect, useState } from 'react';
import Clicksign from "./embedded";
import { ClicksignWidgetContainer } from './styles';
import { FormHeader } from '@/app/register/forms/contract-signature-form/styles';
import ContractFormTitle from '@/app/register/forms/contract-signature-form/ContractFormTitle';
import ContractFormProgress from '@/app/register/forms/contract-signature-form/ContractFormProgress';

export default function ClicksignWidget() {
    const [widget, setWidget] = useState(null);

    useEffect(() => {
        if (widget) {
            widget.unmount();
        }

        const run = () => {
            const request_signature_key = process.env.NEXT_PUBLIC_CLICK_SIGN_ASSIGNATURE;
            const widgetInstance = new Clicksign(request_signature_key);
            widgetInstance.endpoint = 'https://app.clicksign.com';
            widgetInstance.origin = window.location.protocol + '//' + window.location.host;

            widgetInstance.mount('clicksign-container');

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