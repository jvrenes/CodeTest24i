export function heroDescriptionShortner (text) {
    if (text.length > 70) {
        return text.substring(0, 70) + '...'
    } else {
        return text
    }
}

export function heroTitleShortner (text) {
    if (text.length > 15) {
        return text.substring(0, 15) + '...'
    } else {
        return text
    }
}

export function titleShortner (text) {
    if (text.length > 20) {
        return text.substring(0, 20) + '...'
    } else {
        return text
    }
}

export function formatTime (time) {
    var totalSecs = parseInt(time, 10);
    var minutes = Math.floor(totalSecs / 60)
    var seconds =  Math.floor(totalSecs - minutes * 60)
    
    if (minutes < 10) { minutes = '0' + minutes }
    if (seconds < 10) { seconds = '0' + seconds }

    return minutes + ':' +  seconds
}
