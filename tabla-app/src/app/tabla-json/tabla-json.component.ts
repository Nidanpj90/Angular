import { Component } from '@angular/core';
import { JsonService } from '../services/json.service';
import { Observable } from 'rxjs';
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'app-tabla-json',
  templateUrl: './tabla-json.component.html',
  styleUrls: ['./tabla-json.component.css']
})
export class TablaJSONComponent {

  selec: string;
  datosTabla: any[];
  headers: string[];

  constructor(private jsonservice: JsonService) {}

  cambiaDato(datos:HTMLSelectElement) {
    this.jsonservice.getData(datos.value).subscribe(data => {
      this.datosTabla = data;
      this.headers = Object.keys(data[0]);
    });
  }

}
