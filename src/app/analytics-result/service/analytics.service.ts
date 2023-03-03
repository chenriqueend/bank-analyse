import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { IAnalysis } from "../model/analysis.model";
import * as groupedAnalysis from './grouped_analysis.json';

@Injectable({ providedIn: 'root' })
export class AnalyticsService{
    data = JSON.parse(JSON.stringify(groupedAnalysis));
    find(id?: string): Observable<IAnalysis> {
        of(groupedAnalysis);
        return of(this.data.documents.find(
                (doc : any) => doc.analysis.find((a:IAnalysis) => a.id === id)
            ).analysis.find((a:IAnalysis) => a.id === id)
        )
        .pipe(delay(1000));
    }
}