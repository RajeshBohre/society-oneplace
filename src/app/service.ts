import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable()
export class CommonService {
constructor(private http: HttpClient) { }
url: String = 'http://localhost:8080/api/'

saveUser(user: any) {
    return this.http.post(this.url + 'SaveUser/', user).
    pipe(map(
        (data: any) => {return data;}), 
        catchError( error => {
            return throwError( 'Something went wrong!' );
        })
    )
}
uploadEvidence(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.url}upload_files`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

saveExpenses(user: any) {
    return this.http.post(this.url +'SaveExpenses/', user)
    .pipe(map((data: any) => 
    {return data;}), 
    catchError( error => 
        {return throwError( 'Something went wrong!' );
    })
    )
}
    
GetUser() {
return this.http.get(this.url + 'getUser/').pipe(map(
    (data: any) => {
        return data;}), catchError(error => {
        return throwError('Something went wrong!');}))}
getMemeberList() {
    return this.http.get(this.url + 'getMemeberList/').pipe(map((data: any) => {
        return data;}), catchError(error => {
            return throwError('Something went wrong!');}))}
getMonthlyExp() {
    return this.http.get(this.url + 'getMonthlyExp/').pipe(map((data: any) => {
        return data;}), catchError(error => {
            return throwError('Something went wrong!');
    })
    )
}
getMonthlyMaintanence() {
    return this.http.get(this.url + 'getMonthlyMaintanence/').pipe(map((data: any) => {
        return data;}), catchError(error => {
            return throwError('Something went wrong!');
    })
    )
}
              
deleteUser(id: any){return this.http.post(this.url +'deleteUser/',{'id': id})
        .pipe(map((data: any) => 
        {return data;}), 
        catchError( error => 
        {return throwError( 'Something went wrong!' );
        })
        )
    }
}