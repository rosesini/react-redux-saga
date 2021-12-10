import { applyMiddleware, createStore, combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from '@redux-saga/core'
import constructorStandingsReducer from './constructorStandings/reducer'
import driverStandingsReducer from './driverStandings/reducer'
import { watchConstructorStandings } from './constructorStandings/saga'
import { watchDriverStandings } from './driverStandings/saga'

const reducer = combineReducers({
  constructorStandings: constructorStandingsReducer,
  driverStandings: driverStandingsReducer
})
function* saga() {
  yield all([
    watchConstructorStandings(),
    watchDriverStandings()
  ])
}
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)
sagaMiddleware.run(saga)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
