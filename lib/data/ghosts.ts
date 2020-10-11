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
  evidence: readonly [Evidence, Evidence, Evidence]

  description: string
  strength: string
  weakness: string
}

export const ghosts: readonly IGhost[] = [
  {
    type: GhostType.SPIRIT,
    evidence: [Evidence.SPIRIT_BOX, Evidence.FINGERPRINTS, Evidence.WRITING],
    description:
      'The Spirit is the most common ghost you will come across, however it is still very powerful and dangerous. ' +
      'They are usually discovered at one of their hunting grounds after an unexplained death.',
    strength: 'Nothing.',
    weakness:
      'Using smudge sticks near a Spirit will stop it attacking for a long period of time.',
  },
  {
    type: GhostType.WRAITH,
    evidence: [Evidence.SPIRIT_BOX, Evidence.FINGERPRINTS, Evidence.FREEZING],
    description:
      'They are some of the most dangerous ghosts you will find. ' +
      'They are the only ghosts who can travel through walls and have the ability of flight.',
    strength:
      "They never touch the ground, so they can't be tracked by footsteps.",
    weakness: 'Wraiths have a toxic reaction to salt.',
  },
  {
    type: GhostType.PHANTOM,
    evidence: [Evidence.FREEZING, Evidence.EMF_5, Evidence.ORBS],
    description:
      'A Phantom is a ghost that can possess the living, most commonly summoned by a Ouija Board. ' +
      'It also induces fear into those around it.',
    strength: 'Looking at a Phantom will considerably drop your sanity.',
    weakness:
      'Taking a photo of the Phantom will make it temporarily disappear.',
  },
  {
    type: GhostType.POLTERGEIST,
    evidence: [Evidence.SPIRIT_BOX, Evidence.FINGERPRINTS, Evidence.ORBS],
    description:
      'One of the most famous types of ghost, the Poltergeist, also known as ' +
      'the noisy ghost, can manipulate objects around it to spread fear into its victims.',
    strength: 'They can throw a huge amount of objects at once.',
    weakness:
      'They are ineffective in an empty room as there will no objects to toss around.',
  },
  {
    type: GhostType.BANSHEE,
    evidence: [Evidence.FINGERPRINTS, Evidence.FREEZING, Evidence.EMF_5],
    description:
      'A Banshee is a natural hunter and will attack anything. ' +
      'It has been known to stalk its prey one at a time until making its kill.',
    strength: 'They will only target one person at a time.',
    weakness:
      'They fear the crucifix and will be less aggressive when near one.',
  },
  {
    type: GhostType.JINN,
    evidence: [Evidence.SPIRIT_BOX, Evidence.EMF_5, Evidence.ORBS],
    description:
      'The Jinn is a territorial ghost that will attack when threatened. ' +
      'It has also been known to be able to travel at significant speed.',
    strength: 'They will travel at a faster speed if its victim is far away.',
    weakness:
      "Turning off the location's power source will prevent them from using their ability.",
  },
  {
    type: GhostType.MARE,
    evidence: [Evidence.SPIRIT_BOX, Evidence.FREEZING, Evidence.ORBS],
    description:
      'The Mare is the source of all nightmares, making it most powerful in the dark.',
    strength: 'They have an increased chance to attack when in the dark.',
    weakness:
      'Turning the lights on around the Mare will lower its chance to attack.',
  },
  {
    type: GhostType.REVENANT,
    evidence: [Evidence.FINGERPRINTS, Evidence.WRITING, Evidence.EMF_5],
    description:
      'The Revenant is a slow but violent ghost that will attack indiscriminately. ' +
      'It has been rumoured to travel at a significantly high speed when hunting.',
    strength:
      'They will travel at a significantly faster speed when hunting a victim.',
    weakness: 'Hiding from a Revenant will cause it to move very slowly.',
  },
  {
    type: GhostType.SHADE,
    evidence: [Evidence.WRITING, Evidence.EMF_5, Evidence.ORBS],
    description:
      'The Shade is known to be a shy ghost. There is evidence that a ' +
      'Shade will stop all paranormal activity if there are multiple people nearby.',
    strength: 'Being shy means the Shade will be harder to find.',
    weakness:
      'They will not enter hunting mode if there are multiple people nearby.',
  },
  {
    type: GhostType.DEMON,
    evidence: [Evidence.SPIRIT_BOX, Evidence.WRITING, Evidence.FREEZING],
    description:
      'The Demon is one of the worst ghosts you can encounter. ' +
      'It has been known to attack without a reason.',
    strength: 'They will attack more often then any other ghost.',
    weakness:
      "Asking a Demon successful questions on the Ouija Board won't lower the users sanity.",
  },
  {
    type: GhostType.YUREI,
    evidence: [Evidence.WRITING, Evidence.FREEZING, Evidence.ORBS],
    description:
      'The Yurei is a ghost that has returned to the physical world, ' +
      'usually for the purpose of revenge or hatred.',
    strength:
      'They have been known to have a stronger effect on people sanity.',
    weakness:
      "Smudging the Yurei's room will cause it to not wander around the location for a long time.",
  },
  {
    type: GhostType.ONI,
    evidence: [Evidence.SPIRIT_BOX, Evidence.WRITING, Evidence.EMF_5],
    description:
      'Onis are a cousin to the Demon and possess extreme strength. ' +
      'There have been rumours that they become more active around their prey.',
    strength:
      'They are more active when people are nearby and have been seen moving objects at great speed.',
    weakness: 'Being more active makes the Oni easier to find and identify.',
  },
]
