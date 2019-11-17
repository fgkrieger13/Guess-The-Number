import React, {useState} from 'react';
import { 
    StyleSheet,
    Text, 
    View, 
    TouchableWithoutFeedback, 
    Button, 
    Keyboard,
    Alert,
} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {

    const [confirmed, setConfirmed] = useState(false)

    const [selectedNumber, setselectedNumber] = useState()

    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = 
            <Card style={styles.output}>
                <Text style={styles.outputText}>Chosen Number: 
                </Text>
                <NumberContainer children = {selectedNumber}/>
                    <Button color = {colors.primary} title= "START GAME"
                    onPress={() => props.onStartGame(selectedNumber)}/>
            </Card>
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'number must be a number between 1-99',
            [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return;
        }
        setConfirmed(true);
        setselectedNumber(chosenNumber)
        setEnteredValue('');
        Keyboard.dismiss();
    }

  return (
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
    <View style={styles.screen}>
        <Text style={styles.title}>Start A New Game!</Text>
        <Card style={styles.inputContainer}>
            <Text>Select A Number</Text>
            <Input style={styles.Input} blurOnSubmit 
            autoCapitalize="none" autoCorrect={false}
            keyboardType='number-pad' maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}/>
            <View style={styles.buttonContainer}>
               <View style={styles.button}><Button  color={colors.accent} title="Reset" onPress={resetInputHandler}/></View>
               <View style={styles.button}><Button color={colors.primary} title="Confirm" onPress={confirmInputHandler}/></View>
            </View>
           </Card>
           {confirmedOutput}
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
   screen: {
       flex: 1,
       padding: 1,
       alignItems: 'center',
   },
   title: {
        fontSize: 20,
        marginVertical: 10,
   },
   buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: "space-between",
        paddingHorizontal: 15,
   },
   inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: 'center',
   },
   button: {
       backgroundColor: 'white',
       width: 100,
       shadowColor: 'black',
       shadowOffset: {width:0, height: 2},
       shadowRadius: 6,
       shadowOpacity: 0.26,
       borderRadius: 1,

   },
   
   Input: {
       width: 50,
       textAlign: 'center',
   },
   output: {
        alignItems: 'center',
       marginTop: 20,
   },
   outputText: {
       fontSize: 18,
   }
});

export default StartGameScreen;