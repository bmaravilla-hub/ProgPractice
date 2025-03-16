import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo en la esquina superior izquierda */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      {/* Avatar en la esquina superior derecha */}
      <View style={styles.avatarContainer}>
        <Image source={require('../assets/pollito.png')} style={styles.avatar} />
      </View>

      {/* Contenido principal */}
      <Text style={styles.welcomeText}>Bienvenido, Usuario</Text>

      {/* Barra de Progreso */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Tu progreso en programación</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '30%' }]} />
        </View>
        <Text style={styles.percentageText}>30% completado</Text>
      </View>

      {/* Puntuación y Logros */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Puntuación Total: 1,250 puntos</Text>
        <Text style={styles.statsText}>Logros Desbloqueados: 5</Text>
      </View>

      {/* Botones de Lenguajes */}
      <TouchableOpacity
        style={styles.languageButton}
        onPress={() => navigation.navigate('Courses')}
      >
        <Text style={styles.languageButtonText}>Explorar Cursos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  avatarContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#052659',
    marginTop: 100,
    marginBottom: 20,
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressText: {
    fontSize: 16,
    color: '#548383',
    marginBottom: 10,
  },
  progressBar: {
    width: '100%',
    height: 10,
    backgroundColor: '#C1E8FF',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#7DA0CA',
  },
  percentageText: {
    fontSize: 14,
    color: '#052659',
    marginTop: 5,
  },
  statsContainer: {
    marginBottom: 20,
  },
  statsText: {
    fontSize: 16,
    color: '#548383',
    marginBottom: 5,
  },
  languageButton: {
    backgroundColor: '#7DA0CA',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  languageButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;