import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProvinciasComponent } from './lista-provincias/lista-provincias.component';
import { ServicioPvPbService } from './Servicios/servicio-pv-pb.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    ListaProvinciasComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ServicioPvPbService]
})
export class ProvinciasPueblosModule { }
