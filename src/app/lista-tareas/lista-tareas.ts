import { Component, OnInit } from '@angular/core';
import { TareaService } from '../services/TareaService';
import { Tarea } from '../models/Tarea';
//PARA NO TENER QUE QUE DARLE CLIC Y QUE CARGUE DE UNA LA INFORMACION
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  standalone: false,
  templateUrl: './lista-tareas.html',
  styleUrl: './lista-tareas.css',
  providers:[TareaService]
})
export class ListaTareas implements OnInit{
     public tareas : Tarea []=[];
  
    constructor(private mi_servicio : TareaService , private cdr: ChangeDetectorRef){
  
    }
    ngOnInit(): void {
      this.visualizarTodasTareas()
    }
    
    //READ ALL
    visualizarTodasTareas() : void {
      this.mi_servicio.ReadAllTareas().subscribe({
        next:data => {
          console.log ("Tareas: ", data)
          this.tareas=data.slice(0, 30);
          this.cdr.detectChanges();
        },
        error:error =>{
          console.log ("Error: ", error)
        }
      })
  
    }

    //DELETE
    borrarTarea (id : number) : void {
      this.mi_servicio.Delete(id).subscribe({
        next:data =>{
          console.log ("Tarea eliminada: ", data)
          console.log ("Tarea ID: ",id)
        },
        error:error =>{
          console.log ("Error: ",error)
        }
      })
    }

}
