import React from 'react'

const TaskList = () => {
  return (
    <div id="tasklist" className="flex overflow-x-auto flex-nowrap item-s-center justify-start gap-3 py-5 mt-10 h-[55%] w-full">
        <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
          <div className="flex justify-between items-center">
            <h3 className=" text-sm bg-red-600 px-3 py-1  rounded">High</h3>
            <h4 className="text-sm">20 feb 2024</h4>
          </div>
          <h2 className="mt-5 text-2xl font-semibold" >Complete the React Project</h2>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sint voluptatum natus similique tempore, corporis sunt, odit laborum autem dignissimos quam quisquam vel. Eveniet eum laboriosam sequi. In, blanditiis quas!
          </p>
        </div>
        <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
          <div className="flex justify-between items-center">
            <h3 className=" text-sm bg-red-600 px-3 py-1  rounded">High</h3>
            <h4 className="text-sm">20 feb 2024</h4>
          </div>
          <h2 className="mt-5 text-2xl font-semibold" >Complete the React Project</h2>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sint voluptatum natus similique tempore, corporis sunt, odit laborum autem dignissimos quam quisquam vel. Eveniet eum laboriosam sequi. In, blanditiis quas!
          </p>
        </div>
        <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl">
          <div className="flex justify-between items-center">
            <h3 className=" text-sm bg-red-600 px-3 py-1  rounded">High</h3>
            <h4 className="text-sm">20 feb 2024</h4>
          </div>
          <h2 className="mt-5 text-2xl font-semibold" >Complete the React Project</h2>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sint voluptatum natus similique tempore, corporis sunt, odit laborum autem dignissimos quam quisquam vel. Eveniet eum laboriosam sequi. In, blanditiis quas!
          </p>
        </div>
        <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl">
          <div className="flex justify-between items-center">
            <h3 className=" text-sm bg-red-600 px-3 py-1  rounded">High</h3>
            <h4 className="text-sm text-black">20 feb 2024</h4>
          </div>
          <h2 className=" text-black mt-5 text-2xl font-semibold" >Complete the React Project</h2>
          <p className="text-black text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sint voluptatum natus similique tempore, corporis sunt, odit laborum autem dignissimos quam quisquam vel. Eveniet eum laboriosam sequi. In, blanditiis quas!
          </p>
        </div>
        
      
    </div>
  )
}

export default TaskList
