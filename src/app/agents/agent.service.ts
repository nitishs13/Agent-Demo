import { Injectable } from "@angular/core";
import { IAgent } from "./agent";
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class AgentService{
    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient) {}

    getAgents(): Observable<IAgent[]> {
        return this.http.get<IAgent[]>(this.productUrl)
        .pipe(tap(data => console.log('All: '+ JSON.stringify(data))),
        catchError(this.handleError));
    }
    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if (err.error instanceof ErrorEvent){
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}