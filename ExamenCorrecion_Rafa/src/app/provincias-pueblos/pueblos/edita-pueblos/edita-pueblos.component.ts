import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioPvPbService } from '../../Servicios/servicio-pv-pb.service';
import { Pueblos } from '../../provincias-pueblos.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edita-pueblos',
  templateUrl: './edita-pueblos.component.html',
  styleUrls: ['./edita-pueblos.component.css']
})
export class EditaPueblosComponent implements OnInit{

  formulario: FormGroup;

  constructor(
    private rutaActiva: ActivatedRoute,
    private servicioPueblos: ServicioPvPbService,
    private fb: FormBuilder
    ){}

  ngOnInit(): void {
    const pueblo = this.rutaActiva.snapshot.params['pueblo'];
    this.creaFormulario(pueblo);
  }

  creaFormulario(pueblo: Pueblos):void{
    this.formulario = this.fb.group({
      idpoblacion:[pueblo.idpueblo,[Validators.required]],
      poblacion:[pueblo.poblacion,[Validators.required]]

  })

  }

}
