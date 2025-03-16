import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const courses = [
  { id: '1', title: 'Introducción a Python', icon: require('../assets/python.jpg') },
  { id: '2', title: 'JavaScript Básico', icon: require('../assets/javascript.png') },
  { id: '3', title: 'Fundamentos de C++', icon: require('../assets/cpp.png') },
];

const CoursesScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.courseCard}
      onPress={() => navigation.navigate('Lessons', { course: item.title })}
    >
      <Image source={item.icon} style={styles.courseIcon} />
      <Text style={styles.courseTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cursos Disponibles</Text>
      <FlatList
        data={courses}
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
  courseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1E8FF',
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
  },
  courseIcon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  courseTitle: {
    fontSize: 18,
    color: '#052659',
  },
});

export default CoursesScreen;