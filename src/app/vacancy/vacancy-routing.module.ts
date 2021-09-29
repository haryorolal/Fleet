import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VacancyHomeComponent } from './vacancy-home/vacancy-home.component';
import { ApplyComponent } from './apply/apply.component';
import { VacancyComponent } from './vacancy.component';
import { ContaineVacancyComponent } from './containe-vacancy/containe-vacancy.component';
import { ApplyVacantComponent } from './apply-vacant/apply-vacant.component';
import { ApplyRecepComponent } from './apply-recep/apply-recep.component';
import { ApplyMainComponent } from './apply-main/apply-main.component';
import { VacancyShopperComponent } from './vacancy-shopper/vacancy-shopper.component';
import { VacancyDigitalComponent } from './vacancy-digital/vacancy-digital.component';


const routes: Routes = [
  {path: '', component: VacancyComponent, children:[
    {path: '', redirectTo: '/vacancy-home/vacanthome', pathMatch:'full'},
    {path: 'vacanthome', component:ContaineVacancyComponent},
    {path: 'vacancy', component:VacancyHomeComponent},
    {path: 'apply', component: ApplyComponent},
    {path: 'applyvacant', component: ApplyVacantComponent},
    {path: 'applyRecep', component:ApplyRecepComponent},
    {path: 'applymain', component:ApplyMainComponent},
    {path: 'vacancy-shopper', component: VacancyShopperComponent},
    {path: 'vacancy-digital', component: VacancyDigitalComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacancyRoutingModule { }
