'use client'
import React, { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from './redux/store'
import PropTypes from 'prop-types'

export default function StoreProvider({ children }) {
  const storeRef = useRef()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}

// Prop types validation
StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
