import React from 'react'
import { SessionProvider } from "next-auth/react"
import Providers from './providers'
import { unstable_getServerSession } from 'next-auth'

async function HomePage() {
  const session = await unstable_getServerSession()

  return (
    <Providers session={session}>
      <button>Sign in with Facebook</button>
    </Providers>
  )
}

export default HomePage