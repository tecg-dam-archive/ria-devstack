import React, {Component} from 'React';
import {Text,TouchableWithoutFeedback, View, LayoutAnimation} from 'react-native';
import {connect} from 'react-redux';

// On import le dossier des actions sous une forme un peu particulière. On importe tous les éléments (*) présents dans le fichier (index) action en tant que variable (actions).
import * as actions from '../actions';


// Nous récupérons le contenu passé lors de l'appel de ce composant.
class ListItem extends Component{

  // Animation du composant à chaque Update
  componentWillUpdate(){
    LayoutAnimation.spring();
  }

  renderContent(){
    const{selectedLibraryId} =  this.props;
    const {id,description} = this.props.content.item;

    // Si l'ID du composant (LibraryId) est === à l'Id sélectionné (selectedLibraryId)
    if (id === selectedLibraryId) {
      return (
        <Text>
          {description}
        </Text>
      )
    }
  }

  render(){
    return(
      <TouchableWithoutFeedback
        // On appelle ... lors du clic sur l'élément.
        onPress={()=>this.props.selectLibrary(this.props.content.item.id)}>
      <View>
        <Text style={style.listItemStyle}>
          {this.props.content.item.title}
        </Text>
        {this.renderContent()}
      </View>
      </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = state =>{
  return{
    // On stocke l'ID de l'élément sur lequel l'utilisateur vient de cliquer dans un objet avec un clé selectedLibraryId et on rend cet objet disponible en props.
    selectedLibraryId: state.selectedLibraryId,
  }
}

// dans le connect il y a un deuxième argument qui peut être passé et il s'agit d'un binder pour les actions creator
export default connect(mapStateToProps, actions)(ListItem);


// Les styles
const style={
  listItemStyle:{
    fontSize:28,
    fontWeight:'bold',
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor:'#f3f3f3',
    borderWidth:0.25,
    borderColor:'#000000',
  }
}











WiFi : Instants Productions
Pass : InstantsProductions
