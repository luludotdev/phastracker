export enum Tip {
  OUTDATED = 'You can now use the in-game journal instead of this website as of patch 0.4.0',

  // CLICK_GHOST = 'Click on a Ghost in the table to learn more about it.',
  // RULE_OUT = "Only rule out evidence you are *absolutely sure* isn't present.",
  // EMF_5 = 'You need all five lights lit on the EMF reader to count as evidence.',
  // STRENGTHS = 'Pay attention to the strengths / weaknesses of possible ghosts.',
  // SPEED = "Try to locate the Ghost's room as fast as possible, *then* start gathering evidence.",
  // LOCATING = 'Use EMF Readers and Thermometers to locate the ghost quickly.',
  // ROOM = 'The ghost will inhabit one room on the map, and they will stay there ~80% of the time.',
  // HIDE = 'Hiding in a closet is often a more effective means of survival than running away.',
  // BONE = 'Taking a photo of a bone before picking it up will net you more cash.',
  // BONUS = 'If you find a bloody cleaver or a voodoo doll you can photograph them for bonus cash.',
  // CORPSE = "Snapping a photo of your buddies' corpse will give credit.",
  // PTT = 'The ghost cannot hear you if you are not holding push-to-talk, unless you are playing solo.',
  // LOSE_ITEMS = "If you survive, all your items are returned to you. You don't have to bring them back to the truck.",
  // AVG_SANITY = 'Hunts are determined by *average* team sanity only.',
  // HUNT_LIGHT = 'Turning your flashlight off during a hunt has no effect on the ghost tracking you.',
  // CANDLE = 'Using candles for natural light can slow sanity drain.',
  // FUCK = 'Swearing out loud can anger the ghost.',
  // FIRST_NAME = "Saying just the ghost's first name is sufficient in catching its attention.",
  // SINKS = 'Turning on sinks has no effect on the chance of dirty water; it is best to let it happen naturally so you can hear it.',
  // SIGHT = 'Breaking line of sight is the most effective way to survive hunts.',
  // DOORS = 'Closing doors is essential for survival. It also helps in locating the ghost as you can track doors the ghost has opened.',
  // MIN_TEMP = 'Temperatures below 3°C always indicate Freezing Temperatures evidence.',
  // SPAWN_ROOM = 'The ghost will always spawn in the ghost room as soon as you unlock the door.',
}

export const randomTip: () => Tip = () => {
  const array = Object.values(Tip)
  return array[Math.floor(Math.random() * array.length)]
}
