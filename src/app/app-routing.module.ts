import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';

//const vacancyModule = () => import("./vacancy/vacancy.module").then(x => x.VacancyModule);
const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'aboutUs', component:AboutComponent},
  {path: 'vacancy-home', loadChildren: './vacancy/vacancy.module#VacancyModule'},
  //{path: 'vacancy-home', loadChildren: vacancyModule},
  {path: 'contact', component: ContactusComponent},
  {path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
