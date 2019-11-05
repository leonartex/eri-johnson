import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';



import { IonicModule } from '@ionic/angular';

import { TesteFotoPage } from './teste-foto.page';

const routes: Routes = [
  {
    path: '',
    component: TesteFotoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TesteFotoPage],
  providers: []
})
export class TesteFotoPageModule {}
