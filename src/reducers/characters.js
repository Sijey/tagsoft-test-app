import {CHAR_ACTIONS} from '../actions/characters';

const initialState = {
	characters: null,
	pageInfo: null,
	loadingError: null,
	activePage: 1
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CHAR_ACTIONS.POPULATE:
			return {
				...state,
				characters: action.payload.characters,
				pageInfo: action.payload.info
			};
		case CHAR_ACTIONS.SET_LOADING_ERROR:
			return {
				...state,
				loadingError: action.payload
			};
		case CHAR_ACTIONS.HANDLE_SORT:
			return {
				...state,
				characters: [...state.characters].sort((a, b) => a.name.localeCompare(b.name))
			};
		case CHAR_ACTIONS.CHANGE_PAGE:
			return {
				...state,
				activePage: action.payload
			};
		default:
			return state;
	}
};
