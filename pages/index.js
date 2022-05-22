import Head from 'next/head'
import Image from 'next/image'
import TodoWindow from '../components/TodoWindow'

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen content-center'>


      <Head>
        <title>TODO app</title>
      </Head>
     
      <TodoWindow />

      
    

    </div>

  )
}
