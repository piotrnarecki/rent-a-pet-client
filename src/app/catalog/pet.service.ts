import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPet } from './pet.model';


@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) {}

  getPets(): Observable<IPet[]> {


    return this.http.get<IPet[]>('api/pets');
  }
}
