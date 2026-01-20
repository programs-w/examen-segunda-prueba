import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/Tarea';
import { TareaService } from '../services/TareaService';
import { Router,ActivatedRoute, Params } from '@angular/router';
//PARA NO TENER QUE QUE DARLE CLIC Y QUE CARGUE DE UNA LA INFORMACION
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-editar-tarea',
  standalone: false,
  templateUrl: './editar-tarea.html',
  styleUrl: './editar-tarea.css',
  providers:[TareaService]
})
export class EditarTarea implements OnInit {
  public idEditando! : number;
  public tareaEditando! : Tarea;

  constructor(private mi_servicio: TareaService, private _route: ActivatedRoute , private _router: Router, private cdr:ChangeDetectorRef){
    this._route=_route;
    this._router=_router;
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{
    console.log ("Parámetros: ", params);

    this.idEditando=params['id'];
    
    this.visualizarTareaEspecifica(this.idEditando)
    }

    )
  }

  //READBYID
  visualizarTareaEspecifica (id : number) : void {
    this.mi_servicio.ReadById(id).subscribe({
      next:data =>{
        console.log("Seleccionada: ", data);
        this.tareaEditando=data;
        this.cdr.detectChanges();

      },
      error:error =>{
        console.log ("Error: ", error);

      }
    })
  }

  //UPDATE
  actualizarTarea (id: number, tareaEditando: Tarea):void {
    this.mi_servicio.Update(this.idEditando,this.tareaEditando).subscribe({
      next: data =>{
        console.log("Editada: ",data);
      },
      error:error =>{
        console.log("Error: ", error);
      }
    })
  }

  cancelar (): void{
    this._router.navigate(['/lista-tarea'])
  }


}
