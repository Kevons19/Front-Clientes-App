import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json'
import { Cliente } from './cliente';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint:string='http://localhost:8080/api/'
  
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http:HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    //return of(CLIENTES);
    return this.http.get<Cliente[]>(this.urlEndPoint+'clientes');
  }

  create(cliente:Cliente) : Observable<Cliente>{
    return this.http.post<Cliente>(this.urlEndPoint+'clientes', cliente, {headers: this.httpHeaders})
  }

  getCliente(id) : Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}clientes/${id}`)
  }

  update(cliente:Cliente) : Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndPoint}clientes/${cliente.id}`,cliente, {headers: this.httpHeaders})
  }

  delete(id:number) : Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}clientes/${id}`, {headers: this.httpHeaders})
  }
}