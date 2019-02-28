import React from 'react'
import { Foo } from '@monorepo/core'

import Example from '../../Example/Relative/Example'

export function Bar() {
  return (
    <>
      <Example />
      <Foo />
      <h1>bar</h1>
    </>
  )
}
