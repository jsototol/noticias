import { HTTP_OPTIONS } from './../../config/app';
import { Distritos } from './../Interfaces/distritos';
import { Provinces } from './../Interfaces/provinces';
import { Departments } from './../Interfaces/departments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_ENDPOINT } from 'src/config/app';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseEndpoint = `${BASE_ENDPOINT}/colegio`;
  private cabeceras!: HttpHeaders;

  constructor(private http: HttpClient) {
    this.cabeceras = HTTP_OPTIONS.headers;
   }

  getDepartments(): Observable<Departments[]>{
    return this.http.get<Departments[]>(`${this.baseEndpoint}/departamento`,
    { headers: this.cabeceras})
  }

  getProvincias(idDepartamento: number): Observable<Provinces[]>{
    return this.http.get<Provinces[]>(`${this.baseEndpoint}/provincia/departamento/${idDepartamento}`)
  }

  getDistritos(idProvincia: number): Observable<Distritos[]>{
    return this.http.get<Distritos[]>(`${this.baseEndpoint}/distrito/provincia/${idProvincia}`)
  }

}
