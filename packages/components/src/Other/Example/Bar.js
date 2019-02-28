import React from 'react'
import { Foo } from '@monorepo/core'

/**
 * @description O alias de @components é feito dentro da configuração do webpack do package app.
 * import Example from '../../Example/Relative/Example'
 */
import Example from '@components/Example/Relative/Example'

export function Bar() {
  return (
    <>
      <Example />
      <Foo />
      <h1>bar</h1>
    </>
  )
}
