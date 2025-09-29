import React from 'react'
import Counter from './JSXCounter'
import MyCounter from './ECMACounter'

export default function CounterIndex() {
  return (
    <div>
        {/* Counter using jsx  */}
        <Counter initialValue={0}/>

        {/* MyCounter using ECMA */}
        <MyCounter initialValue={0}/>
    </div>
  )
}
