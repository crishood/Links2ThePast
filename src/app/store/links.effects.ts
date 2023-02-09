import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LinkService } from '../services/link.service';

@Injectable()
export class LinksEffects {
  constructor(private actions$: Actions, private linkService: LinkService) {}

  getLinks$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[LINKS] GET_LINKS'),
      mergeMap(() =>
        this.linkService.getLinks().pipe(
          map((links) => ({ type: '[LINKS] GET_LINKS', links })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
