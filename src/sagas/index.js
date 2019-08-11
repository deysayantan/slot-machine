import { all } from 'redux-saga/effects';

import resultSaga from './resultSaga';
import userInteractionSaga from './userInteractionSaga'
import slotRunningSaga from './slotRunningSaga'


export default function* rootSaga() {
    yield all([resultSaga(),userInteractionSaga(),slotRunningSaga()]);
}