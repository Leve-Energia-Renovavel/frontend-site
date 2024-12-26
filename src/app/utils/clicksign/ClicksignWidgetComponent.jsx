/* eslint-disable react-hooks/exhaustive-deps */
import { useStoreClickSign, useStoreUser } from '@/app/hooks/stores/useStore';
import { finishSignup } from '@/app/service/contract-service/ContractService';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Clicksign from "./embedded";
import { ClicksignComponentContainer as Container } from './styles';

export default function ClicksignWidgetComponent({ uuid }) {
    const router = useRouter();
    const storeUser = useStoreUser();
    const storeClicksign = useStoreClickSign();

    const clickSignKey = Cookies.get("clickSignKey") || storeClicksign.data.key;
    const [widget, setWidget] = useState(null);

    useEffect(() => {
        if (!clickSignKey) return; // Certifica que há uma chave válida

        const widgetInstance = new Clicksign(clickSignKey);
        widgetInstance.endpoint = 'https://app.clicksign.com';
        widgetInstance.origin = `${window.location.protocol}//${window.location.host}`;
        widgetInstance.mount('clicksign-container');

        widgetInstance.on('signed', async () => {

            storeUser.updateUser((prevState) => ({
                ...prevState,
                hasSignContract: true,
                isFirstAccess: true,
                hasOpenedSharedAccessModal: false,
            }));
            await finishSignup(router, uuid);
        });

        setWidget(widgetInstance);

        return () => widgetInstance.unmount();
    }, [clickSignKey, router]);

    return (
        <Container className="clicksignContainer">
            <div id="clicksign-container" />
        </Container>
    );
}
