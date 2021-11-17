import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoELocalComponent } from './contato-elocal/contato-elocal.component';
import { InicioComponent } from './inicio/inicio.component';
import { NossaMissaoComponent } from './nossa-missao/nossa-missao.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

const routes: Routes = [
  {path: '',redirectTo: 'inicio',pathMatch: 'full'},

  {path: 'inicio',component: InicioComponent},
  {path: 'quem-somos',component: QuemSomosComponent},
  {path: 'nossa-missao',component: NossaMissaoComponent},
  {path: 'contato-elocal',component: ContatoELocalComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
