/*
  Afin de créer notre second composant, nous devons importer les libraires React et ReactNative. Nb: Vous allez répéter cette opération pour un grand nombre de composants.
*/

import React from 'react';
import {View, Text} from 'react-native';
import MainStyles from '../styles/MainStyles'

// Le composant Header est une fonction 'statique' ou stateless stockée dans une constante. On passe à cette fonction un paramètre lors de son appel par l'application.
const Header = (props) => {
  // On stock et décompose les deux sous-objets contenu dans MainStyles pour y accéder plus facilement et éviter de faire MainStyles.headerStyle.
  const {headerStyle, headerTextStyle} = MainStyles;
  // On retourne un élément Text avec pour contenu la valeur de la propriété (props) passée lors de l'appel dans App.js
  return(
    <View style={headerStyle}>
      <Text style={headerTextStyle}>{props.headerText}</Text>
    </View>
  )
};

// Il faut à nouveau exporter le composant pour le rendre disponible pour les autres composants de notre application.
export default Header;
