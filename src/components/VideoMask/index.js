// Libraries
import React from 'react'
import Slider from '@react-native-community/slider';
import {
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native'

// Styled components
import {
    Icon,
    Container,
    Section,
    Title,
    Subsection
} from './styles'

// Helpers
import { formatTime } from '../../utils/helpers'

// Assets and constants
import { arrowBackIcon, forwardIcon, nextIcon, pauseIcon, playIcon, previousIcon, rewindIcon } from '../../assets/icons'
import { COLORS } from '../../theme';

const VideoMask = ({
    title,
    navigation,
    paused,
    setPaused,
    rewind,
    forward,
    duration,
    position,
    playerRef
}) => {

    return (
        <Container>
            <Section row>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        small
                        source={arrowBackIcon}
                        resizeMode='contain'
                    />
                </TouchableOpacity>

                <Title>{title}</Title>
            </Section>

            <Section row between alignCenter>
                <TouchableOpacity
                    onPress={() => rewind()}
                >
                    <Icon
                        large
                        source={rewindIcon}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setPaused(!paused)}
                >
                    <Icon
                        large
                        source={paused ? playIcon : pauseIcon}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => forward()}
                >
                    <Icon
                        large
                        source={forwardIcon}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            </Section>
            <Section>
                <Subsection
                    style={{
                        marginHorizontal: hp(10),
                    }}
                > 
                    <TouchableOpacity
                        onPress={() => console.log('previous')}
                    >
                        <Icon
                            large
                            source={previousIcon}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => console.log('next')}
                    >
                        <Icon
                            large
                            source={nextIcon}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                </Subsection>
                <Subsection>
                    <Title>{formatTime(Math.floor(position))}</Title>
                    <Slider
                        minimumTrackTintColor={COLORS.white}
                        maximumTrackTintColor={COLORS.gray}
                        onSlidingComplete={(value) => playerRef.current.seek(duration * value)}
                        value={ position && duration ? position / duration : 0 }
                        style={{
                            width: '70%',
                        }}
                    /> 
                    <Title>{formatTime(Math.floor(duration))}</Title>
                </Subsection>
            </Section>
        </Container>
    )
}

export default VideoMask