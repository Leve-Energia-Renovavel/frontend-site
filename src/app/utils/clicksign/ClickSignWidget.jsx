/* eslint-disable react-hooks/exhaustive-deps */
import { useStoreClickSign, useStoreUser } from '@/app/hooks/useStore';
import ContractFormProgress from '@/app/register/forms/contract-signature-form/ContractFormProgress';
import ContractFormTitle from '@/app/register/forms/contract-signature-form/ContractFormTitle';
import { FormHeader } from '@/app/register/forms/contract-signature-form/styles';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Clicksign from "./embedded";
import { ClicksignWidgetContainer } from './styles';
import Cookies from 'js-cookie';

export default function ClicksignWidget() {
    const router = useRouter()

    const storeClicksign = useStoreClickSign()
    const clickSign = storeClicksign.data
    const clickSignKey = Cookies.get("clickSignKey")

    const storeUser = useStoreUser()

    const [widget, setWidget] = useState(null);

    useEffect(() => {
        if (widget) {
            widget.unmount();
        }

        const run = () => {
            const widgetInstance = new Clicksign(clickSignKey);

            widgetInstance.endpoint = 'https://app.clicksign.com';
            widgetInstance.origin = window.location.protocol + '//' + window.location.host;

            widgetInstance.mount('clicksign-container');

            widgetInstance.on('signed', function (event) {
                storeUser.updateUser({ hasSignContract: true })
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
            <div id="clicksign-container" />
        </ClicksignWidgetContainer>

    )
};