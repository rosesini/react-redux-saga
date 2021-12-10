import React from 'react'
import { Podium, PodiumItem, PodiumLink } from '../components/StandingStyles'

type DriverStandingsPodiumProps = {
  season: string
}

const DriverStandingsPodium: React.FC<DriverStandingsPodiumProps> = ({ season }) => {
  return (
    <Podium>
      <PodiumItem>
        <PodiumLink>Driver 1</PodiumLink>
      </PodiumItem>
      <PodiumItem>
        <PodiumLink>Driver 2</PodiumLink>
      </PodiumItem>
      <PodiumItem>
        <PodiumLink>Driver 3</PodiumLink>
      </PodiumItem>
    </Podium>
  )
}

export default DriverStandingsPodium
