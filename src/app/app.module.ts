import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorsComponent } from './modules/colors/colors.component';
import { HeaderComponent } from './components/header/header.component';
import { TypographyComponent } from './modules/typography/typography.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorsComponent,
    HeaderComponent,
    TypographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
