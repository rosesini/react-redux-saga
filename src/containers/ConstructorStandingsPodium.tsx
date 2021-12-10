import React from 'react'
import { Podium, PodiumItem, PodiumLink } from '../components/StandingStyles'

type ConstructorStandingsPodiumProps = {
  season: string
}

const ConstructorStandingsPodium: React.FC<ConstructorStandingsPodiumProps> = ({ season }) => {
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

export default ConstructorStandingsPodium
