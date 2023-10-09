import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
  const clickHandler = () =>{
    alert('Adicionado ao Carrinho!')
  }

export default function App() {
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="#4682B4"/>
   
      
    <View style={styles.container}>

              {/* HEADER */}

        <View style={styles.header}>
        
        
        <Image
          source ={require("./assets/img/cardapio-94.png")}
          resizeMode="center"
          style={{position:"relative", top: 20, right:45}}
        />
        <Image
          source ={require("./assets/img/controle-94.png")}
          resizeMode="center"
          style={{position:"relative", top: 20}}
        />
        <Image
          source ={require("./assets/img/carrinho-94.png")}
          resizeMode="center"
          style={{position:"relative", top: 17, left:45}}
          
        />
       
        </View>

                {/* MAIN */}

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
        style={styles.btAdicionar4}>
       <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>

    </View>

              {/* FOOTER */}

      <View style={styles.boxFooter}>
      <Text>©Created by iEduardoD3V🐼</Text>
      </View>
    
    </SafeAreaView>
    </ScrollView>

  );
  
}


// ESTILIZAÇÃO

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',

  },
  header:{
    backgroundColor:'#fff',
    width:"100%",
    justifyContent:"space-evenly",
    alignItems:"center",
    display:'flex',
    flexDirection:'row'
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
    marginTop: 35
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
  },
  btAdicionar4:{
    width:150,
    height: 35,
    backgroundColor:"#008000",
    textAlign:'center',
    justifyContent:"center",
    fontSize: 20,
    borderRadius:10,
    marginBottom:50
  },
  textButton:{
    color: "#fff",
    textAlign:'center'
  },
  boxFooter:{
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    height:50,
    width:'100%',
    backgroundColor: "#FFF"
  }
});
