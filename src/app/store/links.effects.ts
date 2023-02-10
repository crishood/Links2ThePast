import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { LinkService } from '../services/link.service';
import { getLinksSuccess, getLinksError } from './links.actions';

@Injectable()
export class LinkEffects {
  getLinks$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[LINKS] GET_LINKS'),
      mergeMap(() =>
        this.linkService.getLinks().pipe(
          map((links) => {
            console.log('links', links);
            return getLinksSuccess({ links });
          }),
          catchError((error) => of(getLinksError({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private linkService: LinkService) {}
}
