import { VideoContainer } from './styles'

export default function LandingPageVideo() {
    const videoId = "Zs9r8xWwn3I"
    return (
        <VideoContainer>
            <iframe
                className='embededVideo'
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Video da Leve Energia Renovavel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </VideoContainer>
    )
}