import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provincia } from '../provincias-pueblos.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioPvPbService {

  provincias: Provincia[] = [];

  constructor(private http: HttpClient) { }

  getProvincias(){
    return this.http.get('..\\..\assets\\provincias.json');
  }
}
