import { BASE_URL, POST_LOGIN_PATH } from "../constants/Endpoints";
import { FormLogin } from "../types/FormLogin";

import axios from "axios";



export const postLogarUsuario = async (form: FormLogin) =>{
  const response: any = await axios.post<String>(
    BASE_URL + POST_LOGIN_PATH, form
  )

  if (response) {
    localStorage.setItem("nome", response.nome)
    localStorage.setItem("email", response.email)
    localStorage.setItem("token", response.token)
    return true
  }

  return response.data;
}

//export default class UserServices {
 //constructor () {
   // axios.create({
     // baseURL: BASE_URL + POST_LOGIN_PATH
    //})
  //}

   //async login (dados:FormLogin) {
    //const {data} = await axios.post('/login', dados)


    //return
  //}

//   async cadastrar (dados) {
//     return this.axios.post('/user', dados)
//   }

  //usuarioAutenticado () {
    //return localStorage.getItem("token") != undefined ? true : false
    // return typeof localStorage.getItem("token")
  //}

  //Desafio ---> implemente um botão que chama essa função dentro da página Home
  //async logout () {
    //localStorage.removeItem("token")
    //localStorage.removeItem("nome")
    //localStorage.removeItem("email")
  //}
//}