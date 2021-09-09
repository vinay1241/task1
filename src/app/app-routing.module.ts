import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'login',component:LoginpageComponent},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'**',redirectTo:'login'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
