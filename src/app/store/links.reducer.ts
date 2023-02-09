import {
  createReducer,
  on,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import { Link } from '../models/link.model';
import { actions } from './links.actions';

export interface LinksState {
  links: Link[];
}

export const initialState: LinksState = {
  links: [],
};

export const linksReducer = createReducer(
  initialState,
  on(actions.getLinks, (state, { links }) => ({ ...state, links })),
  on(actions.addLink, (state, { link }) => ({
    ...state,
    links: [...state.links, link],
  })),
  on(actions.deleteLink, (state, { id }) => ({
    ...state,
    links: state.links.filter((link) => link.id !== id),
  }))
);

export const selectLinksState = createFeatureSelector<LinksState>('links');
