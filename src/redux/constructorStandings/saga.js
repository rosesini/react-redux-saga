import { call, put, takeEvery } from 'redux-saga/effects'
import actions, { fetchConstructorStandingsFulfilled, fetchConstructorStandingsRejected } from './actions'
import { apiFetchConstructorStandings, constructorStadingsAdapter } from './utils'

function* fetchConstructorStandingsSaga(action) {
  const { season } = action.payload

  try {  
    const data = yield call(apiFetchConstructorStandings, season)
    yield put(
      fetchConstructorStandingsFulfilled(season, constructorStadingsAdapter(data))
    )
  } catch (e) {
    yield put(
      fetchConstructorStandingsRejected(season, {
        message: e.message
      })
    )
  }
}

export function* watchConstructorStandings() {
  yield takeEvery(actions.fetchConstructorStandings.pending, fetchConstructorStandingsSaga)
}
