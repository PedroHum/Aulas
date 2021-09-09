import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'

class App extends Component{
  constructor(props) {
    super(props)
    this.state= {
      nome:'José'
    }  
  this.entrar = this.entrar.bind(this)
  }

 entrar(){
   this.setState({
     nome:'Pedro'
   })
 } 
 
 render(){
   return(
     <View style={{marginTop:25}}>
       
       <Button title="Entrar" onPress={this.entrar}/>

       <Text>
         {this.state.nome}
       </Text>
     </View>
   ) 
 }





}




export default App