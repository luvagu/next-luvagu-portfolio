import { useState } from 'react'
import { Loader } from '../components'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return isLoading ? <Loader finishLoading={() => setIsLoading(false)} /> : <h1>Done Loading</h1>
}
