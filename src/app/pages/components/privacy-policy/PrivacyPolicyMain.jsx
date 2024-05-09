"use client"

import { legalTopics } from "@/app/utils/helper/privacyPolicyHelper";
import { PolicyContainer as Container } from "./styles";
import DefaultButton from "../utils/buttons/DefaultButton";
import { useRouter } from "next/navigation";

export default function PrivacyPolicyMain() {
    const router = useRouter()

    return (
        <Container>
            <h1 className="mainTitle">POLÍTICA DE PRIVACIDADE</h1>
            <p className="lastUpdate">Atualizada em 16 de novembro de 2022.</p>
            <main>

                {legalTopics.map((topic, index) => {
                    return (
                        <section key={topic.title}>
                            <h2 className="topicTitle">{index + 1}. {topic.title}</h2>
                            {topic.description}
                        </section>
                    )
                })}
            </main>
            <div className="backButtonContainer">
                <DefaultButton variant="contained" text={"Voltar"} onClick={() => router.push("/")} />
            </div>
        </Container>
    )
}