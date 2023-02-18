import React from 'react'

function PokedexBatteryLight() {
  return (
    <>
        <span className="battery__light red" title='Low Battery'></span>
        <span className="battery__light yellow" title='Half Battery'></span>
        <span className="battery__light green active" title='Full Battery'></span>
    </>
  )
}

export default PokedexBatteryLight