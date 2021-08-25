import styled from 'styled-components'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import { COLORS } from '../../theme'

export const Container = styled.ScrollView`
    flex: 1;
    background-color: ${COLORS.ligthGray};
`

export const Image = styled.Image`
    width: ${wp(100)}px;
    height: ${wp(57)}px;
`

export const ImageContainer = styled.View`
    width: ${wp(100)}px;
    height: ${wp(57)}px;
    justify-content: center;
    align-items: center;
    background-color: black;
    z-index: 1;
`

export const ButtonContainer = styled.View`
    position: absolute;
    width: ${wp(15)}px;
    height: ${wp(15)}px;
    justify-content: center;
    align-items: center;
    bottom: -${wp(7.5)}px;
    right: ${wp(5)}px;
`

export const InfoContainer = styled.View`
    flex: 1;
    padding-top: ${wp(10)}px;
    padding-left: ${wp(5)}px;
    padding-right: ${wp(5)}px;
    background-color: ${COLORS.ligthGray};
`

export const Title = styled.Text`
    font-family: 'Roboto-Light';
    font-size: ${wp(10)}px;
    color: ${COLORS.textColor};
`

export const Subtitle = styled.Text`
    font-family: 'Roboto-Light';
    font-size: ${wp(6)}px;
    color: ${COLORS.textColor};
    margin-top: ${wp(6)}px;
`

export const Description = styled.Text`
    font-family: 'Roboto-Medium';
    font-size: ${wp(10)}px;
    color: ${COLORS.textColor};
`
