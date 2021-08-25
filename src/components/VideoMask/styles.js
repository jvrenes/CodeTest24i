import styled from 'styled-components'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

import { COLORS, SHADOW } from '../../theme'


export const Container = styled.View`
    flex:1;
    padding: ${wp(5)}px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -5px;
    background-color: rgba(0,0,0,0.5);
    z-index: 1;
`

export const Section = styled.View`
    flex:1;
    ${props => props.row && 'flex-direction: row'};
    ${props => props.alignCenter && 'align-items: center'};
    ${props => props.between && 'justify-content: space-around'};
`

export const Title = styled.Text`
    font-family: 'Roboto-Medium';
    font-size: ${wp(5)}px;
    margin-left: ${wp(5)}px;
    margin-right: ${wp(5)}px;
    color: ${COLORS.white};
`

export const Icon = styled.Image`
    ${props => props.small && `width: ${wp(8)}px;`};
    ${props => props.small && `height: ${wp(8)}px;`};
    ${props => props.large && `width: ${wp(12)}px;`};
    ${props => props.large && `height: ${wp(12)}px;`};
    tint-color: ${COLORS.white};
`

export const Subsection = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`