import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  _user?: User | null;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService) {

  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      let id = Number(params['id']);
      if (!id) {
        id = 1;
      }

      this._user = null;

      this._userService.users.subscribe(users => {
        if (users.length == 0) {
          return;
        }

        setTimeout(() => {
          this._user = this._userService.getUserById(id);
        }, 500);
      })
    });
  }

}
