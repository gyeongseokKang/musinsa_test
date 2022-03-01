import { Good, getDataGood } from '../src/service/data/getDataGood'
import { useEffect, useState } from 'react'

import ChipGroup from '../src/service/component/chip/ChipGroup'
import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'
import RectangleChip from '../src/service/component/chip/RectangleChip'
import RoundChip from '../src/service/component/chip/RoundChip'
import TopBar from '../src/service/component/navigator/TopBar'

const Home: NextPage = () => {
  const [dataGoods, setDataGoods] = useState<Good[] | undefined>()
  useEffect(() => {
    const loadDataGood = async () => {
      const response = await getDataGood()
      setDataGoods(response)
      console.log(response)
    }
    loadDataGood()
  }, [])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <ChipGroup>
          <RoundChip text="검색" />
          <RoundChip text="검색" isChecked={true} />
          <RoundChip text="세일상품" isChecked={true} />
        </ChipGroup>
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <RoundChip text="검색" />
        <RoundChip text="검색" isChecked={true} />
        <RoundChip text="세일상품" isChecked={true} />
        <RectangleChip
          text="세일상품"
          leftItem={
            <div className="cursor-pointer" onClick={() => console.log('sss')}>
              X
            </div>
          }
        />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
