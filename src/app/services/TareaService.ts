import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Tarea } from "../models/Tarea";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class TareaService {

    private url ='https://jsonplaceholder.typicode.com/todos'

    constructor (private mi_http:HttpClient){

    }
    //READ ALL
    ReadAllTareas (): Observable <Tarea[]> {
        return this.mi_http.get<Tarea[]>(this.url)
    }

    //GETBYID
    ReadById (id: number) : Observable<Tarea>{
        return this.mi_http.get<Tarea>(`${this.url}/${id}`);

    }

    //CREATE
    Create (tarea : Tarea) : Observable<Tarea>{
        return this.mi_http.post<Tarea>(this.url,tarea)
    }

    //UPDATE
    Update (id:number, tarea : Tarea) : Observable <Tarea>{
        return this.mi_http.put<Tarea>(`${this.url}/${id}`,tarea)
    }

    //DELETE
    Delete (id : number) : Observable <void> {
        return this.mi_http.delete<void>(`${this.url}/${id}`);
    }



}