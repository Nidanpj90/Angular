import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Pueblo } from '../../provincias-pueblos.model';
import { ServicioPvPbService } from '../../Servicios/servicio-pv-pb.service';

@Component({
  selector: 'app-editar-pueblo',
  templateUrl: './editar-pueblo.component.html',
  styleUrls: ['./editar-pueblo.component.css']
})
export class EditarPuebloComponent implements OnInit {

  formulario : FormGroup;

  constructor(private rutaActiva : ActivatedRoute, private fb : FormBuilder, private servicio : ServicioPvPbService){
    this.formulario = fb.group({});
  }

  ngOnInit(): void {
    let pueblo = JSON.parse(this.rutaActiva.snapshot.params['pueblo']);
    this.creaFormulario(pueblo);
  }

  creaFormulario(pueblo: Pueblo){
    this.formulario = this.fb.group({
      idprovincia : [pueblo.idprovincia, [Validators.required, Validators.maxLength(2),]],
      poblacion : [pueblo.poblacion, [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Z][a-z]*/)]],
      postal : [pueblo.postal, [Validators.required]],
      latitud : [pueblo.latitud, [Validators.required]],
      longitud : [pueblo.longitud, [Validators.required]]

    })
  }
}
