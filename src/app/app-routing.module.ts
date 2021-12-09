import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepComponent } from './component/step/step.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "landing",
    pathMatch: "full"
  },
  {
    path: "landing",
    component: LandingComponent,
    children: [
      {
        path: "",
        redirectTo: "step/0",
        pathMatch: "full"
      },
      {
        path: "step/:id",
        component: StepComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
