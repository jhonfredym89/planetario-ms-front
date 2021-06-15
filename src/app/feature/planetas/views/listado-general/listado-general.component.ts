import { Component, OnInit } from '@angular/core';
import { PlanetasApiService } from "@feature/planetas/services/planetas-api.service";
import { Router } from "@angular/router";
import { PlanetasService } from "@feature/planetas/services/planetas.service";
import { Observable } from "rxjs";
import { PlanetaInfoGeneral } from "@feature/planetas/models/planeta-info-general.model";

@Component({
  selector: 'app-listado-general',
  templateUrl: './listado-general.component.html',
  styleUrls: ['./listado-general.component.scss']
})
export class ListadoGeneralComponent implements OnInit {

  public planetas$: Observable<PlanetaInfoGeneral[]> | undefined;
  public camposAVisualizar: string[] | undefined;

  constructor(private readonly planetasApiService: PlanetasApiService,
              private readonly planetasService: PlanetasService,
              private readonly router: Router) { }

  public ngOnInit(): void {
    this.camposAVisualizar = this.planetasService.obtenerCamposAVisualizarGeneral();
    this.planetas$ = this.planetasApiService.listarTodos();
  }

  public manejarClickEnFila({ planeta }: PlanetaInfoGeneral): void {
    this.router.navigate([`planetas/detalle/${planeta}`]);
  }

  public manejarClicVerTop() {
    this.router.navigate(['planetas/top']);
  }

}
