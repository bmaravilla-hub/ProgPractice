import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Redirigir a la siguiente pantalla después de 5 segundos
    const timer = setTimeout(() => {
      navigation.replace('Welcome'); // Cambia 'Login' por la pantalla que desees
    }, 5000); // 5000 ms = 5 segundos

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Logo de la aplicación */}
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      {/* Avatar */}
      <Image source={require('../assets/avatar.png')} style={styles.avatar} />

      {/* Ondas en la parte inferior (estáticas) */}
      <Image source={require('../assets/waves.png')} style={styles.wave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Fondo blanco o el color que prefieras
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginBottom: 30,
  },
  wave: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100, // Ajusta la altura según la imagen de ondas
    resizeMode: 'cover', // Asegura que la imagen cubra el ancho completo
  },
});

export default SplashScreen;