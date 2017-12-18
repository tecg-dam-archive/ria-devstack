// Dans le cas ou le state est undefined (par rapport au selectLibrary) on l'assignera à null plutôt qu'à undefined, sinon le cas par défaut sera toujours exécuté.

// Si une action ne devant pas arriver ici devait être exécutée, on retourne le state précédent.

export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
