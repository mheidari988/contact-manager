import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  _users?: Observable<User[]>

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    private _router: Router) {

  }

  ngOnInit(): void {
    this.breakpointObserver
      //.observe([Breakpoints.XSmall])
      .observe([`(max-width:${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isSmallScreen = state.matches;
      });

    this._users = this.userService.users;
    this.userService.getAll();

    this._router.events.subscribe(() => {
      if (this.isSmallScreen) {
        this.sidenav?.close();
      }
    });
  }

  isSmallScreen: boolean = false;
}
