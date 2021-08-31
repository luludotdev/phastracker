export const showMessage = () => {
  if (typeof window === undefined) return

  console.group('%cPhastracker', 'color: #0e74cd; font-size: 2rem')
  console.log(
    '%cPhasmophobia Evidence Tracker and Ghost Database.',
    'font-style: italic'
  )
  console.log('https://github.com/lolPants/phastracker')
  console.groupEnd()
}
