// On crée un index qui servira de point d'entrée pour toutes les actions (comme pour les reducers).

// On crée une fat arrow fonction à laquelle on passe un paramètre (le payload, dans ce cas-ci l'ID sélectionné). Cette fonction retourne un objet contenant le type d'action et le payload.
export const selectLibrary = (libraryId)=>{
  return {
    type: 'select_library',
    payload:libraryId,
  }
}
