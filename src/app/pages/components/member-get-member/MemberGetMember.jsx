"use client"

import { useStoreUser } from '@/app/hooks/useStore';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { CodeButton, MemberGetMemberContainer, MemberGetMemberMain, SendInviteAndShareContainer, SendInviteButton, ShareButton, TitleContainer } from './styles';
export default function MemberGetMember() {

    const storeUser = useStoreUser()
    const user = useStoreUser().user

    const [copiedToClipboard, setCopiedToClipboard] = useState(false)

    const handleCopyToClipboard = () => {
        setCopiedToClipboard(current => !current)
        navigator.clipboard.writeText(user.memberGetMemberCode)
    }

    return (
        <MemberGetMemberContainer>
            <TitleContainer>
                <Typography>A vida é Leve, né? Convide outros para ter o mesmo benefício!
                    Eles só precisam usar seu código na hora da inscrição =)</Typography>
            </TitleContainer>
            <MemberGetMemberMain>
                <CodeButton onClick={() => handleCopyToClipboard()}>
                    {!copiedToClipboard ?
                        <>
                            <ContentCopyIcon />
                            {user.memberGetMemberCode}
                        </> :
                        <span>Copiado!</span>
                    }
                </CodeButton>
                <SendInviteAndShareContainer>
                    <SendInviteButton>
                        <EmailIcon />
                        Enviar Convite
                    </SendInviteButton>
                    <ShareButton>
                        <WhatsAppIcon />
                        Compartilhar
                    </ShareButton>
                </SendInviteAndShareContainer>
            </MemberGetMemberMain>
        </MemberGetMemberContainer>

    );
}
