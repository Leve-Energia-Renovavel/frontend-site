import { NextBill, NextBillDivider, NextBillInfo } from './styles';

export default function DashboardInvoicesDummy() {
    return (
        <>
            {Array.from({ length: 2 }, (_, index) => (
                <NextBill key={index}>
                    <h6 className='billDate'>Mês / Ano</h6>
                    <NextBillInfo status={"due"}>
                        <h6 className='value'>R$ 0,00</h6>
                        <p className='status'>Em aberto</p>
                    </NextBillInfo>
                    <NextBillInfo>
                        <p className='label'>Vencimento</p>
                        <p className='info'>00/00/1900</p>
                    </NextBillInfo>
                    <NextBillDivider className='divider' />
                    <NextBillInfo>
                        <p className='label'>Consumo</p>
                        <p className='info'>000,0KWh</p>
                    </NextBillInfo>
                    <NextBillDivider className='divider' />
                </NextBill>
            ))}
        </>
    );
}
