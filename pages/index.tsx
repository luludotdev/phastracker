import type { NextPage } from 'next'
import { Meta } from '~/components/Meta'
import { Profile } from '~/components/Profile'
import { RenderTip } from '~/components/RenderTip'
import { Selector } from '~/components/Selector'
import { Table } from '~/components/Table'
import { Tip } from '~/lib/data/tips'

const App: NextPage = () => (
  <>
    <Meta
      colour='#111111'
      description='Phasmophobia Evidence Tracker'
      siteName='Phastracker'
    />

    <div className='flex w-full justify-center py-0 lg:py-4'>
      <div className='w-full max-w-full bg-zinc-800 p-6 pt-4 text-white shadow-lg lg:max-w-5xl lg:rounded-lg xl:max-w-7xl'>
        <h1 className='mb-1 text-center text-3xl font-medium'>
          Phasmophobia Evidence Tracker
        </h1>

        <p className='mb-4 text-center text-sm italic text-zinc-300'>
          Tip: <RenderTip tip={Tip.OUTDATED} />
        </p>

        <div className='mb-5 flex flex-col md:flex-row'>
          <Selector />

          <div className='mt-6 flex-1 md:ml-6 md:mt-0'>
            <Profile />
          </div>
        </div>

        <Table />
      </div>
    </div>
  </>
)

export default App
