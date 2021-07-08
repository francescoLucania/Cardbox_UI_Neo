import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorsComponent } from './modules/colors/colors.component';
import { HeaderComponent } from './components/header/header.component';
import { TypographyComponent } from './modules/typography/typography.component';
import {NgxPageScrollModule} from "ngx-page-scroll";
import { BreakpointsComponent } from './modules/breakpoints/breakpoints.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    HeaderComponent,
    TypographyComponent,
    BreakpointsComponent,
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
