
const actions = {
  fetchConstructorStandings: {
    pending: 'constructorStandings/fetchConstructorStandings/pending',
    fulfilled: 'constructorStandings/fetchConstructorStandings/fulfilled',
    rejected: 'constructorStandings/fetchConstructorStandings/rejected'
  }
}
export default actions

export type ActionType = {
  type: string,
  payload?: any,
  meta?: any,
  error?: any
}


export const fetchConstructorStandings = (season: string) => {
  return {
    type: actions.fetchConstructorStandings.pending,
    payload: {
      season
    }
  }
}
export const fetchConstructorStandingsFulfilled = (season: string, standings: any[]) => {
  return {
    type: actions.fetchConstructorStandings.fulfilled,
    payload: {
      season,
      standings
    }
  }
}
export const fetchConstructorStandingsRejected = (season: string, error: any) => {
  return {
    type: actions.fetchConstructorStandings.rejected,
    meta: {
      arg: {
        season
      }
    },
    error
  }
}
