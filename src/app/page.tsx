import { tw } from '@/utils'

export default function Home() {
  return (
    <main className={tw('grid h-screen place-items-center')}>
      <h1 className={tw('bg-red-500 text-[color:#00f] text-5xl')}>Hello World</h1>
    </main>
  )
}
