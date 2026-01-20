import { Component, OnInit } from '@angular/core';
import { TareaService } from '../services/TareaService';
import { Tarea } from '../models/Tarea';

@Component({
  selector: 'app-nueva-tarea',
  standalone: false,
  templateUrl: './nueva-tarea.html',
  styleUrl: './nueva-tarea.css',
  providers: [TareaService]
})
export class NuevaTarea implements OnInit{
  public tareaNueva = new Tarea (0,0,' ',false)

 constructor(private mi_servicio:TareaService){}

 ngOnInit(): void {
   
 }

 //CREATE 
 crearTarea ():void {
   this.mi_servicio.Create(this.tareaNueva).subscribe({
    next:data=>{
      console.log("Nueva tarea: ",this.tareaNueva)
    },
    error:error=>{
      console.log("Error: ", error)
    }
   })
 }

}
