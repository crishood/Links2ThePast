import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Link } from '../../models/link.model';
import { getLinks } from '../../store/links.actions';
import { State } from '../../store/links.reducer';

@Component({
  selector: 'app-url-cards-container',
  templateUrl: './url-cards-container.component.html',
  styleUrls: ['./url-cards-container.component.scss'],
})
export class UrlCardsContainerComponent implements OnInit {
  links$!: Observable<Link[]>;

  constructor(private store: Store<{ linksList: State }>) {}

  ngOnInit(): void {
    this.links$ = this.store.select((state) => {
      return state.linksList.links;
    });
    this.getLinks();
  }

  getLinks() {
    this.store.dispatch(getLinks());
  }
}
