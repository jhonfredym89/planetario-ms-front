import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { PersonasApiService } from "@feature/personas/services/personas-api.service";
import { DetalleComponent } from './views/detalle/detalle.component';
import { ListadoGeneralComponent } from './views/listado-general/listado-general.component';
import { PersonasRoutingModule } from "@feature/personas/personas-routing.module";
import { MatTableModule } from "@angular/material/table";
import { PersonasService } from "@feature/personas/services/personas.service";
import { registerLocaleData } from '@angular/common';
import localeEsCo from '@angular/common/locales/es-CO';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

registerLocaleData(localeEsCo, 'es-CO')

@NgModule({
  providers: [
    PersonasApiService,
    PersonasService,
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PersonasRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [
    DetalleComponent,
    ListadoGeneralComponent
  ]
})
export class PersonasModule { }
