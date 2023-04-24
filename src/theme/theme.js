import {StyleSheet} from 'react-native';

export const colores = {
	'uno':'#0071BC',
	'dos':'#65C8D0',
	'tres':'#9EEDFC',
	'cuatro':'#0000FF',
	'cinco':'#2E3192',
	'seis':'#FFFFFF',
	'siete':'black',
}

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    text_inicio:{
        fontSize: 30,
        textAlign: 'center',
        marginTop: '20%',
    },
    text_2:{
        fontSize: 20,
        textAlign: 'center',
        flex: 1,
        padding: 50,
    },
    imagenes:{
        height: 180,
        width: '100%',
    },
    cardImage:{
        display: 'flex',
        width: '49.5%',
        margin: 4,
        justifyContent:'space-between',
        
    },
    container2:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_inicio:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: colores.cinco,
        margin: 20,
    },
    text3:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    login_container: {
		flex:1,
		backgroundColor:colores.seis,
		padding:20,
		alignItems:'center',
        justifyContent:'center',
	},
    login_input:{
		width:'100%',
		height:40,
		margin:12,
		borderWidth:1,
		padding:10,
		borderLeftWidth:0,
		borderTopWidth:0,
		borderRightWidth:0,
		borderBottomWidth:1,
		borderColor:colores.siete,
	},
    login_texto:{
		fontSize:20,
		color: colores.uno,
		fontWeight:'bold',
	},
    login_button_text:{
		fontSize:15,
		color:colores.uno,
		fontWeight:'bold',
		textAlign:'center',
	},
    login_button:{
		backgroundColor:colores.tres,
		width:100,
		height:40,
		borderRadius:10,
		justifyContent:'center',
		marginTop:10,
	},
    login_image: {
		width:400,
		height:200,
		borderRadius:100,
		marginVertical:100,
	},
    inicio_image: {
		width:200,
		height:200,
		borderRadius:100,
		marginVertical:30,
	},
})