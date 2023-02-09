import { createAction, props } from '@ngrx/store';
import { Link } from '../models/link.model';

const getLinks = createAction('[LINKS] GET_LINKS', props<{ links: Link[] }>());
const addLink = createAction('[LINKS] ADD_LINK', props<{ link: Link }>());
const deleteLink = createAction('[LINKS] DELETE_LINK', props<{ id: string }>());

export const actions = {
  getLinks,
  addLink,
  deleteLink,
};
