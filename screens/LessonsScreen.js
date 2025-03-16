import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const lessons = [
  { id: '1', title: 'Escribir Código', type: 'Lección', progress: 30 },
  { id: '2', title: 'Memoria y Variables', type: 'Lección', progress: 10 },
  { id: '3', title: 'Práctica Generada por IA', type: 'Refuerzo', progress: 0 },
];

const LessonsScreen = ({ route, navigation }) => {
  const { course } = route.params;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.lessonCard}
      onPress={() => navigation.navigate('Exercise', { lesson: item.title })}
    >
      <Text style={styles.lessonTitle}>{item.title}</Text>
      <Text style={styles.lessonType}>{item.type}</Text>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${item.progress}%` }]} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{course}</Text>
      <FlatList
        data={lessons}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#052659',
    marginBottom: 20,
  },
  lessonCard: {
    backgroundColor: '#C1E8FF',
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
  },
  lessonTitle: {
    fontSize: 18,
    color: '#052659',
  },
  lessonType: {
    fontSize: 14,
    color: '#548383',
    marginBottom: 10,
  },
  progressBar: {
    width: '100%',
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#7DA0CA',
  },
});

export default LessonsScreen;