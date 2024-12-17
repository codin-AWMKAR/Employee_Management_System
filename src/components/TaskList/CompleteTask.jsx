import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl flex flex-col">
  <div className='flex justify-between items-center'>
    <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
    <h4 className='text-sm'>{data.taskDate}</h4>
  </div>
  <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
  <p className='text-sm mt-2'>
    {data.taskDescription}
  </p>
  {/* Ensure button is fixed at the bottom */}
  <div className='flex justify-between mt-auto'>
    <button className='w-full bg-green-600 rounded font-medium py-2 px-4 text-sm'>Complete</button>
  </div>
</div>

  )
}

export default CompleteTask
