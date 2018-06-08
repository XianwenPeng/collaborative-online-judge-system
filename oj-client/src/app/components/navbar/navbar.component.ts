import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl } from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = "COJ";

  username: Observable<string>;

  searchBox: FormControl = new FormControl();

  subscription: Subscription;

  subscriptionName: Subscription;

  subject = new Subject<string>();

  constructor(@Inject('auth') private auth,
              @Inject('input') private input,
              // @Inject('data') private data,
              // @Inject('auth') private auth,
              private router : Router
            ) { }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.username = this.auth.getProfile().nickname;
    }

    this.subscription = this.searchBox
                            .valueChanges
                            .debounceTime(200)
                            .subscribe(
                                term => this.input.changeInput(term)
                              );

    console.log( Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  searchProblem(): void {
    this.router.navigate(['/problems']);
  }

  getUserName(): void {
    this.subscriptionName = this.auth.getUserName()
                            .subscribe(
                              name => console.log(name)
                            );
  }

  getSubject(): Subject<string> {
    return this.subject;
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

}
