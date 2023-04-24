import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoProvinciasComponent } from './Provincias/listado-provincias/listado-provincias.component';
import { ListadoPueblosComponent } from './Pueblos/listado-pueblos/listado-pueblos.component';
import { EditarPuebloComponent } from './Pueblos/editar-pueblo/editar-pueblo.component';
import {HttpClientModule} from '@angular/common/http';
import { ServicioPvPbService } from './Servicios/servicio-pv-pb.service';
import { AppRoutingModule } from '../Rutas/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListadoProvinciasComponent,
    ListadoPueblosComponent,
    EditarPuebloComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ServicioPvPbService
  ]
})
export class ProvinciasPueblosModule { }
