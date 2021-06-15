import { Component, OnInit } from '@angular/core';
import { PersonasApiService } from "@feature/personas/services/personas-api.service";
import { Observable } from "rxjs";
import { PersonaInfoGeneral } from "@feature/personas/models/persona-info-general.model";
import {PersonasService} from "@feature/personas/services/personas.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listado-general',
  templateUrl: './listado-general.component.html',
  styleUrls: ['./listado-general.component.scss']
})
export class ListadoGeneralComponent implements OnInit {

  public personas$: Observable<PersonaInfoGeneral[]> | undefined;
  public camposAVisualizar: string[] | undefined;

  constructor(private readonly personasApiService: PersonasApiService,
              private readonly personasService: PersonasService,
              private readonly router: Router) { }

  public ngOnInit(): void {
    this.personas$ = this.personasApiService.listarTodas();
    this.camposAVisualizar = this.personasService.obtenerCamposAVisualizar();
  }

  public manejarClickEnFila({ numeroIdentificacion }: PersonaInfoGeneral): void {
    this.router.navigate([`personas/detalle/${numeroIdentificacion}`]);
  }

}
