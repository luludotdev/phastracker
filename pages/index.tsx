import { NextPage } from 'next'
import React from 'react'
import { Container } from '~components/Container'
import { Meta } from '~components/Meta'
import { Profile } from '~components/Profile'
import { Selector } from '~components/Selector'
import { Table } from '~components/Table'

const App: NextPage = () => (
  <>
    <style jsx>
      {`
        h1
          margin 0
          font-weight 500
          text-align center

        div.horizontal
          display flex
          margin-top 1rem

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

export default App
