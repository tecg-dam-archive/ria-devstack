/*
  Le rôle de ce composant sera de fetch les données depuis l'API JSON et de fournir aux composants AlbumDetail les données triées.
*/

/*
  - On va d'abord afficher un simple Text et l'afficher dans notre application.
  - Quand va-t-on décider de fetch les données ? Dès que l'application a chargé, il faut donc un gestionnaire d'évènement. Les CBC (class-based-component) ont un avantage sur les FC (functional component), ils possèdent ce qu'on appelle les Lifecycle Methods. Ce sont des fonctions qui prendront place à l'intérieur de nos Class qui seront automatiquement appelées à un moment.

  Ne pas trop s'arrêter sur ce qu'est une Lifecycle Method

  faire un componentWillMount, tester avec un console.log
  Montrer comment on débug -> CMD+D -> ouvrir le navigateur -> console

  State : est ... qui sépare deux états : la liste sans données, la liste avec des données. C'est via State que l'on saura quand rafraichir le contenu. Pour le moment il nous est impossible de savoir quand (en combien de temps) la requête va être réalisée.

*/

/*
  Nous répétons les opérations d'importation des bibliothèques react et react-native. Nous importons également les styles depuis notre fichier MainStyles
*/

import React, {Component} from 'react';
import {ScrollView, Text} from 'react-native';
import MainStyles from '../styles/MainStyles'


/*
  Les composants de Class ont un avantage par rapport à au composant fonctionnels. Ils diposent d'un cycle de vie et de toute une série de méthodes associées que vous retrouverez dans le fichier component.md ou dans la documentation officielle (https://reactjs.org/docs/react-component.html#the-component-lifecycle)
*/
export default class AlbumList extends Component{
  state = {albums:[]}

  // La méthode render() doit toujours être une fonction pure. Autrement dit, elle ne peut pas faire de requête Ajax ou subir d'autres modifications de ce genre. Elle peut uniquement recevoir des props et des states.

  // Heureusement, les Lifecycle methods fournissent une grande flexibilité pour modifier l'état d'un composant. Il existe trois grandes sous-catégories de méthodes classées comme ceci.

  /*
    Mounting
    - constructor()
    - componentWillMount()
    - render()
    - componentDidMount()

    Updating
    - componentWillReceiveProps()
    - shouldComponentUpdate()
    - componentWillUpdate()
    - render()
    - componentDidUpdate()

    Unmounting
    - componentWillUnmount()

  */

// Ces méthodes nous permettent d'intervernir à des instants particuliers de la vie d'un composant et ainsi modifier son état et son contenu.

// Pour cette partie de l'exercice, nous allons devoir récupérer des données provenant d'une API à un moment bien précis de la vie du composant. Nous allons effectuer cette opération, juste avant que le composant ne soit rendu, c'est à dire dans la méthode componentWillmount().
  componentWillmount(){
    // Afin de récupérer les données, nous utilisons l'API Fetch qui retournera un object Promise que nous traiterons ensuite avec les méthodes adéquates. Le gros problème d'une requête HTTP est qu'on ne sait pas quand les données seront retourner.

    const albums = fetch('https://rallycoding.herokuapp.com/api/music_albums');

    albums
    .then(response => response.json())
    .then(response => this.setState({albums:response}));


    // L'objet retourné par fetch est une Promise

    // On utilise ensuite la méthode then(onCompleted, onRejected);

  }

  renderAlbums() {
    console.log(this.state.albums);
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render(){
    return(
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}
