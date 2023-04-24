import React, { createContext, useReducer } from 'react';
import { authReducer } from "./UsuarioReducer";
export const authInitialState = {
	usuario:'',
	nombre:'',
}
export const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{

	const [authState, dispatch] = useReducer(authReducer, authInitialState);

	const signIn = (usuario) => {
		dispatch({type:'signIn', payload:usuario});
	}
	const signOut = () => {
		dispatch({type:'signOut'});		
	}

	return (
		<AuthContext.Provider
			value={{
				authState,
				signIn,
				signOut,
			}}
		>
			{ children }
		</AuthContext.Provider>
	)

}