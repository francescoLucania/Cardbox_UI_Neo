import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypographyComponent} from "./modules/typography/typography.component";

const routes: Routes = [
  {
    path: 'typography',
    component: TypographyComponent
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
