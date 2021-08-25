import styled from 'styled-components'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import { COLORS, SHADOW } from '../../theme'

export const Container = styled.View`
    flex: 1;
    background-color: ${COLORS.ligthGray};
`

export const ActivityContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const Scrollable = styled.ScrollView`
    flex: 1;
    background-color: ${COLORS.ligthGray};
`

export const PopularFilmContainer = styled.TouchableOpacity`
    elevation: 6;
    box-shadow: ${SHADOW};
    border-radius: 5px;
`

export const PopularFilmImage = styled.Image`
    width: 100%;
    height: 100%;
    box-shadow: ${SHADOW};
    background-color: black;
    border-radius: 5px;
`

export const CarouselContainer = styled.View`
    width: ${wp(90)}px;
    height: ${wp(50)}px;
`

export const HeroContainer = styled.View`
    position: absolute;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
`
export const HeroTitle = styled.Text`
    font-family: 'Roboto-Medium';
    font-size: ${wp(8)}px;
    color: ${COLORS.white};
    background-color: rgba(0, 0, 0, 0.3);
    padding-horizontal: ${wp(6)}px;
    padding-top: ${wp(3)}px;
`

export const HeroDescription = styled.Text`
    font-family: 'Roboto-Regular';
    font-size: ${wp(4)}px;
    color: ${COLORS.white};
    background-color: rgba(0, 0, 0, 0.3);
    padding-horizontal: ${wp(6)}px;
    padding-bottom: ${wp(6)}px;
`