import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Opción 2: Usar íconos vectoriales

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica para iniciar sesión
    console.log('Iniciar sesión con:', username, password);
    navigation.navigate('Home'); // Redirige a la pantalla principal después del login
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword'); // Redirige a la pantalla de recuperación de contraseña
  };

  const handleGoBack = () => {
    navigation.goBack(); // Regresa a la pantalla anterior (WelcomeScreen)
  };

  return (
    <View style={styles.container}>
      {/* Ondas en la parte superior */}
      <Image source={require('../assets/login-wave.png')} style={styles.wavesTop} />

      {/* Ícono de regresar */}
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        {/* Opción 1: Usar una imagen */}
        {/* <Image source={require('../assets/back-icon.png')} style={styles.backIcon} /> */}

        {/* Opción 2: Usar íconos vectoriales */}
        <Icon name="arrow-back" size={30} color="#6200ee" />
      </TouchableOpacity>

      {/* Contenedor para el título y el avatar */}
      <View style={styles.headerContainer}>
        {/* Título */}
        <Text style={styles.title}>¡Bienvenido!</Text>

        {/* Avatar */}
        <Image source={require('../assets/login-avatar.png')} style={styles.avatar} />
      </View>

      {/* Campo de Usuario */}
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      {/* Campo de Contraseña */}
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Enlace de "Olvidé mi contraseña" */}
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>¿Olvidé mi contraseña?</Text>
      </TouchableOpacity>

      {/* Botón de Iniciar Sesión con imagen de fondo */}
      <TouchableOpacity onPress={handleLogin} style={styles.buttonContainer}>
        <ImageBackground
          source={require('../assets/button-bg-1.png')} // Imagen de fondo del botón
          style={styles.buttonBackground}
          resizeMode="cover"
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </ImageBackground>
      </TouchableOpacity>

      {/* Separador */}
      <View style={styles.separator}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>Iniciar sesión con:</Text>
        <View style={styles.separatorLine} />
      </View>

      {/* Iconos de redes sociales */}
      <View style={styles.socialIconsContainer}>
        <TouchableOpacity style={styles.socialIcon}>
          <Image source={require('../assets/google-icon.png')} style={styles.socialIconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Image source={require('../assets/facebook-icon.png')} style={styles.socialIconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Image source={require('../assets/twitter-icon.png')} style={styles.socialIconImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcon}>
          <Image source={require('../assets/apple-icon.png')} style={styles.socialIconImage} />
        </TouchableOpacity>
      </View>

      {/* Ondas en la parte inferior */}
      <Image source={require('../assets/waves.png')} style={styles.wavesBottom} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  wavesTop: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 140,
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    top: 40, // Ajusta la posición vertical
    left: 20, // Ajusta la posición horizontal
    zIndex: 1, // Asegura que el ícono esté por encima de otros elementos
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  headerContainer: {
    flexDirection: 'row', // Coloca el título y el avatar en la misma fila
    alignItems: 'center', // Centra verticalmente
    marginBottom: 0, // Espacio debajo del header
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10, // Espacio entre el título y el avatar
  },
  avatar: {
    width: 90, // Ajusta el tamaño del avatar
    height: 90, // Ajusta el tamaño del avatar

  },
  input: {
    width: '80%',
    height: 30, // Altura más pequeña para los campos de texto
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 15,
    fontSize: 16,
  },
  forgotPasswordText: {
    color: '#6200ee',
    fontSize: 14,
    marginBottom: 10,
  },
  buttonContainer: {
    width: '80%',
    height: 50,
    marginBottom: 16,
  },
  buttonBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  separatorText: {
    marginHorizontal: 10,
    color: '#666',
    fontSize: 14,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 0, // Espacio debajo de los íconos
  },
  socialIcon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIconImage: {
    width: 30,
    height: 30,
  },
  wavesBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
});

export default LoginScreen;