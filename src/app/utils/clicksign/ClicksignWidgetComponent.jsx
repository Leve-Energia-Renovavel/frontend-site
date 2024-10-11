/* eslint-disable react-hooks/exhaustive-deps */
import { useStoreClickSign, useStoreUser } from '@/app/hooks/useStore';
import { finishSignup } from '@/app/service/contract-service/ContractService';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Clicksign from "./embedded";
import { ClicksignComponentContainer as Container } from './styles';

export default function ClicksignWidgetComponent({ uuid }) {

    const router = useRouter()

    const storeUser = useStoreUser()
    const storeClicksign = useStoreClickSign()

    const clickSign = storeClicksign.data
    const clickSignKey = Cookies.get("clickSignKey")

    const key = clickSignKey ? clickSignKey : clickSign.key

    const [widget, setWidget] = useState(null);

    useEffect(() => {
        if (widget) {
            widget.unmount();
        }

        const run = () => {
            const widgetInstance = new Clicksign(key);

            widgetInstance.endpoint = 'https://app.clicksign.com';
            widgetInstance.origin = window.location.protocol + '//' + window.location.host;

            widgetInstance.mount('clicksign-container');

            widgetInstance.on('signed', async function (event) {
                storeUser.updateUser({ hasSignContract: true })
                await finishSignup(router, uuid)
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
    }, [clickSignKey, key]);

    return (
        <>
            <Container>
                <div id="clicksign-container" />
            </Container>
        </>
    )
}