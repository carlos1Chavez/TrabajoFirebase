// styles.tsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },

  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  title2: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  formContainer: {
    width: 300,
    marginBottom: 25,
  },
  formContainer2: {
    width: 150,
    marginBottom: 20,
  },
  buttonText2: {
    flex: 51,
    fontSize: 15,
    color: '#fff',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  registerButton: {
    marginTop: 10,
  },
  registerButtonText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 1,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 5, 
    paddingHorizontal: 5,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 1,
  },
  buttonsalir: {
    backgroundColor: 'red',
    paddingVertical: 5, 
    paddingHorizontal: 5,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 1,
  },
  buttonMenu: {
    backgroundColor: '#007bff',
    paddingVertical: 10, 
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 25,
    color: '#fff',
  },
  profile:{
    flex:10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 500,
    shadowColor: '#000',
    shadowOffset:{
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
// styles de home

  gameContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gameCoverContainer: {
    width: '48%',
    marginBottom: 16,
  },
  gameCoverImage: {
    width: '100%',
    aspectRatio: 4 / 3,
  },
  gameInfoContainer: {
    padding: 12,
  },
  gameTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  gameYear: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  gameDescription: {
    fontSize: 14,
  },
// otros de home
boton: {
  backgroundColor: 'blue',
  padding: 10,
  borderRadius: 5,
  margin: 10,
},
botonRojo: {
  backgroundColor: 'red',
  padding: 10,
  borderRadius: 5,
  margin: 10,
},
botonVerde: {
  backgroundColor: 'green',
  padding: 10,
  borderRadius: 5,
  margin: 10,
},
botonColor: {
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold',
},
titulo: {
  color: 'black',
  fontWeight: 'bold',
},
fila: {
  display: 'flex',
  flexDirection: 'row',
},

contenedorJuego: {
  borderColor: 'black',
  borderWidth: 1,
  padding: 50,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 50,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.10,
  shadowRadius: 4,
  elevation:5,
},
contenedorScroll: {
  display: 'flex',
  flexDirection: 'column',
},
// scrolear
containercrear: {
  flex: 1,
  height:800,
  backgroundColor: '#f5f5f5',
  width: 400,
  marginTop: 150,
},

});

export default styles;
