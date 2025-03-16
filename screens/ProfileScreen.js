import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GamificationContext } from '../context/GamificationContext';

const ProfileScreen = () => {
  const { xp, bits, streak } = useContext(GamificationContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Perfil</Text>
      <Text style={styles.statsText}>XP: {xp}</Text>
      <Text style={styles.statsText}>Bits: {bits}</Text>
      <Text style={styles.statsText}>Racha: {streak} días</Text>
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
  statsText: {
    fontSize: 18,
    color: '#052659',
    marginBottom: 10,
  },
});

export default ProfileScreen;