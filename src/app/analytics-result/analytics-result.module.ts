import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyseCreditComponent } from './analyse-credit/analyse-credit.component';
import { AnalyticsResultRoutingModule } from './analytics-result-routing.module';
import { FindIdentifierComponent } from './find-identifier/find-identifier.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';
import { TagModule } from 'primeng/tag';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [
    AnalyseCreditComponent,
    FindIdentifierComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AnalyticsResultRoutingModule,
    InputTextModule,
    ButtonModule,
    ProgressSpinnerModule,
    CardModule,
    ToastModule,
    TagModule,
    MessageModule
  ]
})
export class AnalyticsResultModule { }
