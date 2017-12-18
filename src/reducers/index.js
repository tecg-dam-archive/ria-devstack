// On crée un index qui fera office d'agrégateur pour l'ensemble des reducers

// On importe l'objet
import {combineReducers} from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// Le combine reducer est une fonction utilitaire auquel on passe un object qui contient l'ensemble des reducers. Ceci permet de passer un reducer (combiné) unique au createStore.

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer,
});
