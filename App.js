import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Header from './src/components/Header'
import LibraryList from './src/components/LibraryList'


// On importe le Provider qui est un lien entre la librairie Redux et React.
import {Provider} from 'react-redux';

// On importe le createStore de la librairie redux.
import {createStore} from 'redux';

// On importe les reducers depuis notre dossier reducers via l'index qui les contient tous.
import reducers from './src/reducers';

// Le Provider contient l'état de notre application (le store qui contient le(s) state(s)).
export default class App extends Component {
  render() {
    return (
      // On crée un Provider qui contient le store auquel on passe le(s) reducer(s).
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText='Dev Stack'/>
          <LibraryList />
        </View>
      </Provider>
    );
  }
}
