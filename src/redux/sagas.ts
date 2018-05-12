import { put, takeEvery } from 'redux-saga/effects'
import firebase from '../services/firebase';
import * as actions from './actionCreators';
import * as types from './constants';

export function* getData() {
  try {
    const firebaseRef = firebase.database().ref('/gallery');
    const data = yield firebaseRef.on('value', (snap: any) => {
			const responseData = snap.val();
			
			const newGalleriesData:Array<{}> = [];
			Object.keys(responseData).forEach(galleryKey => {
				newGalleriesData.push({label: responseData[galleryKey].galleryName, value: galleryKey}) 
			})      
      return newGalleriesData;
    });
    yield put(actions.getDataDone(data));
  } catch (e) {
    yield put(actions.getDataFailed(e));
  }
}

export function* getDataSaga() {
  yield takeEvery(types.GET_DATA_REQUESTED, getData);
}