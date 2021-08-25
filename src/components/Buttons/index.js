// Libraries
import React from 'react'

// Styled components
import {
    PlayIcon,
    RoundButtonContainer
} from './styles'

// Icon
import { playIcon } from '../../assets/icons'

export const PlayButton = ({ onPress }) => {
    return (
        <RoundButtonContainer
            onPress={onPress}
        >
            <PlayIcon 
                source={playIcon}
                resizeMode='contain'
            />
        </RoundButtonContainer>
    )
}