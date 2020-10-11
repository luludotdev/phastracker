import { Evidence } from '~data/evidence'

export enum GhostType {
  BANSHEE = 'Banshee',
  DEMON = 'Demon',
  JINN = 'Jinn',
  MARE = 'Mare',
  ONI = 'Oni',
  PHANTOM = 'Phantom',
  POLTERGEIST = 'Poltergeist',
  REVENANT = 'Revenant',
  SHADE = 'Shade',
  SPIRIT = 'Spirit',
  WRAITH = 'Wraith',
  YUREI = 'Yurei',
}

export interface IGhost {
  description: string
  evidence: readonly [Evidence, Evidence, Evidence]

  strength: string
  weakness: string
}

type GhostMap = { [key in GhostType]: IGhost }
export const ghosts: GhostMap = {}
