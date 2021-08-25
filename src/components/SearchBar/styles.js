import styled from 'styled-components'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import { COLORS, SHADOW } from '../../theme'


export const BarContainer = styled.View`
    background-color: ${COLORS.ligthGray};
    padding-bottom: ${wp(2)}px; 
`

export const Bar = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: ${wp(96)}px;
    height: ${hp(5)}px;
    border-width: ${wp(0.5)}px;
    border-color: ${COLORS.ligthGray};
    border-radius: ${wp(5)}px;
    margin-top: ${wp(2)}px; 
    margin-left: ${wp(2)}px;
    margin-right: ${wp(2)}px;
    background-color: ${COLORS.white};
    padding-left: ${wp(2)}px;
    padding-right: ${wp(2)}px;
`

export const Input = styled.TextInput`
    flex:1;
`

export const Icon = styled.Image`
    width: ${wp(8)}px;
    height: ${wp(8)}px;
    tint-color: ${COLORS.gray}
`