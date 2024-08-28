/* eslint-disable react-hooks/exhaustive-deps */
import { getClicksignKey } from '@/app/service/contract-service/ContractService';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Clicksign from "./embedded";
import { ClicksignComponentContainer as Container } from './styles';

export default function ClicksignWidgetDefault({ uuid }) {

    const [key, setKey] = useState(null)
    const router = useRouter()

    const [widget, setWidget] = useState(null);

    useEffect(() => {
        const fetchClicksignData = async () => {
            const clicksignKey = await getClicksignKey(uuid)
            setKey(clicksignKey)
        }
        fetchClicksignData()

        if (widget) {
            widget.unmount();
        }

        const run = () => {
            const widgetInstance = new Clicksign(key);

            widgetInstance.endpoint = 'https://app.clicksign.com';
            widgetInstance.origin = window.location.protocol + '//' + window.location.host;

            widgetInstance.mount('clicksign-container');

            widgetInstance.on('signed', function (event) {
            });

            setWidget(widgetInstance);

        };

        if (key && key != '') {
            run()
        }

        return () => {
            if (widget) {
                widget.unmount();
            }
        };


    }, [key]);

    return (
        <>
            <Container>
                <div id="clicksign-container" />
            </Container>
        </>
    )
}