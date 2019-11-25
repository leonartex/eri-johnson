import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EriJohnsonPage } from './eri-johnson.page';
import { SessionGuard } from 'src/app/guards/session.guard';

const routes: Routes = [
  {
    path: '',
    component: EriJohnsonPage
  },
  {
    path: 'escrever',
    loadChildren: '../../pages/anotacoes/anotacoes.module#AnotacoesPageModule',
    canActivate: [SessionGuard]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EriJohnsonPage]
})
export class EriJohnsonPageModule {}
