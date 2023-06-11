import Form from '@/Components/Form'
import TodoCard from '@/Components/TodoCard'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='w-full h-full flex justify-center items-center gap-8'>
        <Form />
        <TodoCard />
      </div>
    </>
  )
}
