import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { StepComponent } from './component/step/step.component';
import { StepsNavComponent } from './component/steps-nav/steps-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    StepComponent,
    StepsNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
