import Image from 'next/image'
import Producto from './components/Producto'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <>
        <Producto />
      </>
    </main>
  )
}
