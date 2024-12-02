import React from 'react'

const LocationSearchPanel = (props) => {

  const locations = [
    '24B near Kapoors cafe, Sheryians coding school, Bhopal',
    '25C near Kapoors cafe, Sheryians coding school, Mumbai',
    '26D near Kapoors cafe, Sheryians coding school, Kanpur',
    '27E near Kapoors cafe, Sheryians coding school, Delhi'
  ]
  return (
    <div>
      {/* this is sample data */}
      {locations.map(function (elem,index) {
        return <div key={index} onClick={()=>{props.setVehiclePanelOpen(true),props.setPanelOpen(false)}} className='flex gap-4 border-2 border-gray-100 active:border-black px-3 rounded-xl items-center justify-start my-4'>
          <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full'><i className="ri-map-pin-line"></i></h2>
          <h4 className='font-medium'>{elem}</h4>
        </div>
      })}
    </div>
  )
}

export default LocationSearchPanel
