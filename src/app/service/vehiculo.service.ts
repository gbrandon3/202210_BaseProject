import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from "@angular/common/http";
import { Vehiculo } from '../model/vehiculo';
import { Observable } from 'rxjs';
@Injectable({providedIn: 'root'})
export class VehiculoService {
  private apiUrl: string = environment.baseUrl ;
constructor(private http: HttpClient) { }

getVehiculos():Observable<Vehiculo[]>{
  return this.http.get<Vehiculo[]>(this.apiUrl);
}

}
