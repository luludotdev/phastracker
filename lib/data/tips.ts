export enum Tip {
  CLICK_GHOST = 'Click on a Ghost in the table to learn more about it.',
  RULE_OUT = "Only rule out evidence you are *absolutely sure* isn't present.",
  EMF_5 = 'You need all five lights lit on the EMF reader to count as evidence.',
  STRENGTHS = 'Pay attention to the strengths / weaknesses of possible ghosts.',
  SPEED = "Try to locate the Ghost's room as fast as possible, *then* start gathering evidence.",
  LOCATING = 'Use EMF Readers and Thermometers to locate ghost activity.',
  HIDE = 'Hiding in a closet is a more effective means of survival than running away.',
  BONE = 'Taking a photo of a bone before picking it up will net you more cash.',
  BONUS = 'If you find a bloody cleaver or a voodoo doll you can photograph them for bonus cash.',
  CORPSE = "Snapping a photo of your buddies' corpse is worth a whole $10.",
  PTT = 'The ghost can always hear you, even when using push-to-talk.',
  LOSE_ITEMS = "If you survive, all items are returned to you. You don't have to bring them back to the truck.",
}

export const randomTip: () => Tip = () => {
  const array = Object.values(Tip)
  return array[Math.floor(Math.random() * array.length)]
}
