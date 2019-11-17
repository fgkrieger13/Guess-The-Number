import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import colors from '../constants/colors';
import Card from '../components/Card';




const GameOverScreen = props => {



  return (
   <View style={styles.screen}>
       <Card style={styles.size}>
       <Text style={styles.textHead}>Game is Over</Text>
       <Text style={styles.text}>Number of Rounds: {props.numRounds}</Text>
       <Text style={styles.text}>Number Was: {props.userNumber}</Text>
       <Button style={styles.button} color={colors.primary} title="NEW GAME" onPress={props.onRestart}/>
       </Card>
   </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        marginTop: 20,
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHead: {
        marginTop: 20,
        fontSize: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    size: {
        width: "60%",
        height: "40%"
    },
    button: {
        paddingTop: 30,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default GameOverScreen;