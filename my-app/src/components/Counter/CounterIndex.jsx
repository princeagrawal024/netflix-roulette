import React from 'react'
import Counter from './JSXCounter'
import MyCounter from './ECMACounter'

export default function CounterIndex() {
  return (
    <div>
        {/* Counter using jsx  */}
        <Counter />

        {/* MyCounter using ECMA */}
        <MyCounter />
    </div>
  )
}
