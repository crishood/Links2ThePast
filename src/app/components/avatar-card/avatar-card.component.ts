import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-avatar-card',
  templateUrl: './avatar-card.component.html',
  styleUrls: ['./avatar-card.component.scss'],
})
export class AvatarCardComponent implements OnInit {
  public name: string = '';
  public mail: string = '';
  public avatar: string = '';
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser('vskyrlu2qp').subscribe((user) => {
      this.name = user.name;
      this.mail = user.email;
      this.avatar = user.avatar;
    });
  }
}
