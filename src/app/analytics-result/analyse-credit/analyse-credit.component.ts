import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnalyticsService } from '../service/analytics.service';
import { IAnalysis } from "../model/analysis.model";

@Component({
  selector: 'app-analyse-credit',
  templateUrl: './analyse-credit.component.html',
  styleUrls: ['./analyse-credit.component.scss']
})
export class AnalyseCreditComponent implements OnInit{

  loading = false;
  docsResult?: any; 
  id?: string;
  constructor(private route: ActivatedRoute, private analyticsService: AnalyticsService){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")!;
    this.loading = true;
    this.analyticsService
      .find(this.id)
      .subscribe(
        (response) => {
          console.log('response',response);
          this.docsResult = response ?? [];
          this.loading = false;
        },
        (error)=>{
          console.log('error',error);
          this.loading = false;
        }
      );
  }
  


}

