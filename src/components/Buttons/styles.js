import styled from 'styled-components'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import { COLORS, SHADOW } from '../../theme'


export const RoundButtonContainer = styled.TouchableOpacity`
    width: ${wp(15)}px;
    height: ${wp(15)}px;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.primary};
    border-radius: ${wp(7.5)}px;
    box-shadow: ${SHADOW}
    elevation: 6;
`

export const PlayIcon = styled.Image`
    tint-color: ${COLORS.white};
    width: ${wp(10)}px;
    height: ${wp(10)}px;
`