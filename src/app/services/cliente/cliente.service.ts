import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { clientes } from 'src/app/datos/usuarios-ejemplos';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  urlApi: string= "http://localhost:8080/cliente"

  constructor(private http:HttpClient) { }

  obtenerClientes(){
    return this.http.get(this.urlApi);
  }

// hacerLogin(correo: string,pass: string){
//      const url = `${this.urlApi}/login?correo=${correo}&pass=${pass}`;
//      return this.http.get(url);
// }

hacerLogin(correo: string,pass: string){
  const url = `${this.urlApi}/login`;
  const payload = {correo:correo,password:pass}
  return this.http.post(url,payload);
}

crearSesion(clientelogueado: any){
  const clienteJSON = JSON.stringify(clientelogueado);
  sessionStorage.setItem('sesion', clienteJSON);
}

leerSesion(){
  const clienteJSON = sessionStorage.getItem('sesion');
  if(clienteJSON){
    const clientelogueado= JSON.parse(clienteJSON);
    return clientelogueado;
  }
  return null;
}
cerrarSesion(){
  sessionStorage.removeItem("session");
}

}

