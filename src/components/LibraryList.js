import React, {Component} from 'React';
import {connect} from 'react-redux';
import {FlatList, Text} from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component{

  // On oublie cette technique -> dépréciée
  /* componentWillMount(){
    const ds = new FlatList.DataSource({
      rowHasChanged:(r1,r2) => r1 !== r2
     })
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }*/

  // renderRow est une fonction d'aide qui retourne un composant ListItem. On passe à cette fonction un paramètre lors de l'appel. Ce paramètre contient les données du state. On passe ensuite ce paramètre comme props lors de l'appel du composant.
  renderRow(singleLibrary){
    return <ListItem content={singleLibrary} />
  };

  // On retourne la FlatList avec deux props les données. Grâce au this qui fait référence au composant LibraryList auquel nous avons donné accès au store via notre connect(), nous pouvons maintenant accéder aux données du state grace à this.props
  render(){
    return(
      <FlatList
        style={style.flatListStyle}
        data={this.props.libraries}
        renderItem={this.renderRow}
      />
    );
  }
}

// Crée une fonction utilitaire qui va liée les différents paramètres du state vers des props. On retourne un objet dans lequel sera stocké une partie du state global pour être utilisé comme props.
const mapStateToProps = state =>{
  return{libraries:state.libraries}

}

// Lorsque l'on rend notre composant disponible pour le reste de l'application, on passe à la fonction connect notre fonction d'aide précédemment créé avec les paramètres de connexion. Cette fonction en appelle une autre qui connectera finalement le composant au store. C'est donc un double appel de fonction avec un passage du mode de connexion (qu'est-ce qu'on récupère ?) et les objets connectés (qui se connecte à quoi ?)
export default connect(mapStateToProps)(LibraryList);



const style={
  flatListStyle:{
  }
}
