import Script from 'next/script';

export default function Hotjar({ hotjarId }) {
    return (
        <>
            {hotjarId && (
                <Script id='hotjar' type="text/partytown">
                    {`(function (h, o, t, j, a, r) {
                    h.hj =
                    h.hj ||
                    function () {
                        // eslint-disable-next-line prefer-rest-params
                        (h.hj.q = h.hj.q || []).push(arguments);
                        };
                        h._hjSettings = { hjid: ${hotjarId}, hjsv: 6 };
                        a = o.getElementsByTagName("head")[0];
                        r = o.createElement("script");
                        r.async = 0;
                        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                        a.appendChild(r);
                        })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");`}
                </Script>
            )}
        </>
    );
}
