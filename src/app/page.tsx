import { Login } from '@/components/login'

export default function Home() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <Login isPasswordLogin={false} />
    </div>
  )
}
