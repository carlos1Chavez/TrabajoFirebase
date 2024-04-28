import React, { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';
import videojuegos from '../models/videojuegos';
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
    const [videojuegos, serVideojuegos] = useState<videojuegos[]>([]);
    const navigation = useNavigation();

    const handleCrear = () => {
        navigation.navigate('Crear');
    };
    const handleEditar = () => {
        navigation.navigate('Editar');
    };

    useEffect(() => {
        const subscriber = firestore()
          .collection('videojuegos')
          .onSnapshot(querySnapshot => {
            const videojuegos: videojuegos[] = [];
            querySnapshot.forEach(documentSnapshot => {
              const videojuegosData = documentSnapshot.data() as videojuegos;
              videojuegosData.id = documentSnapshot.id;
              videojuegos.push(videojuegosData);
            });
            serVideojuegos(videojuegos);
          });
        return subscriber;
      }, []);
      console.log('videojuegos', videojuegos);


    return (
        <ScrollView>
            <View>
            <Text></Text>
            <Pressable onPress={handleCrear}>
                <View style={styles.button}>
                <Text style={styles.buttonText2}>Ingresar Video Juego</Text>
                </View>
            </Pressable>
            <Pressable onPress={handleEditar}>
                <View style={styles.button}>
                <Text style={styles.buttonText2}>Editar Video Juego</Text>
                </View>
            </Pressable>
            <Text >Catalogo</Text>
            {videojuegos.map(videojuegosData => (
                <Pressable >
                    <View style={styles.contenedorJuego} key={videojuegosData.id}>

                        <View >
                                        {videojuegosData.imagen && (<Image source={{uri: videojuegosData.imagen}}
                                            style={{width: 200, height: 200, alignItems: 'center',justifyContent: 'center',}}/>
                                        )}
                                    </View>
                                <View style={styles.fila}>
                                    <Text style={styles.titulo}>Video Juego:</Text>
                                    <Text>{videojuegosData.nombre}</Text>
                                </View>
                                
                                <View style={styles.fila}>
                                    <Text style={styles.titulo}>Descripción:</Text>
                                    <Text>{videojuegosData.descripcion}</Text>
                                </View>
                                <View style={styles.fila}>
                                    <Text style={styles.titulo}>Año de Publicacion</Text>
                                    <Text>{videojuegosData.anoPublicacion}</Text>
                                </View>
                                <View style={styles.fila}>
                                    <Text style={styles.titulo}>Precio:</Text>
                                    <Text>{videojuegosData.precio}</Text><Text style={styles.titulo}> Lempiras</Text>
                                </View>
                                
                            </View>
                        </Pressable>
                    ))} 

            </View>
                     
        </ScrollView>
    );
}; 

export default Home;
