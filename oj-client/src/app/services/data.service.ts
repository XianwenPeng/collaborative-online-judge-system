import { Injectable } from '@angular/core';
import { Problem } from '../models/problem.model';
import { PROBLEMS } from '../mock-problems';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private problemsSource = new BehaviorSubject<Problem[]>([]);

  constructor(private http: HttpClient) { }

  parseToProblems(res) {

  }

  getProblems(): Observable<Problem[]> {
    this.http.get(`/api/v1/problems`)
    .toPromise()
    .then((res: Response) => {
      this.problemsSource.next(JSON.parse(JSON.stringify(res)));
    })
    .catch(this.handleError);
    return this.problemsSource.asObservable();
  }

  getProblem(id: number): Promise<Problem> {
    return this.http.get(`api/v1/problems/${id}`)
    .toPromise()
    .then((res: Response) => {
      return JSON.parse(JSON.stringify(res));
    })
    .catch(this.handleError);
  }

  addProblem(problem: Problem): Promise<Problem> {
    const httpOptions = {
       headers: new HttpHeaders({
       'Content-Type':  'application/json',
      })
    };
    return this.http.post(`/api/v1/problems`, problem, httpOptions)
    .toPromise()
    .then((res: Response) => {
      this.getProblems();
      return JSON.parse(JSON.stringify(res));
    })
    .catch(this.handleError);
  }

  addAnswer(answer): void{
    
  }

  restoreSubmittedAnswer(): void {

  }

  buildAndRun(data): Promise<Object> {
    const httpOptions = {
       headers: new HttpHeaders({
       'Content-Type':  'application/json',
      })
    };
    return this.http.post(`/api/v1/build_and_run`, data, httpOptions)
    .toPromise()
    .then((res: Response) => {
      console.log(res);
      return res;
    })
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
      console.error('An error happened', error);
      return Promise.reject(error.body || error);
    }
}
