import { Skeleton } from '@mui/material';
import { NextBill, NextBillDivider, NextBillInfo } from './styles';

export default function DashboardInvoicesDummy() {
    return (
        <>
            {Array.from({ length: 2 }, (_, index) => (
                <NextBill key={index}>
                    <h6 className='billDate'>Mês / Ano</h6>
                    <NextBillInfo status={"due"}>
                        <Skeleton variant="text" sx={{ fontSize: '45px' }} width={120}/>
                        <Skeleton variant="text" sx={{ fontSize: '30px' }} width={80}/>
                    </NextBillInfo>
                    <NextBillInfo>
                        <p className='label'>Vencimento</p>
                        <Skeleton variant="text" sx={{ fontSize: '18px' }} width={80}/>
                    </NextBillInfo>
                    <NextBillDivider className='divider' />
                    <NextBillInfo>
                        <p className='label'>Créditos de energia</p>
                        <Skeleton variant="text" sx={{ fontSize: '18px' }} width={80}/>
                    </NextBillInfo>
                    <NextBillDivider className='divider' />
                </NextBill>
            ))}
        </>
    );
}
