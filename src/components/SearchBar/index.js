// Libraries
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator, TouchableOpacity } from 'react-native'

// Styled components
import {
    Bar,
    BarContainer,
    Icon,
    Input,
} from './styles'

// Theme
import { lensIcon, deleteIcon } from '../../assets/icons'
import { COLORS } from '../../theme'

const SearchBar = ({
    onChangeText,
    loading,
    searchTerm,
    setSearchTerm,
    isSearching
}) => {

    const [word, setWord] = useState('')

    return (
        <BarContainer>
            <Bar>
                <Input
                    value={word}
                    onChangeText={(text) => {
                        onChangeText(text)
                        setWord(text)
                    }}
                />
                {/* Conditionally renders ActivityIndicator if the search is being made */}
                {
                    isSearching ?
                        <ActivityIndicator
                            size='large'
                            color={COLORS.gray}
                        />
                        :
                        <TouchableOpacity
                            onPress={() => {
                                setSearchTerm('')
                                setWord('')
                            }}
                        >
                            <Icon
                                source={searchTerm ? deleteIcon : lensIcon}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>
                }
            </Bar>
        </BarContainer>
    )
}

// Makes the state isSearching accesible into this component
const mapStateToProps = (state) => {
    return {
        isSearching: state.ui.isSearching
    }
}

export default connect(mapStateToProps)(SearchBar)