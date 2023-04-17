import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProvinciasComponent } from './lista-provincias/lista-provincias.component';
import { ServicioPvPbService } from './Servicios/servicio-pv-pb.service';
import { HttpClientModule } from '@angular/common/http';
import { ListaPueblosComponent } from './lista-pueblos/lista-pueblos.component';
import { AppRoutingModule } from '../Rutas/app-routing.module';



@NgModule({
  declarations: [
    ListaProvinciasComponent,
    ListaPueblosComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [
    ServicioPvPbService
  ]
})
export class ProvinciasPueblosModule { }
