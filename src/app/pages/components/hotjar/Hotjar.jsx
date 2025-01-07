import Script from 'next/script';

export default function Hotjar({ hotjarId }) {
    return (
        <>
            {hotjarId && (
                <div></div>
            )}
        </>
    );
}
