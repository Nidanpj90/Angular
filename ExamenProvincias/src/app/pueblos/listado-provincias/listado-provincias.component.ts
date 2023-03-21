import { Component, OnInit, OnDestroy } from '@angular/core';
import { PueblosService } from '../servicios/pueblos.service';
import { Provincia } from '../pueblos.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-provincias',
  templateUrl: './listado-provincias.component.html',
  styleUrls: ['./listado-provincias.component.css']
})
export class ListadoProvinciasComponent implements OnInit {

  provincias: Provincia[];

  constructor(private pueblosService: PueblosService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.pueblosService.getProvincias().subscribe(arrayProv =>{
      this.provincias = [];
      let provis = Object.values(arrayProv); //esto me devuelve un array con las claves del objeto
      provis.forEach((prov: any) =>{
        this.provincias.push(prov);
      })
    },
    error=> console.log(error));    
  }

  getKeys(obj: any) : string[] {
    return Object.keys(obj);
  }


}
