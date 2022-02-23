import { StyleSheet, View } from 'react-native'
import React from 'react'
import Players from '../components/players/Players'
import Pitch from '../components/pitch/Pitch'
import ButtonAction from '../components/button/Button'

export default function HomePage({ players, actions }: any) {
    return (
        <View style={styles.playerWrapper}>
            <View>
                <Players players={players} isCompetitor={false} />
            </View>
            <View style={styles.content}>
                <View style={styles.pitch}>
                    <Pitch />
                </View>
                <View style={styles.listAction}>
                    {
                        actions.map((action: any) => {
                            return (
                                <ButtonAction key={action.id} length={actions.length} action={action} />
                            )
                        })
                    }
                </View>
            </View>
            <View>
                <Players players={players} isCompetitor={true} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flexGrow: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    playerWrapper: {
        padding: 10,
        backgroundColor: '#9ED0C5',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    pitch: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        flexGrow: 1,
        marginBottom: 10,
        padding: 10,
    },

    listAction: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 'auto',
        height: 75,
        padding: 4,
        backgroundColor: '#FFF',
        borderRadius: 5,
        justifyContent: 'center'
    }
})