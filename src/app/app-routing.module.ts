import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SessionGuard } from '../app/guards/session.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'teste-foto', loadChildren: './pages/teste-foto/teste-foto.module#TesteFotoPageModule' },
  { path: 'questionario', loadChildren: './pages/questionario/questionario.module#QuestionarioPageModule' },
  { path: 'cadastro', loadChildren: './pages/cadastro/cadastro.module#CadastroPageModule' },
  { path: 'resultado', loadChildren: './pages/resultado/resultado.module#ResultadoPageModule' },
  {
    path: 'administracao',
    loadChildren: './pages/administracao/administracao.module#AdministracaoPageModule',
    canActivate: [SessionGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
