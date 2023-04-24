import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoProvinciasComponent } from '../provincias-pueblos/Provincias/listado-provincias/listado-provincias.component';
import { ListadoPueblosComponent } from '../provincias-pueblos/Pueblos/listado-pueblos/listado-pueblos.component';
import { EditarPuebloComponent } from '../provincias-pueblos/Pueblos/editar-pueblo/editar-pueblo.component';

const routes: Routes = [
  {path : 'Provincias/listadoProvincias', component: ListadoProvinciasComponent},//el path se puede llamar de cualquier forma, pero le ponemos este nombre para aclararnos del componente que llamamos
  {path : 'Pueblos/listadoPueblos/:idProv', component: ListadoPueblosComponent}, //le podemos pasar a una ruta una variable con los dos puntos para nuestra conveniencia, en este caso nos hará falta luego para mostrar todos los pueblos o los pueblos de una provincia
  {path : 'Pueblos/editarPueblo/:pueblo', component: EditarPuebloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
