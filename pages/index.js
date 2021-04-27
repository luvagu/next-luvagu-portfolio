import { useState } from 'react'
import { Loader, Navbar } from '../components'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return isLoading ? <Loader finishLoading={() => setIsLoading(false)} /> : <Navbar />
}
