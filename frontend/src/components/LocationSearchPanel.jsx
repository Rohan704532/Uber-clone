import React from 'react'

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField }) => {

  const handleSuggestionClick = (suggestion) => {
    if (activeField === 'pickup') {
        setPickup(suggestion)
    } else if (activeField === 'destination') {
        setDestination(suggestion)
    }
}
  return (
    <div>
      {suggestions.map(function (elem,index) {
        return <div key={index} onClick={()=>{handleSuggestionClick(elem)}} className='flex gap-4 border-2 border-gray-100 active:border-black px-3 rounded-xl items-center justify-start my-4'>
          <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full'><i className="ri-map-pin-line"></i></h2>
          <h4 className='font-medium'>{elem}</h4>
        </div>
      })}
    </div>
  )
}

export default LocationSearchPanel
