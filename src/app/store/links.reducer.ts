import { Action, createReducer, on } from '@ngrx/store';
import {
  getLinks,
  getLinksSuccess,
  getLinksError,
  addLink,
  addLinkSuccess,
  addLinkError,
  deleteLink,
  deleteLinkSuccess,
  deleteLinkError,
} from './links.actions';
import { Link } from '../models/link.model';

export interface State {
  links: Link[];
  loading: boolean;
  error: any;
}

const initialState: State = {
  links: [],
  loading: false,
  error: null,
};

export const linkReducer = createReducer(
  initialState,
  on(getLinks, (state) => ({ ...state, loading: true, error: null })),
  on(getLinksSuccess, (state, { links }) => ({
    ...state,
    links,
  })),
  on(getLinksError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(addLink, (state) => ({ ...state, loading: true, error: null })),
  on(addLinkSuccess, (state, { link }) => {
    console.log('link reducer', link);
    return {
      ...state,
      links: [...state.links, link],
      loading: false,
      error: null,
    };
  }),
  on(addLinkError, (state, { error }) => ({ ...state, loading: false, error })),
  on(deleteLink, (state) => ({ ...state, loading: true, error: null })),
  on(deleteLinkSuccess, (state, { id }) => ({
    ...state,
    links: state.links.filter((link) => link.id !== id),
    loading: false,
    error: null,
  })),
  on(deleteLinkError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return linkReducer(state, action);
}
