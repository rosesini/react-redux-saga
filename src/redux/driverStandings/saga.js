import { call, put, takeEvery } from 'redux-saga/effects'
import actions, { fetchDriverStandingsFulfilled, fetchDriverStandingsRejected } from './actions'
import { apiFetchDriverStandings, driverStandingsAdapter } from './utils'

function* fetchDriverStandingsSaga(action) {
  const { season } = action.payload

  try {
    const data = yield call(apiFetchDriverStandings, season)
    yield put(
      fetchDriverStandingsFulfilled(season, driverStandingsAdapter(data))
    )
  } catch (e) {
    yield put(
      fetchDriverStandingsRejected(season, {
        message: e.message
      })
    )
  }
}

export function* watchDriverStandings() {
  yield takeEvery(actions.fetchDriverStandings.pending, fetchDriverStandingsSaga)
}