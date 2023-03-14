import { Injectable } from '@angular/core';
import { Cliente, Grupo } from '../cliente.model';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable
(/*{
  providedIn: 'root'
}*/)
export class ClientesService {

  private clientes$ = new Subject<Cliente[]>();

  private clientes: Cliente[];
  private grupos: Grupo[];

  constructor(private http : HttpClient) { 
    this.clientes=[
      {nombre:"Pepe", id:22, direccion:"La Paz", grupo:2, cif:"3333H"},
      {nombre:"Ana", id:24, direccion:"La Santa", grupo:2, cif:"2222H"},
      {nombre:"Juan", id:28, direccion:"La Cruz", grupo:2, cif:"1111H"}
    ];
    this.grupos = [
      {
        id: 0,
        nombre: 'Sin definir'
      },
      {
        id: 1,
        nombre: 'Activos'
      },
      {
        id: 2,
        nombre: 'Inactivos'
      },
      {
        id: 3,
        nombre: 'Deudores'
      },
    ];
    this.clientes = [];
  }
/*
  getClientes$(): Observable<Cliente[]> {
    return this.clientes$.asObservable();
   // return this.http.get('http://localhost:8080/guardaRecupera/RecuperaC').asObservable();
  }*/

  getUsuarios():any{
    return this.http.get('http://localhost:8082/ServicioClientes/RecuperaC');
   }

   postUsuarios(datos):any{
    
       let json = JSON.stringify(datos.id="44");
       let url  = "http://localhost:8080/guardaRecupera/GuardaC2?cliente="+json;
 
        //Establecemos cabeceras
                
        let header = new HttpHeaders({'Accept': 'application/json' ,
                                      'Content-Type': 'application/json', 
                                      'Access-Control-Allow-Origin': '*' });
        let httpOptions = { headers: header };
         
        //return this.http.post(url, json, {headers: headers});

        //return this.http.post(url,json);
        return this.http.post("http://localhost:8080/ServicioClientes/GuardaC",datos,httpOptions);
        //http://localhost:8080/guardaRecupera/GuardaC2?%22{id:%2221%22,nombre:%20%22Donald%20Duck%22,direccion:%20%22Duckburg%22,nif:%2211111111H%22,grupo:%221DAW%22}%22

   }
  getGrupos() {
    return this.grupos;
  }

  getClientes() {
    return this.clientes;
  }

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
    this.clientes$.next(this.clientes);
  }

  nuevoCliente(cli): Cliente {
    return {
      id: this.clientes.length,
      nombre: cli.nombre,
      cif: cli.nif,
      direccion: cli.direccion,
      grupo: cli.grupo
    };
  }
}