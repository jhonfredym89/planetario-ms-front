import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {PlanetasApiService} from "@feature/planetas/services/planetas-api.service";
import { ListadoGeneralComponent } from './views/listado-general/listado-general.component';
import { ListadoTopComponent } from './views/listado-top/listado-top.component';
import { DetalleComponent } from './views/detalle/detalle.component';
import { PlanetasRoutingModule } from "@feature/planetas/planetas-routing.module";
import { PlanetasService } from "@feature/planetas/services/planetas.service";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  providers: [
    PlanetasApiService,
    PlanetasService,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientModule,
    PlanetasRoutingModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,

  ],
  declarations: [
    ListadoGeneralComponent,
    ListadoTopComponent,
    DetalleComponent
  ]
})
export class PlanetasModule { }
