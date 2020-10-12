import { GetServerSideProps, NextPage } from 'next'
import { Container } from '~components/Container'
import { Meta } from '~components/Meta'
import { Profile } from '~components/Profile'
import { RenderTip } from '~components/RenderTip'
import { Selector } from '~components/Selector'
import { Table } from '~components/Table'
import { MEDIUM_SIZE, SMALL_SIZE } from '~constants'
import { randomTip, Tip } from '~data/tips'

interface IProps {
  tip: Tip
}

const App: NextPage<IProps> = ({ tip }) => (
  <>
    <style jsx>
      {`
        h1
          margin 0
          font-weight 500
          text-align center

          @media only screen and (max-width ${MEDIUM_SIZE})
            font-size 1.95rem

          @media only screen and (max-width ${SMALL_SIZE})
            font-size 1.75rem

        .tip
          margin 0
          margin-top 0.2rem
          text-align center
          font-style italic
          color rgba(255, 255, 255, 0.85)

          @media only screen and (max-width ${MEDIUM_SIZE})
            font-size 0.95rem

          @media only screen and (max-width ${SMALL_SIZE})
            font-size 0.9rem

        div.horizontal
          display flex
          margin-top 1.2rem

          @media only screen and (max-width ${MEDIUM_SIZE})
            flex-direction column

          & .profile
            margin-left 1rem
            flex 1

            @media only screen and (max-width ${MEDIUM_SIZE})
              margin-top 1rem
              margin-left 0
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

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
  const tip = randomTip()
  return { props: { tip } }
}

export default App
