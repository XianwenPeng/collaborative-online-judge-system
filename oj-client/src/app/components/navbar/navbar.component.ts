import { Component, OnInit, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = "COJ";

  username = "";
  subscriptionName: Subscription;

  constructor(@Inject('auth') private auth,
              // @Inject('data') private data,
              // @Inject('auth') private auth,
              private router : Router
            ) { }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.username = this.auth.getProfile().nickname;
    }
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

}
