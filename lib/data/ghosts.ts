import { Evidence } from './evidence'

export enum GhostType {
  SPIRIT = 'Spirit',
  WRAITH = 'Wraith',
  PHANTOM = 'Phantom',
  POLTERGEIST = 'Poltergeist',
  BANSHEE = 'Banshee',
  JINN = 'Jinn',
  MARE = 'Mare',
  REVENANT = 'Revenant',
  SHADE = 'Shade',
  DEMON = 'Demon',
  YUREI = 'Yurei',
  ONI = 'Oni',
}

export interface IGhost {
  type: GhostType
  evidence: readonly Evidence[]
}

export const ghosts: readonly IGhost[] = [
  {
    type: GhostType.SPIRIT,
    evidence: [Evidence.SPIRIT_BOX, Evidence.FINGERPRINTS, Evidence.WRITING],
  },
  {
    type: GhostType.WRAITH,
    evidence: [Evidence.SPIRIT_BOX, Evidence.FINGERPRINTS, Evidence.FREEZING],
  },
  {
    type: GhostType.PHANTOM,
    evidence: [Evidence.FREEZING, Evidence.EMF_5, Evidence.ORBS],
  },
  {
    type: GhostType.POLTERGEIST,
    evidence: [Evidence.SPIRIT_BOX, Evidence.FINGERPRINTS, Evidence.ORBS],
  },
  {
    type: GhostType.BANSHEE,
    evidence: [Evidence.FINGERPRINTS, Evidence.FREEZING, Evidence.EMF_5],
  },
  {
    type: GhostType.JINN,
    evidence: [Evidence.SPIRIT_BOX, Evidence.EMF_5, Evidence.ORBS],
  },
  {
    type: GhostType.MARE,
    evidence: [Evidence.SPIRIT_BOX, Evidence.FREEZING, Evidence.ORBS],
  },
  {
    type: GhostType.REVENANT,
    evidence: [Evidence.FINGERPRINTS, Evidence.WRITING, Evidence.EMF_5],
  },
  {
    type: GhostType.SHADE,
    evidence: [Evidence.WRITING, Evidence.EMF_5, Evidence.ORBS],
  },
  {
    type: GhostType.DEMON,
    evidence: [Evidence.SPIRIT_BOX, Evidence.WRITING, Evidence.FREEZING],
  },
  {
    type: GhostType.YUREI,
    evidence: [Evidence.WRITING, Evidence.FREEZING, Evidence.ORBS],
  },
  {
    type: GhostType.ONI,
    evidence: [Evidence.SPIRIT_BOX, Evidence.WRITING, Evidence.EMF_5],
  },
]
