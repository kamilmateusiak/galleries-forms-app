// import { match } from '../../utils';
import * as types from './constants';

interface IState {
	galleries: Array<{}>,
	testData: Array<{}>
};

interface IAction {
  type: string,
  payload: object,
};

const INITIAL_STATE = {
	galleries: [],
	testData: []
};

export default (state: IState = INITIAL_STATE, { type, payload }: IAction) => {
	switch(type) {
		case types.FETCH_GALLERIES: 
			return {...state};
		case types.GET_DATA_DONE:
			return {...state, testData: payload};
		default:
			return {...state};
	}
}
