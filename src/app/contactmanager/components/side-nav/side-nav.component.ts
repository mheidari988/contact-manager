import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {

  _users?: Observable<User[]>

  constructor(private breakpointObserver: BreakpointObserver, private userService: UserService) {

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

    this._users.subscribe(data => {
      console.log(data);
    });
  }

  isSmallScreen: boolean = false;
}
