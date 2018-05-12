import { getDataSaga } from './sagas';

function* rootSaga() {
  yield [
    getDataSaga()
  ];
}

export default rootSaga;
