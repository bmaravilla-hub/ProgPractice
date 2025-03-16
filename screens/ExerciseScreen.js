import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { GamificationContext } from '../context/GamificationContext';

const ExerciseScreen = ({ route }) => {
  const { lesson } = route.params;
  const { addXp, addBits, incrementStreak } = useContext(GamificationContext);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = () => {
    if (lesson === 'Completar Código' && answer.trim() === 'print("Hello World")') {
      setFeedback('¡Correcto!');
      addXp(10);
      addBits(5);
      incrementStreak();
    } else if (lesson === 'Selección Múltiple' && selectedOption === 'Python') {
      setFeedback('¡Correcto!');
      addXp(10);
      addBits(5);
      incrementStreak();
    } else {
      setFeedback('Inténtalo de nuevo.');
    }
  };

  const renderExercise = () => {
    switch (lesson) {
      case 'Completar Código':
        return (
          <>
            <Text style={styles.question}>Completa el código para imprimir "Hello World":</Text>
            <TextInput
              style={styles.input}
              placeholder="Escribe tu código aquí"
              value={answer}
              onChangeText={setAnswer}
            />
          </>
        );
      case 'Selección Múltiple':
        return (
          <>
            <Text style={styles.question}>¿Cuál de los siguientes es un lenguaje de programación?</Text>
            <TouchableOpacity
              style={[styles.option, selectedOption === 'Python' && styles.selectedOption]}
              onPress={() => setSelectedOption('Python')}
            >
              <Text style={styles.optionText}>Python</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.option, selectedOption === 'HTML' && styles.selectedOption]}
              onPress={() => setSelectedOption('HTML')}
            >
              <Text style={styles.optionText}>HTML</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.option, selectedOption === 'CSS' && styles.selectedOption]}
              onPress={() => setSelectedOption('CSS')}
            >
              <Text style={styles.optionText}>CSS</Text>
            </TouchableOpacity>
          </>
        );
      case 'Arrastrar y Soltar':
        return (
          <>
            <Text style={styles.question}>Arrastra las palabras para completar la frase:</Text>
            <Text style={styles.dragDropText}>______ es un lenguaje de programación.</Text>
            <View style={styles.dragDropContainer}>
              <TouchableOpacity style={styles.dragDropOption}>
                <Text style={styles.dragDropOptionText}>Python</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.dragDropOption}>
                <Text style={styles.dragDropOptionText}>HTML</Text>
              </TouchableOpacity>
            </View>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>{lesson}</Text>
      {renderExercise()}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Verificar</Text>
      </TouchableOpacity>
      {feedback ? <Text style={styles.feedback}>{feedback}</Text> : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#052659',
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    color: '#052659',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#7DA0CA',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#C1E8FF',
    padding: 15,
    borderRadius: 5,
    marginVertical: 8,
  },
  selectedOption: {
    backgroundColor: '#7DA0CA',
  },
  optionText: {
    fontSize: 16,
    color: '#052659',
  },
  dragDropText: {
    fontSize: 18,
    color: '#052659',
    marginBottom: 20,
  },
  dragDropContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  dragDropOption: {
    backgroundColor: '#C1E8FF',
    padding: 15,
    borderRadius: 5,
  },
  dragDropOptionText: {
    fontSize: 16,
    color: '#052659',
  },
  button: {
    backgroundColor: '#7DA0CA',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  feedback: {
    fontSize: 16,
    color: '#052659',
    marginTop: 20,
  },
});

export default ExerciseScreen;