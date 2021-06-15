import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ListadoGeneralComponent } from "@feature/planetas/views/listado-general/listado-general.component";
import { DetalleComponent } from "@feature/planetas/views/detalle/detalle.component";
import { ListadoTopComponent } from "@feature/planetas/views/listado-top/listado-top.component";

const routes: Routes = [
  {path: '', component: ListadoGeneralComponent },
  {path: 'detalle/:nombre', component: DetalleComponent },
  {path: 'top', component: ListadoTopComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class PlanetasRoutingModule { }
