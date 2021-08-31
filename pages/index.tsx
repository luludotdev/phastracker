import { GetServerSideProps, NextPage } from 'next'
import colors from 'tailwindcss/colors'
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

    <style jsx global>
      {`
        body {
          background-color: ${colors.gray['900']};
        }
      `}
    </style>

    <div className='flex justify-center w-full py-4'>
      <div className='w-full max-w-full md:max-w-3xl lg:max-w-5xl xl:max-w-7xl p-6 pt-4 rounded-lg shadow-lg text-white bg-gray-800'>
        <h1 className='font-medium text-3xl text-center mb-1'>
          Phasmophobia Evidence Tracker
        </h1>

        <p className='text-gray-300 italic text-sm text-center mb-4'>
          Tip: <RenderTip tip={tip} />
        </p>

        <div className='flex mb-5'>
          <Selector />

          <div className='flex-1 ml-6'>
            <Profile />
          </div>
        </div>

        <Table />
      </div>
    </div>
  </>
)

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const tip = randomTip()
  return { props: { tip } }
}

export default App
