import { GetServerSideProps, NextPage } from 'next'
import { Container } from '~components/Container'
import { Meta } from '~components/Meta'
import { Profile } from '~components/Profile'
import { RenderTip } from '~components/RenderTip'
import { Selector } from '~components/Selector'
import { Table } from '~components/Table'
import { randomTip } from '~data/tips'
import type { Tip } from '~data/tips'

interface Props {
  tip: Tip
}

const App: NextPage<Props> = ({ tip }) => (
  <>
    <Meta
      siteName='Phastracker'
      description='Phasmophobia Evidence Tracker'
      colour='#111111'
    />

    <Container>
      <h1>Phasmophobia Evidence Tracker</h1>
      <p className='tip'>
        Tip: <RenderTip tip={tip} />
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

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const tip = randomTip()
  return { props: { tip } }
}

export default App
