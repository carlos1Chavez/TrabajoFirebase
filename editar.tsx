import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, ScrollView, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import videojuegos from './models/videojuegos';

const Editar = () => {
    const [nombreEditar, setNombreEditar] = useState<string>('');
    const [precioEditar, setPrecioEditar] = useState<number>(0);
    const [descripcionEditar, setDescripcionEditar] = useState<string>('');
    const [imagenEditar, setImagenEditar] = useState<string>('');
    const [anoPublicacionEditar, setAnoPulicacionEditar] = useState<number>(0);

    const [videojuegos, serVideojuegos] = useState<videojuegos[]>([]);

    const onChangeNombreEditar = (text: string) => {setNombreEditar(text);};
    const onChangePrecioEditar = (text: string) => {setPrecioEditar(parseFloat(text));};
    const onChangeDescripcionEditar = (text: string) => {setDescripcionEditar(text);};
    const onChangeImagenEditar = (text: string) => {setImagenEditar(text);};
    const onChangePublicaionEditar = (text: string) => {setAnoPulicacionEditar(parseInt(text));};

    const [idEditar, setIdEditar] = useState<string>('');

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

    const handleEditarjuego = async () => {
        await firestore().collection('videojuegos').doc(idEditar).update({
          imagen: imagenEditar,
          nombre: nombreEditar,
          anoPublicacion: anoPublicacionEditar,
          descripcion: descripcionEditar,   
          precio: precioEditar,

        });
        setImagenEditar('');
        setNombreEditar('');
        setAnoPulicacionEditar(0);
        setDescripcionEditar('');
        setPrecioEditar(0);
        setIdEditar('');
      };
      const cargarJuegoEditar = (videojuegosData: videojuegos) => {
        setNombreEditar(videojuegosData.nombre);
        setPrecioEditar(videojuegosData.precio);
        setDescripcionEditar(videojuegosData.descripcion);
        setImagenEditar(videojuegosData.imagen);
        setIdEditar(videojuegosData.id || '');
      };

    return (
        <ScrollView >
            <View >
                <Text style={styles.titulo}>                        Ingresar Video Juego para editar</Text>
                <View>
                <TextInput style={styles.input}placeholder="Imagen"onChangeText={onChangeImagenEditar}value={imagenEditar}/>
                <TextInput style={styles.input}placeholder="Nombre" onChangeText={onChangeNombreEditar} value={nombreEditar}/>
                <TextInput style={styles.input}placeholder="año de Publicacion"onChangeText={onChangePublicaionEditar}value={anoPublicacionEditar.toString()}/>
                <TextInput style={styles.input}placeholder="Descripción"onChangeText={onChangeDescripcionEditar}value={descripcionEditar}/>
                <TextInput style={styles.input}placeholder="Precio"onChangeText={onChangePrecioEditar}keyboardType="numeric"value={precioEditar.toString()}/>
                
                <Pressable onPress={handleEditarjuego} disabled={idEditar == ''}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Editar Juego</Text>
                    </View>
                </Pressable>

                <View>
                    {videojuegos.map(videojuegosData => (
                        <Pressable onPress={()=> cargarJuegoEditar(videojuegosData)}>
                            <View style={styles.contenedorJuego} key={videojuegosData.id}>

                                <View style={styles.fila}>
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


                </View>
            </View>
        </ScrollView>
        
    );



};
 export default Editar;