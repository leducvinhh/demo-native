import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import images from '../../assets'

export default function Pitch() {
    const  handlePress = (evt: any) => {
        alert(`x: ${evt.nativeEvent.locationX} - y: ${evt.nativeEvent.locationY}`)
    }
    return (
        <TouchableOpacity activeOpacity={1} style={styles.imageWrapper} onPress={(evt) => handlePress(evt)}>
            <Image
                style={styles.image}
                source={images.pitch}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageWrapper: {
        flex: 1,
        width: '100%',
        top: 65
    },
    image: {
        flex: 1,
        width: 'auto',
        resizeMode: 'contain',
    },
})