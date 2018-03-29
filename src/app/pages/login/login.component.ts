import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  forgetPass;
  constructor (private afAuth: AngularFireAuth,
               private router: Router) {

  }

  ngOnInit(){
  }

  login(form: NgForm) {
    this.afAuth.auth.signInWithEmailAndPassword(form.value.email, form.value.password)
      .then( (user) => {
        this.router.navigate(['/page/retention-booster/churn-predictions']);
      })
      .catch(
        (err) => alert(err.message)
      );
  }

  reset(form){
    this.afAuth.auth.sendPasswordResetEmail(form.value.email)
      .then( resp => {
        console.log('sent!');
        this.forgetPass = false;
      } )
      .catch( error => console.log('failed to send', error) );

  }
}
