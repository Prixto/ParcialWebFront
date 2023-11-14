import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Libro} from "./libro";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private apiURL : string ='http://localhost:8080/libros/index'

  constructor(private http: HttpClient) { }

  getLibros(): Observable<Libro[]>{
    return this.http.get<Libro[]>(this.apiURL)
  }

}
