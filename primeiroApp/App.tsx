import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView, SafeAreaView} from 'react-native';


  const clickHandler = () =>{
    alert('Adicionado ao Carrinho!')
  }

export default function App() {
  return (
    
    <ScrollView>
    <View style={styles.container}>
      
      <View style={styles.boxProdutos}>
        <Image
          source ={require("./assets/img/produto1.png")}
          style={styles.produtos}
        />
        
        <Text style={styles.text}>Produto 01</Text>
      </View>
        <TouchableOpacity onPress={clickHandler}
        activeOpacity={0.7}
        style={styles.btAdicionar}>
        <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>

      <View style={styles.boxProdutos}>
      <Image
      
          source ={require("./assets/img/produto2.png")}
          style={styles.produtos}
        />
        <Text style={styles.text}>Produto 02</Text>
      </View>
      <TouchableOpacity onPress={clickHandler}
        activeOpacity={0.7}
        style={styles.btAdicionar}>
        <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>

      <View style={styles.boxProdutos}>
      <Image
          source ={require("./assets/img/produto3.png")}
          style={styles.produtos3}
        />
        <Text style={styles.text}>Produto 03</Text>
      </View>
      <TouchableOpacity onPress={clickHandler}
        activeOpacity={0.7}
        style={styles.btAdicionar}>
        <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>

      <View style={styles.boxProdutos}>
      <Image
          source ={require("./assets/img/produto4.png")}
          style={styles.produtos}
        />
        <Text style={styles.text}>Produto 04</Text>
      </View>
      <TouchableOpacity onPress={clickHandler}
        activeOpacity={0.7}
        style={styles.btAdicionar}>
       <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>

    </View>
    </ScrollView>
    
  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    

  },
  produtos:{
    width: 200,
    height: 200
    
  },
  produtos3:{
    width: 190,
    height: 130
  },
  text:{
    textAlign: 'center',
    fontSize: 20,
    color: "#010101"
  },
  boxProdutos:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "#fff",
    width: 250,
    height: 250,
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 50
  },
  btAdicionar:{
    width:150,
    height: 35,
    backgroundColor:"#008000",
    color: "#008000",
    textAlign:'center',
    justifyContent:"center",
    fontSize: 20,
    borderRadius:10,
    marginBottom:5,
    shadowColor:"#000",
    borderWidth: 2,
    borderColor: "#008000"
  },
  textButton:{
    color: "#fff",
    textAlign:'center'
  },
});
