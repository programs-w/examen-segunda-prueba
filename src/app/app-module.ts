import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { App } from './app';
import { ListaTareas } from './lista-tareas/lista-tareas';
import { NuevaTarea } from './nueva-tarea/nueva-tarea';
import { EditarTarea } from './editar-tarea/editar-tarea';


//PARA UTILIZAR EL ROUTING
import { routing,appRoutingProviders } from './app.routing';

//PARA UTILIZAR FORMULARIOS FORMULARIOS
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    ListaTareas,
    NuevaTarea,
    EditarTarea
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    appRoutingProviders
  ],
  bootstrap: [App]
})
export class AppModule { }
