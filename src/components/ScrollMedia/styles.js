import styled from 'styled-components'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import { COLORS, SHADOW } from '../../theme'

export const Card = styled.TouchableOpacity`
    width: ${wp(30)}px;
    height: ${wp(42)}px;
    box-shadow: ${SHADOW};
    margin-left: ${wp(2.5)}px;
    border-radius: 5px;
    background-color: ${COLORS.white};
    elevation: 6
`

export const CardImage = styled.Image`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: ${wp(30)}px;
    height: ${wp(25)}px;
`   

export const Title = styled.Text`
    font-family: 'Roboto-Medium';
    font-size: ${wp(5)}px;
    color: ${COLORS.textColor};
    margin-left: ${wp(2.5)}px;
    margin-bottom: ${wp(2.5)}px;
`

export const CardTitle = styled.Text`
    font-size: ${wp(3.5)}px;
    font-family: 'Roboto-Regular';
    color: black;
    padding: ${wp(1)}px;
`

export const RatingContainer = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Icon = styled.Image`
    height: ${wp(5)}px;
    width: ${wp(5)}px;
    tint-color: rgb(245, 197, 24);
`

export const InfoContainer = styled.View`
    flex: 1;
    justify-content: space-between;
`

export const ScrollMediaContainer = styled.View`
    background-color: ${COLORS.ligthGray};
`