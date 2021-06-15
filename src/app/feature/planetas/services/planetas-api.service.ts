import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PlanetaInfoGeneral } from "@feature/planetas/models/planeta-info-general.model";
import { PlanetaTop } from "@feature/planetas/models/planeta-top.model";
import { Planeta } from "@feature/planetas/models/planeta.model";
import {environment} from "@env/environment";
import {switchMap} from "rxjs/operators";

@Injectable()
export class PlanetasApiService {

  private readonly BASE_URL: string;

  constructor(private readonly httpClient: HttpClient) {
    this.BASE_URL = `${environment.baseUrl}/v1/planetas`;
  }

  public listarTodos(): Observable<PlanetaInfoGeneral[]> {
    return this.httpClient.get<PlanetaInfoGeneral[]>(`${this.BASE_URL}`);
  }

  public listarTop(): Observable<PlanetaTop[]> {
    return this.httpClient.get<PlanetaTop[]>(`${this.BASE_URL}/top`);
  }

  public consultarPorNombre(nombre: string): Observable<Planeta> {
    return this.httpClient.get<Planeta>(`${this.BASE_URL}/${nombre}`);
  }

  public actualizarVisitas(nombre: string): Observable<any> {
    return this.httpClient.put(`${this.BASE_URL}/${nombre}/visitas`, null);
  }

  public obtenerDetalleActualizandoVisitas(nombre: string): Observable<Planeta> {
    return this.actualizarVisitas(nombre).pipe(
      switchMap(() => this.consultarPorNombre(nombre)),
    );
  }
}
