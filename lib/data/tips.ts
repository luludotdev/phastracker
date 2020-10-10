export enum Tip {
  CLICK_GHOST = 'Click on a Ghost in the table to learn more about it.',
  RULE_OUT = "Only rule out evidence you are *absolutely sure* isn't present.",
  EMF_5 = 'You need all five lights lit on the EMF reader to count as evidence.',
  STRENGTHS = 'Pay attention to the strengths / weaknesses of possible ghosts.',
  SPEED = "Try to locate the Ghost's room as fast as possible, *then* start gathering evidence.",
  LOCATING = 'Use EMF Readers and Thermometers to locate ghost activity.',
}

export const randomTip: () => Tip = () => {
  const array = Object.values(Tip)
  return array[Math.floor(Math.random() * array.length)]
}
