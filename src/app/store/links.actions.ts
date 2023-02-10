import { createAction, props } from '@ngrx/store';
import { Link } from '../models/link.model';

export const getLinks = createAction('[LINKS] GET_LINKS');

export const getLinksSuccess = createAction(
  '[LINKS] GET_LINKS_SUCCESS',
  props<{ links: Link[] }>()
);

export const getLinksError = createAction(
  '[LINKS] GET_LINKS_ERROR',
  props<{ error: any }>()
);

export const addLink = createAction(
  '[LINKS] ADD_LINK',
  props<{ link: Link }>()
);

export const addLinkSuccess = createAction(
  '[LINKS] ADD_LINK_SUCCESS',
  props<{ link: Link }>()
);

export const addLinkError = createAction(
  '[LINKS] ADD_LINK_ERROR',
  props<{ error: any }>()
);

export const deleteLink = createAction(
  '[LINKS] DELETE_LINK',
  props<{ id: string }>()
);

export const deleteLinkSuccess = createAction(
  '[LINKS] DELETE_LINK_SUCCESS',
  props<{ id: string }>()
);

export const deleteLinkError = createAction(
  '[LINKS] DELETE_LINK_ERROR',
  props<{ error: any }>()
);
