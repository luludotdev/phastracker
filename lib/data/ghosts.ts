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

  description: string
  strength: string
  weakness: string
}

export const ghosts: readonly IGhost[] = [
  {
    type: GhostType.SPIRIT,
    evidence: [Evidence.SPIRIT_BOX, Evidence.FINGERPRINTS, Evidence.WRITING],
    description:
      'These are the most common ghosts you will come across but still they are powerful and dangerous. ' +
      'You can usually discover them at one of their hunting grounds after an unexplained death.',
    strength: 'Nothing',
    weakness:
      'Use smudge sticks to stop it from attacking for a long period of time.',
  },
  {
    type: GhostType.WRAITH,
    evidence: [Evidence.SPIRIT_BOX, Evidence.FINGERPRINTS, Evidence.FREEZING],
    description:
      'They are some of the most dangerous ghosts you will find. ' +
      'They are the only ghosts who can travel through walls and has the ability to fight.',
    strength:
      'They never touch the ground, so they can’t be tracked by footsteps.',
    weakness: 'Wraiths have a toxic reaction to salt.',
  },
  {
    type: GhostType.PHANTOM,
    evidence: [Evidence.FREEZING, Evidence.EMF_5, Evidence.ORBS],
    description:
      'A phantom ghost can possess the living, and most commonly summoned through an Ouija Board. ' +
      'It also includes fear into those around it.',
    strength: 'If you look at a phantom directly your sanity will drop faster.',
    weakness: 'You can take a picture of the phantom to make it disappear.',
  },
  {
    type: GhostType.POLTERGEIST,
    evidence: [Evidence.SPIRIT_BOX, Evidence.FINGERPRINTS, Evidence.ORBS],
    description:
      'The most famous ghost Poltergeist known to be a noisemaker ' +
      'by manipulating objects around them to instill fear among its victims.',
    strength: 'They can throw a huge amount of objects at once.',
    weakness:
      'They are ineffective in an empty room as there will no objects to toss around.',
  },
  {
    type: GhostType.BANSHEE,
    evidence: [Evidence.FINGERPRINTS, Evidence.FREEZING, Evidence.EMF_5],
    description:
      'These ghosts are natural hunters who love to stalk it’s prey one at a time making its kill. ' +
      'A Banshee will attack anything that comes in its way.',
    strength: 'They will only target one person at a time.',
    weakness: 'Fears crucifix and will be less aggressive near one.',
  },
  {
    type: GhostType.JINN,
    evidence: [Evidence.SPIRIT_BOX, Evidence.EMF_5, Evidence.ORBS],
    description:
      'These are territorial ghosts that will attack when they feel threatened. ' +
      'Jinn travels faster than most of the ghosts at a significant speed.',
    strength: 'Will travel faster if the victim is far away.',
    weakness:
      'Turning off the location’s power source will prevent Jinn from using its ability.',
  },
  {
    type: GhostType.MARE,
    evidence: [Evidence.SPIRIT_BOX, Evidence.FREEZING, Evidence.ORBS],
    description:
      'These ghosts are the source of all the nightmare the victims see, ' +
      'making it the most powerful ghost in the dark.',
    strength: 'Increased chance to attack when in the dark.',
    weakness:
      'Turning the lights on around the Mare will lower its chance to attack.',
  },
  {
    type: GhostType.REVENANT,
    evidence: [Evidence.FINGERPRINTS, Evidence.WRITING, Evidence.EMF_5],
    description:
      'They are slow but violent ghosts that will attack everyone indiscriminately. ' +
      'They also travel at a greater speed like Jinn while hunting.',
    strength: 'Travels faster while hunting.',
    weakness:
      'If you are hidden from the Revenant, their speed drops, and they travel slowly.',
  },
  {
    type: GhostType.SHADE,
    evidence: [Evidence.WRITING, Evidence.EMF_5, Evidence.ORBS],
    description:
      'These are shy ghosts and will stop all activity if there are more than one person nearby.',
    strength: 'Harder to find.',
    weakness:
      'Will not go into hunting mode if there are multiple people nearby.',
  },
  {
    type: GhostType.DEMON,
    evidence: [Evidence.SPIRIT_BOX, Evidence.WRITING, Evidence.FREEZING],
    description:
      'These are the worst ghosts you can encounter. They will attack you without any reason.',
    strength: 'Attacks more often than any other ghost.',
    weakness:
      'Asking a successful question on the Ouija board won’t lower sanity.',
  },
  {
    type: GhostType.YUREI,
    evidence: [Evidence.WRITING, Evidence.FREEZING, Evidence.ORBS],
    description:
      'They have returned to the physical world to take revenge or have a deep hatred for a victim.',
    strength: 'Stronger effect on people’s sanity.',
    weakness:
      'Smudging the Yurei room will cause it to not wander around the location for a long time.',
  },
  {
    type: GhostType.ONI,
    evidence: [Evidence.SPIRIT_BOX, Evidence.WRITING, Evidence.EMF_5],
    description:
      'Onis are the cousins of demons and are extremely strong. ' +
      'They will become more active if you wander around them for too long.',
    strength:
      'More active when players are nearby or when objects move at great speed.',
    weakness: 'Being more active helps players to easily identify the Oni.',
  },
]
