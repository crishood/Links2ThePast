import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link.model';

@Component({
  selector: 'app-url-card',
  templateUrl: './url-card.component.html',
  styleUrls: ['./url-card.component.scss'],
})
export class UrlCardComponent implements OnInit {
  @Input() link!: Link;
  url!: string;
  description!: string;
  constructor() {}
  ngOnInit(): void {
    console.log(this.link.url);
    this.url = this.link.url;
    this.description = this.link.description;
  }
}
