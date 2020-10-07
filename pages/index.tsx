import { NextPage } from 'next'
import Head from 'next/head'
import { Selector } from '~components/Selector'
import { Table } from '~components/Table'

const App: NextPage = () => (
  <>
    <Head>
      <title>Phastracker</title>
    </Head>

    <div>
      <Selector />
      <hr />
      <Table />
    </div>
  </>
)

export default App
