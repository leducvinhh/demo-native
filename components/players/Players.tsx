import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'

export default function Players({ players, isCompetitor }: any) {
  const handleTouchPlayer = (players: any) => {
    alert(players.number);
  }
  return (
    <View style={styles.playerWrapper}>
      {
        players.map((player: any, index: any) => {
          return <TouchableOpacity activeOpacity={0.7} onPress={() => handleTouchPlayer(player)} key={index} style={index < players.length - 1 ? styles.playerNotLast : styles.player}>
            <Text style={isCompetitor ? styles.playerCompetitor : styles.playerNumber}>{player.number}</Text>
            <Text style={styles.playerPosition}>{player.position}</Text>
            <Text style={styles.playerName}>{player.name}</Text>
          </TouchableOpacity>
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  playerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: 190,
    flexShrink: 0,
  },

  player: {
    width: 190,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
  },

  playerNotLast: {
    width: 190,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    borderRadius: 5,
    overflow: 'hidden',
  },


  playerNumber: {
    width: 35,
    height: 50,
    backgroundColor: '#65377B',
    textAlign: 'center',
    lineHeight: 50,
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  playerPosition: {
    width: 35,
    height: 50,
    backgroundColor: '#EEE',
    textAlign: 'center',
    lineHeight: 50,
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  playerName: {
    width: 120,
    height: 50,
    backgroundColor: '#FFF',
    textAlign: 'center',
    lineHeight: 50,
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  playerCompetitor: {
    width: 35,
    height: 50,
    backgroundColor: '#468666',
    textAlign: 'center',
    lineHeight: 50,
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
})