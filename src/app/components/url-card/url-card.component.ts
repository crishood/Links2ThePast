import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Link } from 'src/app/models/link.model';
import { deleteLinkSuccess } from 'src/app/store/links.actions';
@Component({
  selector: 'app-url-card',
  templateUrl: './url-card.component.html',
  styleUrls: ['./url-card.component.scss'],
})
export class UrlCardComponent implements OnInit {
  @Input() link!: Link;
  url!: string;
  description!: string;
  id!: string;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.url = this.link.url;
    this.description = this.link.description;
    this.id = this.link.id;
  }
  deleteLink(id: string) {
    this.store.dispatch(deleteLinkSuccess({ id }));
  }
}
