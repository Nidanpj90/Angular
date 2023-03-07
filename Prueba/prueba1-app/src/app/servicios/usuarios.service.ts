import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import * as data from './assets/users.json';

@Injectable(
 // {  providedIn: 'root'}
  )
export class UsuariosService {

  constructor(private http: HttpClient) { 
    console.log("Servivio Http");
  }
  getUsuarios(datos):any{
    return this.http.get("https://jsonplaceholder.typicode.com/"+datos);
   //return this.http.get("https://jsonplaceholder.typicode.com/comments");
    
  }

  getJsonContent():any{
    //return (data as any); // aqui obtenemos el JSON completo
    return this.http.get("C:\Users\\usuario\Documents\ProyectosANGULAR\JsonPlaceHolderRecursivo\src\assets\\users.json");
  }
}
