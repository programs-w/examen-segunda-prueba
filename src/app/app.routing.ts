import { Component, ModuleWithProviders } from "@angular/core";
import { Route, Router,RouterModule,Routes } from "@angular/router";

import { EditarTarea } from "./editar-tarea/editar-tarea";
import { NuevaTarea } from "./nueva-tarea/nueva-tarea";
import { ListaTareas } from "./lista-tareas/lista-tareas";

const appRoutes:Routes =[

    {path: '',component: ListaTareas},
    {path: 'lista-tareas', component: ListaTareas},
    {path: 'editar-tarea/:id', component:EditarTarea},
    {path:'nueva-tarea', component:NuevaTarea},
    {path: '**',component: ListaTareas},

]
export const appRoutingProviders:any []=[];
export const routing:ModuleWithProviders<Route>=RouterModule.forRoot(appRoutes) ;
