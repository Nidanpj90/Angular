import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServicioPvPbService {

  constructor(private http: HttpClient) { }

  getProvincias(){
    return this.http.get("http://192.168.0.111:8080/ExamenAngular/ProvPueblos");
  }
  getPueblos(aux:String){
    return this.http.get("http://192.168.0.111:8080/ExamenAngular/ProvPueblos?provincia="+aux);
  }
}
