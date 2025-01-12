'use client'

import Link from 'next/link'
import React, { useRef } from 'react'

export function Login({ isPasswordLogin }: { isPasswordLogin: boolean }) {
  const emailInputRef = useRef(null)
  const passwordInputRef = useRef(null)

  return (
    <form>
      <article style={{ maxWidth: '480px', margin: 'auto' }}>
        <header>Login</header>
        <fieldset>
          <label htmlFor='email'>
            Email
            <input
              type='email'
              id='email'
              name='email'
              required
              ref={emailInputRef}
            />
          </label>
          {isPasswordLogin && (
            <label htmlFor='password'>
              Password
              <input
                type='password'
                id='password'
                name='password'
                ref={passwordInputRef}
              />
            </label>
          )}
        </fieldset>

        <p>
          {isPasswordLogin
            ? (
                <Link href={{ pathname: '/', query: { magicLink: 'yes' } }}>
                  Go to Magic Link Login
                </Link>
              )
            : (
                <Link href={{ pathname: '/', query: { magicLink: 'no' } }}>
                  Go to Password Login
                </Link>
              )}
        </p>

        <button type='submit'>
          Sign in with
          {isPasswordLogin ? ' Password' : ' Magic Link'}
        </button>
      </article>
    </form>
  )
}
