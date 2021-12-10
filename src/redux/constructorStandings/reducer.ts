import { RootState } from '../store'
import actions, { ActionType } from './actions'

type SelfState = {
  [season: string]: {
    standings?: object[],
    status?: 'idle' | 'loading' | 'fetched' | 'failed',
    error?: any
  }
}

export default function reducer(state: SelfState = {}, action: ActionType) {
  switch (action.type) {
    case actions.fetchConstructorStandings.pending: {
      const { season } = action.payload
      return {
        ...state,
        [season]: {
          status: 'loading',
          standings: []
        }
      }
    }
    case actions.fetchConstructorStandings.fulfilled: {
      const { season, standings } = action.payload
      return {
        ...state,
        [season]: {
          status: 'fetched',
          standings
        }
      }
    }
    case actions.fetchConstructorStandings.rejected: {
      const { meta: { arg: { season } }, error } = action
      return {
        ...state,
        [season]: {
          status: 'failed',
          standings: [],
          error
        }
      }
    }
    default: {
      return state
    }
  }
}

export const selectSelf = (state: RootState) => state.constructorStandings
export const selectConstructorStandings = (state: RootState, season: string) => {
  const constructorStandings = selectSelf(state)
  return constructorStandings[season] || { status: 'idle', standings: [] }
}