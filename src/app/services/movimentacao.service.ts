import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { create } from 'domain';

const baseUrl = "https://bankline-api-dev.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  constructor(private http: HttpClient) { }
 
  list(): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacoes`);
  }
  findByIdConta(idConta:any): Observable<any>{
      return this.http.get(`${baseUrl}/movimentacoes/${idConta}`)
  }

  create(movimentacao:any): Observable<any> {
    return this.http.post(`${baseUrl}/movimentacoes`, movimentacao);
  }
}


