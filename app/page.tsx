import React from 'react'
import Providers from './providers'
import { unstable_getServerSession } from 'next-auth'
import SignUpComponent from './SignUpComponent'

async function HomePage() {
  const session = await unstable_getServerSession()

  return (
    <Providers session={session}>
      <SignUpComponent />
    </Providers>
  )
}

export default HomePage