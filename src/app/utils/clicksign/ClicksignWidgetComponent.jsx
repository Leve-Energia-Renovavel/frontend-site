/* eslint-disable react-hooks/exhaustive-deps */
import { useStoreClickSign, useStoreUser } from '@/app/hooks/useStore';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Clicksign from "./embedded";
import { ClicksignComponentContainer as Container } from './styles';

export default function ClicksignWidgetComponent() {

    const router = useRouter()

    const storeUser = useStoreUser()
    const storeClicksign = useStoreClickSign()

    const clickSign = storeClicksign.data
    const clickSignKey = Cookies.get("clickSignKey")

    const key = clickSignKey ? clickSignKey : clickSign.key

    const [widget, setWidget] = useState(null);

    const button = document.querySelector('._XButton_1p73z_1');
    if (button) {
        button.addEventListener('click', () => {
            console.log('Button clicked');
        })
    };

    useEffect(() => {
        if (widget) {
            widget.unmount();
        }

        const run = () => {
            const widgetInstance = new Clicksign(key);

            widgetInstance.endpoint = 'https://app.clicksign.com';
            widgetInstance.origin = window.location.protocol + '//' + window.location.host;

            widgetInstance.mount('clicksign-container');

            widgetInstance.on('signed', function (event) {
                storeUser.updateUser({ hasSignContract: true })
                router.push(`/signup/success`)
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