import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, ScrollView, Image } from 'react-native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import videojuegos from './models/videojuegos';


const Crear = () => {
    const [nombre, setNombre] = useState<string>('');
    const [precio, setPrecio] = useState<number>(0);
    const [descripcion, setDescripcion] = useState<string>('');
    const [imagen, setImagen] = useState<string>('');
    const [anoPublicacion, setAnoPulicacion] = useState<number>(0);
    const [videojuegos, serVideojuegos] = useState<videojuegos[]>([]);

    

    const handleCrearProducto = async () => {
        await firestore().collection('videojuegos').add({ 
          imagen,
          nombre,
          anoPublicacion,
          descripcion,
          precio, 
        });
        setImagen('');
        setNombre('');
        setAnoPulicacion(0);
        setDescripcion('');
        setPrecio(0);
    };

    const onChangeNombre = (text: string) => {setNombre(text);};
    const onChangePrecio = (text: string) => {setPrecio(parseFloat(text));};
    const onChangeDescripcion = (text: string) => {setDescripcion(text);};
    const onChangeImagen = (text: string) => {setImagen(text);};
    const onChangePublicaion = (text: string) => {setAnoPulicacion(parseInt(text));};

    return (
            <View style={styles.containercrear}>
                <View >
                    <Text style={styles.titulo}>  Ingresar Video Juego</Text>
                    <View>
                    <TextInput style={styles.input} placeholder="Imagen"onChangeText={onChangeImagen}value={imagen}/>
                    <TextInput style={styles.input}placeholder="Nombre" onChangeText={onChangeNombre} value={nombre}/>
                    <Text style={styles.titulo}> Colocar Año</Text>
                    <TextInput placeholder="año"onChangeText={onChangePublicaion}value={anoPublicacion.toString()}/>
                    <TextInput style={styles.input}placeholder="Descripción"onChangeText={onChangeDescripcion}value={descripcion}/>
                    <Text style={styles.titulo}> Colocar Precio</Text>
                    <TextInput style={styles.input}placeholder="Precio"onChangeText={onChangePrecio}keyboardType="numeric"value={precio.toString()}/>
                    
                    <Pressable onPress={handleCrearProducto}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Crear Producto</Text>
                        </View>
                    </Pressable>
                    </View>

                </View>
                
            </View>
    );
};

export default Crear;
