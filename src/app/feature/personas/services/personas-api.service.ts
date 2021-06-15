import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PersonaInfoGeneral } from "@feature/personas/models/persona-info-general.model";
import { Persona } from "@feature/personas/models/persona.model";
import { environment } from "@env/environment";
import {map, switchMap} from "rxjs/operators";
import { PersonasService } from "@feature/personas/services/personas.service";

@Injectable()
export class PersonasApiService {

  private readonly BASE_URL: string;

  constructor(private readonly httpClient: HttpClient,
              private readonly personasService: PersonasService) {
    this.BASE_URL = `${environment.baseUrl}/v1/personas`
  }



  public listarTodas(): Observable<PersonaInfoGeneral[]> {
    return this.httpClient.get<PersonaInfoGeneral[]>(`${this.BASE_URL}`).pipe(
      map(this.personasService.sanearListado)
    );
  }

  public consultarPorId(numeroIdentificacion: number): Observable<Persona> {
    return this.httpClient.get<Persona>(`${this.BASE_URL}/${numeroIdentificacion}`);
  }

  public actualizarVisitas(numeroIdentificacion: number): Observable<any> {
    return this.httpClient.put(`${this.BASE_URL}/${numeroIdentificacion}/visitas`, null);
  }

  public obtenerDetalleActualizandoVisitas(numeroIdentificacion: number): Observable<Persona> {
    return this.actualizarVisitas(numeroIdentificacion).pipe(
      switchMap(() => this.consultarPorId(numeroIdentificacion)),
    )
  }
}
