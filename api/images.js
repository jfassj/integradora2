import axios from "axios";

export const getImages = async () => await axios.get(`http://192.168.1.3:5000/fotos`)