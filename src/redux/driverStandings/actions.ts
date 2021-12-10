
const actions = {
  fetchDriverStandings: {
    pending: 'driverStandings/fetchDriverStandings/pending',
    fulfilled: 'driverStandings/fetchDriverStandings/fulfilled',
    rejected: 'driverStandings/fetchDriverStandings/rejected'
  }
}
export default actions

export type ActionType = {
  type: string,
  payload?: any,
  meta?: any,
  error?: any
}


export function fetchDriverStandings(season: string) {
  return {
    type: actions.fetchDriverStandings.pending,
    payload: {
      season
    }
  }
}
export function fetchDriverStandingsFulfilled(season: string, standings: any[]) {
  return {
    type: actions.fetchDriverStandings.fulfilled,
    payload: {
      season,
      standings
    }
  }
}
export function fetchDriverStandingsRejected(season: string, error: any) {
  return {
    type: actions.fetchDriverStandings.rejected,
    meta: {
      arg: {
        season
      }
    },
    error
  }
}