import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TypographyComponent} from "./modules/typography/typography.component";
import {HomeComponent} from "./modules/home/home.component";
import {BreakpointsComponent} from "./modules/breakpoints/breakpoints.component";
import {ColorsComponent} from "./modules/colors/colors.component";
import {ButtonsComponent} from "./modules/buttons/buttons.component";
import {ConnectComponent} from "./modules/connect/connect.component";
import {CodestyleComponent} from "./modules/codestyle/codestyle.component";
import {ServiceMixinsComponent} from "./modules/service-mixins/service-mixins.component";
import {TaxesAdaptiveTableComponent} from "./modules/taxes-adaptive-table/taxes-adaptive-table.component";

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'connect',
    component: ConnectComponent
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
    path: 'colors',
    component: ColorsComponent
  },
  {
    path: 'buttons',
    component: ButtonsComponent
  },
  {
    path: 'codestyle',
    component: CodestyleComponent
  },
  {
    path: 'service-mixins',
    component: ServiceMixinsComponent
  },
  {
    path: 'taxes-table',
    component: TaxesAdaptiveTableComponent
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
