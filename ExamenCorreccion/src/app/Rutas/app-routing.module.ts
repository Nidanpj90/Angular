import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProvinciasComponent } from '../provincias-pueblos/lista-provincias/lista-provincias.component';
import { ListaPueblosComponent } from '../provincias-pueblos/lista-pueblos/lista-pueblos.component';

const routes: Routes = [
  { path: 'Provincias/listaProvincias', component: ListaProvinciasComponent },
  { path: 'Pueblos/listaPueblos/:id', component: ListaPueblosComponent },
  { path: 'Pueblos/listaPueblos/:nombre', component: ListaPueblosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
