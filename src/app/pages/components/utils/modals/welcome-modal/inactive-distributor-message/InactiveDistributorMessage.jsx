import { InactiveDistributorMessageContainer as Container } from "./styles";

export default function InactiveDistributorMessage() {
    return (
        <Container className="inactiveDistributorMessageContainer">
            <h6 className="title">Parabéns, você contratou a Leve!</h6>
            <p className="subtitle">As usinas que atenderão a sua região ainda estão em fase de construção.</p>
            <p className="descriptionPrimary">Mas, não fique triste, porque estamos trabalhando duro para você começar a economizar e ajudar a reduzir danos planeta o mais breve possível.</p>
            <p className="descriptionPrimary">Fique de olho nas atualizações que enviaremos no seu e-mail e Whatsapp.</p>
            <p className="descriptionSecondary">Enquanto isso, complete seu cadastro e garanta nosso benefícios sobre o máximo do seu consumo quando tudo tiver pronto.</p>
        </Container>
    )
}