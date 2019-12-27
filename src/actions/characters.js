import { API } from '../consts';

export const CHAR_ACTIONS = {
	POPULATE: 'CHAR_POPULATE',
	PAGE_INFO: 'PAGE_INFO',
	SET_LOADING_ERROR: 'CHAR_SET_LOADING_ERROR',
	HANDLE_SORT: 'HANDLE_SORT',
	CHANGE_PAGE: 'CHANGE_PAGE'
};

const populate = (characters, info) => ({
	type: CHAR_ACTIONS.POPULATE,
	payload: {
		characters,
		info
	},
});

export const handleSort = sorted => ({
	type: CHAR_ACTIONS.HANDLE_SORT,
	payload: sorted
});

export const changePage = page => ({
	type: CHAR_ACTIONS.CHANGE_PAGE,
	payload: page,
});

export const loadPage = (e, pageInfo) => {
	return dispatch => {
		dispatch(changePage(pageInfo.activePage));
		dispatch(loadCharacters())
	}
};

const setLoadingError = error => ({
	type: CHAR_ACTIONS.SET_LOADING_ERROR,
	payload: error
});

export const loadCharacters = () => {
	return async (dispatch, getState) => {
		const state = getState();
		const getPage = state => state.activePage;
		const page = getPage(state);
		dispatch(setLoadingError(null));
		let success = false;
		try {
			const response = await fetch(`${API + page}`);
			if (response.status === 200) {
				const characters = await response.json();
				dispatch(populate(characters.results, characters.info));
				success = true;
			}
		} finally {
			if (!success) {
				dispatch(setLoadingError('Loading failed'));
			}
		}
	}
};
