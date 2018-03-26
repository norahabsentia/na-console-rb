import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  showLocation;

  @Input() position = 'normal';

  user: any;
  email;

  userMenu = [{ title: 'Profile' }, { title: 'Log out', menuClick: () => {console.log(8888)} }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private afAuth: AngularFireAuth,
              private router: Router) {
    this.afAuth.authState.subscribe(auth => this.email = auth.email);// user info is inside auth object

  }
  logout(){

  }
  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = { name: 'Kate Martinez', picture: 'assets/images/user.png' });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch'  );
  }

  menuClick(e){
    if(e.title === "Log out"){
      this.afAuth.auth.signOut();
      this.router.navigate(['/auth/login']);
    }
    console.log(e)
  }
}
