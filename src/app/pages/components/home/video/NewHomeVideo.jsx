"use client"

import Image from 'next/image';
import thumbnail from '../../../../../resources/img/capa-manifesto.png';
import { ButtonContainer, NewHomeVideoContainer, VideoContainer } from './styles';
import { useState } from 'react';

export default function NewHomeVideo() {

    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const videoId = "Zs9r8xWwn3I"

    return (
        <NewHomeVideoContainer className='homeVideoContainer'>
            <p className='title'>Quer saber mais sobre nós?</p>
            <p className='subtitle'>Assista ao nosso vídeo manifesto</p>

            <VideoContainer>
                {!isPlaying ? (
                    <Image src={thumbnail} className="videoThumbnail"
                        alt={"Thumbnail do Vídeo da Leve Energia Renovavel"}
                        priority={false}
                        loading='lazy'
                        onClick={handlePlay} />
                ) : (
                    <iframe
                        className='embededVideo'
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title="Video da Leve Energia Renovavel"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                )}
            </VideoContainer>

            <ButtonContainer className='leveFooterYouTubeVideoButton'>
                <p className='checkOurYouTubeChannel'>Conheça nosso canal no YouTube</p>
            </ButtonContainer>
        </NewHomeVideoContainer>
    )
}