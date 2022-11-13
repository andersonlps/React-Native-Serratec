import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
      
    },
    div1: {
      backgroundColor: '#40E0D0',
      width:'100%',
      height:'3%',
    },
    div2: {
      backgroundColor: '#fff',
      width:'100%',
      height:'30%',
      justifyContent: 'space-evenly',
      alignItems:'center',
    },
    div3: {
      backgroundColor: '#00FFFF',
      width:'100%',
      height:'12%',
      flexDirection: 'row'
    },
    div4: {
      backgroundColor: '#fff',
      width:'100%',
      height:'47%',
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignContent: 'center',
      justifyContent: 'center'
    },
    div5: {
      backgroundColor: '#1E90FF',
      width:'100%',
      height:'8%'
    },
    bloco1: {
      backgroundColor: '#FFA500',
      width:100,
      height:100,
      //na imagem parecia mais próximo mesmo utilizando o space-evenly
      marginBottom: -25
    },
    bloco2: {
      backgroundColor: '#FFA500',
      width:150,
      height:30
    },
    bloco3: {
      backgroundColor: '#9400D3',
      width:'50%',
      height:75
    },
    bloco4: {
      backgroundColor: '#6495ED',
      width:'50%',
      height:75
    },
    bloco5: {
      backgroundColor: '#FFA500',
      width:100,
      height:100,
      margin: 15
    },
  });