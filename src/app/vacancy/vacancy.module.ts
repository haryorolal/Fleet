import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacancyRoutingModule } from './vacancy-routing.module';
import { VacancyHomeComponent } from './vacancy-home/vacancy-home.component';
import { ApplyComponent } from './apply/apply.component';
import { AngularFileUploaderModule} from "angular-file-uploader";
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { VacancyComponent } from './vacancy.component';
import { ContaineVacancyComponent } from './containe-vacancy/containe-vacancy.component';
import { ApplyVacantComponent } from './apply-vacant/apply-vacant.component';
import { ApplyRecepComponent } from './apply-recep/apply-recep.component';
import { ApplyMainComponent } from './apply-main/apply-main.component';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';
import { VacancyShopperComponent } from './vacancy-shopper/vacancy-shopper.component';
import { VacancyDigitalComponent } from './vacancy-digital/vacancy-digital.component';

//let toastr: Toastr = window['toastr'];

@NgModule({
  declarations: [
    VacancyHomeComponent,
    ApplyComponent, 
    VacancyComponent, 
    ContaineVacancyComponent, ApplyVacantComponent, ApplyRecepComponent, ApplyMainComponent, VacancyShopperComponent, VacancyDigitalComponent, 
  ],
  imports: [
    CommonModule,
    VacancyRoutingModule,    
    FormsModule,
    ReactiveFormsModule,    
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    AngularFileUploaderModule,
  ],
  providers: [
    //{provide: TOASTR_TOKEN, useValue: toastr}
  ]
})
export class VacancyModule { }
