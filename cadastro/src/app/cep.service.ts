import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor( private http: HttpClient) { }

  getCep(cep: any) {
    var headers = new HttpHeaders();
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`, {headers: headers}).pipe(retry(1));

  }
}
