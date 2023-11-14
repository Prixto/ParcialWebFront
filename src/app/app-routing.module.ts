import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LibrosComponent} from "./libros/libros.component";
import {BibliotecasComponent} from "./bibliotecas/bibliotecas.component";

const routes: Routes = [
  {path: '', redirectTo : '/libros', pathMatch : 'full'},
  { path: 'libros', component: LibrosComponent },
  { path:'bibliotecas', component: BibliotecasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
