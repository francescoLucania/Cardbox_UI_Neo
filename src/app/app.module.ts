import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorsComponent } from './modules/colors/colors.component';
import { HeaderComponent } from './components/header/header.component';
import { TypographyComponent } from './modules/typography/typography.component';
import {NgxPageScrollModule} from "ngx-page-scroll";
import { BreakpointsComponent } from './modules/breakpoints/breakpoints.component';
import { HomeComponent } from './modules/home/home.component';
import { ColorFilterPipe } from './pipes/color-filter/color-filter.pipe';
import { ButtonsComponent } from './modules/buttons/buttons.component';
import { ConnectComponent } from './modules/connect/connect.component';
import { CodestyleComponent } from './modules/codestyle/codestyle.component';
import { HelpersComponent } from './modules/helpers/helpers.component';
import { ServiceMixinsComponent } from './modules/service-mixins/service-mixins.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    HeaderComponent,
    TypographyComponent,
    BreakpointsComponent,
    HomeComponent,
    ColorFilterPipe,
    ButtonsComponent,
    ConnectComponent,
    CodestyleComponent,
    HelpersComponent,
    ServiceMixinsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
