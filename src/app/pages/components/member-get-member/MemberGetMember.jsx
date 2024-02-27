import React from 'react';
import { CodeButton, MemberGetMemberContainer, MemberGetMemberMain, SendInviteButton, ShareButton, TitleContainer } from './styles';
import { Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
export default function MemberGetMember() {
    return (
        <MemberGetMemberContainer>
            <TitleContainer>
                <Typography>A vida é Leve, né? Convide outros para ter o mesmo benefício!
                    Eles só precisam usar seu código na hora da inscrição =)</Typography>
            </TitleContainer>
            <MemberGetMemberMain>
                <CodeButton>
                    <ContentCopyIcon />
                    X36UY
                </CodeButton>
                <div>
                    <SendInviteButton>
                        <EmailIcon />
                        Enviar Convite</SendInviteButton>
                    <ShareButton>
                        <WhatsAppIcon />
                        Compartilhar
                    </ShareButton>
                </div>
            </MemberGetMemberMain>
        </MemberGetMemberContainer>

    );
}
