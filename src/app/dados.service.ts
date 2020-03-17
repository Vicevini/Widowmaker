import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  // dadosURL = 'https://4d084eed-6895-49c1-b8a7-dc28c5f032a9.mock.pstmn.io/usuarios';
   dadosURL = 'http://localhost:3000/usuario';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.dadosURL}`);
  }
}
