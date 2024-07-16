"use client"

import { useStoreUser } from "@/app/hooks/useStore";
import { useState } from "react";
import { CodeButton, CodeContainer, MemberGetMemberContainer as Container, MemberGetMemberContent as Content, CopyIcon, MemberGetMemberCodeBox, MessageIcon, ShareButton, ShareContainer, MemberGetMemberTextContainer as TextContainer, WhatsIcon } from "./styles";

export default function NewMemberGetMember() {

    const [copiedToClipboard, setCopiedToClipboard] = useState(false)

    const storeUser = useStoreUser()
    const user = storeUser?.user

    console.log("user --->>", user)

    const handleCopyToClipboard = () => {
        setCopiedToClipboard(current => !current)
        navigator.clipboard.writeText(user.memberGetMemberCode)
    }

    return (
        <Container>
            <h2 className="title">Indique e economize mais</h2>
            <Content>
                <TextContainer>
                    <span><span className="highlighted">O bolso está mais Leve?</span> Convide outros para ter o mesmo benefício e deixe sua fatura ainda mais Leve! <span className="highlighted">Ganhe R$ 50</span> para cada amigo que contratar o plano da Leve com o seu código.</span>
                    <span className="share">Compartilhe o código ao lado com seus amigos e colegas:</span>
                </TextContainer>
                <MemberGetMemberCodeBox>
                    <p>Seu código de indicação LEVE:</p>

                    <CodeContainer>
                        <p className="memberGetMemberCode">{user?.memberGetMemberCode}</p>
                        <CodeButton onClick={() => handleCopyToClipboard()}>
                            {copiedToClipboard ? <span>Copiado!</span> :
                                (<>
                                    <span>Copiar</span>
                                    <CopyIcon className="copyIcon" />
                                </>)}

                        </CodeButton>
                    </CodeContainer>


                    <ShareContainer>
                        <ShareButton sendInvite>
                            <MessageIcon />
                            <span>Enviar Convite</span>
                        </ShareButton>
                        <ShareButton share>
                            <WhatsIcon />
                            <span>Compartilhar</span>
                        </ShareButton>
                    </ShareContainer>

                </MemberGetMemberCodeBox>
            </Content>
        </Container>
    )
}