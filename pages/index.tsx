import { NextPage } from 'next'
import { useMemo } from 'react'
import { Container } from '~components/Container'
import { Meta } from '~components/Meta'
import { Profile } from '~components/Profile'
import { Selector } from '~components/Selector'
import { Table } from '~components/Table'
import { ParseTip, randomTip } from '~data/tips'

const App: NextPage = () => {
  const tip = useMemo(() => randomTip(), [])

  return (
    <>
      <style jsx>
        {`
          h1
            margin 0
            font-weight 500
            text-align center

          .tip
            margin 0
            margin-top 0.2rem
            text-align center
            font-style italic
            color rgba(255, 255, 255, 0.85)

          div.horizontal
            display flex
            margin-top 1.2rem

            & .profile
              margin-left 1rem
              flex 1
        `}
      </style>

      <Meta
        siteName='Phastracker'
        description='Phasmophobia Evidence Tracker'
        colour='#111111'
      />

      <Container>
        <h1>Phasmophobia Evidence Tracker</h1>
        <p className='tip'>
          Tip: <ParseTip tip={tip} />
        </p>

        <div className='horizontal'>
          <Selector />

          <div className='profile'>
            <Profile />
          </div>
        </div>

        <Table />
      </Container>
    </>
  )
}

export default App
