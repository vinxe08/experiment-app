'use client'
import React from 'react'
import { signIn } from 'next-auth/react'

export const facebookProvider = {
  callbackUrl: "http://localhost:3000/api/auth/callback/facebook",
  id:"facebook",
  name:"Facebook",
  signinUrl:"http://localhost:3000/api/auth/signin/facebook",
  type: "oauth"
}
function SignUpComponent() {
  return (
    <div>
      <button
        onClick={() => signIn(facebookProvider?.id , {
          callbackUrl: process.env.VERCEL_URL || "https://experiment-app.vercel.app/" })}
      >
        Sign in with Facebook
      </button>
    </div>
  )
}

export default SignUpComponent