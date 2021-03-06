import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  { path: 'exame-fotografico', loadChildren: './pages/teste-foto/teste-foto.module#TesteFotoPageModule' },
  { path: 'questionario', loadChildren: './pages/questionario/questionario.module#QuestionarioPageModule' },
  { path: 'resultado', loadChildren: './pages/resultado/resultado.module#ResultadoPageModule' },
  {
    path: 'cadastro',
    loadChildren: './pages/cadastro/cadastro.module#CadastroPageModule'
  },
  { path: 'recuperar-senha', loadChildren: './pages/recuperar-senha/recuperar-senha.module#RecuperarSenhaPageModule' },
  {
    path: 'ser-eri',
    loadChildren: './pages/eri-johnson/eri-johnson.module#EriJohnsonPageModule'
  },
  {
    path: 'logout',
    loadChildren: './pages/logout/logout.module#LogoutPageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
