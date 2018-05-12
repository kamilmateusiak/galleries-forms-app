import * as types from './constants';

export function getDataRequested() {
  return {
    type: types.GET_DATA_REQUESTED
  };
}

export function getDataDone(data: any) {
  return {
    payload: data,
    type: types.GET_DATA_DONE
  };
}

export function getDataFailed(error: Error) {
  return {
    payload: error,
    type: types.GET_DATA_FAILED
  };
}