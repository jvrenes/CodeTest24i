// Libraries
import React, { useEffect, useState } from 'react'
import { Dimensions, StatusBar, ActivityIndicator, Keyboard } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { debounce } from 'lodash'

// Components
import ScrollMedia from '../../components/ScrollMedia';
import SearchBar from '../../components/SearchBar';
import ScrollSearchResults from '../../components/ScrollSearchResults';

// Styled Components
import {
    ActivityContainer,
    Container,
    HeroContainer,
    HeroDescription,
    HeroTitle,
    PopularFilmContainer,
    PopularFilmImage,
    Scrollable
} from './styles'

// Helpers
import {
    heroDescriptionShortner,
    heroTitleShortner
}
    from '../../utils/helpers'

// Theme
import { COLORS } from '../../theme'

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.95);

const DashboardScreen = ({
    family,
    documentary,
    getPopularMovies,
    getPopularTv,
    getFamilyMovies,
    getDocumentary,
    getSearch,
    clearSearch,
    popularMovies,
    popularTv,
    navigation,
    search,
    ui,
}) => {

    const [searchTerm, setSearchTerm] = useState(null)

    // Dispatchs actions on screen mounted
    useEffect(() => {
        getPopularMovies()
        getPopularTv()
        getFamilyMovies()
        getDocumentary()
    }, [])

    // Dispatchs getSearch action if the state of the searchtearm changes
    useEffect(() => {
        if (searchTerm) {
            getSearch(searchTerm)
        } else {
            clearSearch()
        }
    }, [searchTerm])

    // Hides keyboard when search results are retrieved and shown on screen
    useEffect(() => {
        if (search.length > 0) {
            Keyboard.dismiss()
        }
    },[search])

    // Delays the search for one second after the user stops tipyng avoiding not needer API calls
    const onChangeSearchInput = (text) => {
        debouncedSearch(text);
    };
    const debouncedSearch = debounce(function (text) {
        setSearchTerm(text)
    }, 1000);

    const renderMovies = ({ item }) => {
        return (
            <PopularFilmContainer
                onPress={() => navigation.navigate('Details', { data: item })}
            >
                <PopularFilmImage
                    source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }}
                    resizeMode='cover'
                />
                <HeroContainer>
                    <HeroTitle>{heroTitleShortner(item.title)}</HeroTitle>
                    <HeroDescription>{heroDescriptionShortner(item.overview)}</HeroDescription>
                </HeroContainer>
            </PopularFilmContainer>
        )
    }

    // Renders ActivityIndicator if any API calls is being made
    if (ui.isLoading) {
        return (
            <Container>
                <ActivityContainer>
                    <ActivityIndicator
                        size='large'
                        color={COLORS.primary}
                    />
                </ActivityContainer>

            </Container>
        )
    }

    return (

        <Container>
            <StatusBar
                animated={true}
                backgroundColor={COLORS.ligthGray}
                barStyle={'light-content'}
                hidden={false}
            />
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onChangeText={(text) => onChangeSearchInput(text)}
            />
            {
                // Render all Carousel if any search has been made
                !search || search.length == 0 ?
                    <Scrollable>
                        <Carousel
                            data={popularMovies}
                            renderItem={renderMovies}
                            sliderWidth={SLIDER_WIDTH}
                            itemWidth={ITEM_WIDTH}
                            layout={'stack'}
                            layoutCardOffset={100}
                            autoplay={true}
                            contentContainerCustomStyle={{
                                paddingVertical: 20,
                                height: Dimensions.get('window').width / 16 * 12
                            }}
                            containerCustomStyle={{
                                flexGrow: 0
                            }}
                        />
                        <ScrollMedia media={popularTv} title="Popular TV Movies" navigation={navigation} />
                        <ScrollMedia media={family} title="Family" navigation={navigation} />
                        <ScrollMedia media={documentary} title="Documentary" navigation={navigation} />
                    </Scrollable>
                    :
                    // Render all search results
                    <ScrollSearchResults media={search} title="Search Results" navigation={navigation} />
            }

        </Container>
    )
}

export default DashboardScreen