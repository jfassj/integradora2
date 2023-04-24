import { authInitialState } from "./UsuarioContext";

export const authReducer = (state, action) => {
	switch(action.type) {
		case 'signIn':
			return {
        ...state,
        usuario: action.payload.usuario,
        nombre: action.payload.nombre,
      };
	  case 'signOut':
		return {
			...authInitialState
		}
	default:
		return state
	}
}