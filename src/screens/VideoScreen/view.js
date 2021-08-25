// Libraries
import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, StatusBar, View } from 'react-native'
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';

// Components
import VideoMask from '../../components/VideoMask';

// Styled components
import { Container } from './styles'

// Assets and constants
import videoDemo from '../../assets/video/big_buck_bunny.mp4'
import { COLORS } from '../../theme'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const VideoScreen = ({ route, navigation }) => {

    const { image, title } = route.params

    // State Hooks
    const [showMask, setShowMask] = useState(true)
    const [paused, setPaused] = useState(false)
    const [duration, setDuration] = useState(0)
    const [position, setPosition] = useState(0)

    const playerRef = useRef()

    // Lifecicle Hooks
    useEffect(() => {
        Orientation.lockToLandscape()
        return () => {
            Orientation.lockToPortrait()
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setShowMask(false)
            Orientation.lockToLandscape()
        }, 3000)
        return () => {
            Orientation.lockToPortrait()
        }
    }, [])

    // Handle Play
    const handleOnLoad = ({duration}) => {
        setDuration(duration)
    }

    const handleOnProgress = ({ currentTime }) => {
        setPosition(currentTime)
    }

    const handleRewind = () => {
        if (position < 15) {
            playerRef.current.seek(0)
        } else {
            playerRef.current.seek(position - 15)
        }
    }

    const handleForward = () => {
            playerRef.current.seek(position + 15)
    }

    return (
        <>
            <StatusBar
                animated={true}
                hidden={true} />

            <Container
                onPress={() => {
                    setShowMask(true)
                    setTimeout(() =>{
                        setShowMask(false)
                    }, 3000)
                }}
            >
                <View>
                    {
                        showMask &&
                        <VideoMask
                            navigation={navigation}
                            title={title}
                            paused={paused}
                            setPaused={setPaused}
                            rewind={handleRewind}
                            forward={handleForward}
                            duration={duration}
                            position={position}
                            playerRef={playerRef}
                        />
                    } 
                    <Video
                        fullscreen={true}
                        source={videoDemo}
                        resizeMode="contain"
                        ref={playerRef}
                        true={true}
                        poster={image}
                        ref={playerRef}
                        paused={paused}
                        onLoad={handleOnLoad}
                        onProgress={handleOnProgress}
                        style={{
                            width: windowHeight,
                            height: windowWidth,
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            backgroundColor: COLORS.black

                        }}
                    />
                </View>
            </Container>
        </>
    )
}

export default VideoScreen