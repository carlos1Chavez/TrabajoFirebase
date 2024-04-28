import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, ScrollView, Image } from 'react-native';
import auth,  { FirebaseAuthTypes } from '@react-native-firebase/auth';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';
import Home from './Home';

const Login = () => {
  const [usuario, setUsuario] = useState<FirebaseAuthTypes.User | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPasswordAlert, setShowPasswordAlert] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [emptyFieldsError, setEmptyFieldsError] = useState<boolean>(false);
  const navigation = useNavigation();

  const registrarUsuario = async (email: string, password: string) => {
    try {
      if (password.length < 6) {
        setShowPasswordAlert(true);
        return;
      }
      await auth().createUserWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Error al registrar usuario', 'Este Correo ya está en uso');
      } else {
        Alert.alert('Error al registrar usuario', error.message);
      }
    }
  };

  const onChangeEmail = (text: string) => {
    setEmail(text);
  };

  const onChangePassword = (text: string) => {
    setPassword(text);
    setShowPasswordAlert(false);
  };

  const handleRegistrar = () => {
    registrarUsuario(email, password);
  };

  const handleIniciarSesion = async () => {
    try {
      if (email === '' || password === '') {
        setEmptyFieldsError(true);
        return;
      }
  
      await auth().signInWithEmailAndPassword(email, password);
      Alert.alert('Iniciando sesion', 'Con exito..');
      navigation.navigate('Home');
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        Alert.alert('Error de inicio de sesión', 'La contraseña es incorrecta');
      } else {
        console.log(error);
      }
    }
  };

  const handleCerrarSesion = () => {
    auth().signOut();
  };
  

  // Verificar si hay un usuario logueado

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUsuario);
    return subscriber;
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text>
          {!usuario && 'No hay usuario'}
          {usuario && `Bienvenido/a ${usuario.email}`}
        </Text>
      </View>
      <View style={styles.container}>
      <View>
        <Text style={styles.title2}>Video Juegos</Text>
        </View>
        <View style={styles.container}>
          <Image source={require('../Imagenes/catalogo.jpg')} style={styles.profile}/>
        </View>
        
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Iniciar sesión</Text>
          <Text style={styles.subtitle}>O regístrate</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            autoCapitalize="none"
            onChangeText={onChangeEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            onChangeText={onChangePassword}
          />
          {showPasswordAlert && (
            <Text style={styles.passwordAlert}>La contraseña debe tener al menos 6 caracteres</Text>
          )}

          {emptyFieldsError && (
            <Text style={styles.errorText}>Por favor, completa todos los campos</Text>
          )}

          <Pressable onPress={handleIniciarSesion}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Iniciar sesión</Text>
            </View>
          </Pressable>

          
          <Pressable onPress={handleCerrarSesion}>
          <View style={styles.buttonsalir}>
            <Text style={styles.buttonText}>Cerrar Sesión</Text>
          </View>
        </Pressable>
        <Pressable onPress={handleRegistrar}>
            <View style={styles.registerButton}>
              <Text style={styles.registerButtonText}>Registrar Usuario</Text>
            </View>
          </Pressable>
          <View>
            <Text>                    Derechos reservados por mi</Text>
          </View>
        </View>
      </View>
    </View>
  );

};

export default Login;
