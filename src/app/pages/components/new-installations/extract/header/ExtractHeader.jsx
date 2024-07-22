import { ExtractHeaderContainer, ExtractHeaderDate, ExtractHeaderDistributor, ExtractHeaderLeve } from "./styles";

export default function ExtractHeader() {
    return (
        <ExtractHeaderContainer>
            <ExtractHeaderDate>
                <span>Mês e Ano</span>
            </ExtractHeaderDate>
            <ExtractHeaderDistributor>
                <span>Concessionária</span>
            </ExtractHeaderDistributor>
            <ExtractHeaderLeve >
                <span>Leve Eneregia Renovável</span>
            </ExtractHeaderLeve>
        </ExtractHeaderContainer>
    )
}