// Libraries
import React, { useState, useEffect } from 'react'

// Styled components
import { PlayButton } from '../../components/Buttons'
import {
    ButtonContainer,
    Container,
    Image,
    ImageContainer,
    InfoContainer,
    Subtitle,
    Title,
} from './styles'

const DetailsScren = ({
    navigation,
    route
}) => {

    const { data } = route.params
    const [play, setPlay] = useState(false)

    // Updates the navigation header with the media title
    useEffect(() => {
        navigation.setOptions({ title: data.title ? data.title : data.name })
    }, [])


    return (
        <Container>
            <ImageContainer>
                <Image source={{ uri: `https://image.tmdb.org/t/p/w500${data.backdrop_path}` }} />
                <ButtonContainer>
                    <PlayButton
                        onPress={() => {
                            setPlay(!play)
                            navigation.navigate('Video', { image: `https://image.tmdb.org/t/p/w500${data.backdrop_path}`, title: data.title ? data.title : data.name })
                        }}
                    />
                </ButtonContainer>
            </ImageContainer>
            <InfoContainer>
                <Title>{data.title ? data.title : data.name}</Title>
                <Subtitle>{data.overview}</Subtitle>
            </InfoContainer>
        </Container>
    )
}

export default DetailsScren