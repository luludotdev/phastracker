import { NextPage } from 'next'
import Head from 'next/head'
import { Table } from '../components/Table'

const App: NextPage = () => (
  <>
    <Head>
      <title>Phastracker</title>
    </Head>
    <div>
      <Table />
    </div>
  </>
)

export default App
