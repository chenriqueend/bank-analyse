import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AnalyticsService } from '../service/analytics.service';

@Component({
  selector: 'app-find-identifier',
  templateUrl: './find-identifier.component.html',
  styleUrls: ['./find-identifier.component.scss'],
  providers: [MessageService],
})
export class FindIdentifierComponent {
  searchForm: FormGroup<any> = new FormGroup({
    id: new FormControl(
      { value: null, disabled: false },
      {
        nonNullable: false,
        validators: [Validators.required],
      }
    ),
  });

  constructor(
    private route: Router,
    private messageService: MessageService,
    private analyticsService: AnalyticsService
  ) {}

  async loadAnalyse() {
    const id = this.searchForm.getRawValue().id;
    const data = this.analyticsService.data;
    const documents = data.documents;
    const validAnalyses: string[] = documents
      .map((dados: any) => {
        return dados.analysis.map((a: any) => {
          return a.id;
        });
      })
      .flat();

    if (validAnalyses.includes(id)) {
      this.messageService.add({
        severity: 'success',
        summary: 'Análise valida',
        detail: 'Redirecionando para a pagina da análise...',
      });
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 2500);
      });
      this.route.navigate([
        '/analyse',
        this.searchForm.getRawValue().id,
        'detail',
      ]);
    } else if (!id) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Campo vazio',
        detail: 'Por favor preencha o campo com alguma análise válida',
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Campo invalido',
        detail: 'Por favor preencha o campo com alguma análise válida',
      });
    }
  }
}
