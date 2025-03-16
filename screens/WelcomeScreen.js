import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Ondas en la parte superior */}
      <Image source={require('../assets/waves-top.png')} style={styles.waves} />

     {/* Logo de la aplicación */}
<View style={styles.logoContainer}>
  <Image source={require('../assets/logo.png')} style={styles.logo} />
</View>

     {/* Botón de Iniciar Sesión con imagen de fondo */}
<TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.buttonContainer}>
  <ImageBackground
    source={require('../assets/button-bg-1.png')} // Imagen de fondo del botón
    style={styles.buttonBackground}
    resizeMode="cover"
  >
    <Text style={styles.buttonText}>Iniciar Sesión</Text>
  </ImageBackground>
</TouchableOpacity>

{/* Botón de Registrarse con imagen de fondo */}
<TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.buttonContainer}>
  <ImageBackground
    source={require('../assets/button-bg-2.png')} // Imagen de fondo del botón
    style={styles.buttonBackground}
    resizeMode="cover"
  >
    <Text style={styles.buttonText}>Registrarse</Text>
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
  waves: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  logoContainer: {
    justifyContent: 'center', // Centra el logo verticalmente
    alignItems: 'center', // Centra el logo horizontalmente
    marginTop: 70, // Ajusta este valor para mover el logo hacia abajo
  },
  logo: {
    width: 200, // Ajusta el tamaño del logo
    height: 200, // Ajusta el tamaño del logo
  },

  buttonContainer: {
    width: '80%', // Ajusta el ancho del botón
    height: 60, // Ajusta la altura del botón
    marginBottom: 16,
  },
  buttonBackground: {
    width: '100%', // Ocupa todo el ancho del contenedor
    height: '100%', // Ocupa toda la altura del contenedor
    justifyContent: 'center', // Centra el texto verticalmente
    alignItems: 'center', // Centra el texto horizontalmente
  },
  buttonText: {
    color: '#fff', // Color del texto
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
});

export default WelcomeScreen;