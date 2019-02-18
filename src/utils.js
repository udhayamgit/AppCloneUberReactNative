import { Platform, PixelRatio } from 'react-native'

const getPixelSize = (pixels) => {
    return Platform.select({
        ios: pixels,
        android: PixelRatio.getPixelSizeForLayoutSize(pixels)
    })
}

export {
    getPixelSize
}