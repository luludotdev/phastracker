import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Container } from '~components/Container'
import { Profile } from '~components/Profile'
import { Selector } from '~components/Selector'
import { Table } from '~components/Table'

const App: NextPage = () => (
  <>
    <Head>
      <title>Phastracker</title>
    </Head>

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
