import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypographyComponent} from "./modules/typography/typography.component";
import {HomeComponent} from "./modules/home/home.component";
import {BreakpointsComponent} from "./modules/breakpoints/breakpoints.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'breakpoints',
    component: BreakpointsComponent
  },
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
