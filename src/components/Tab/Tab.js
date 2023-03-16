import React from 'react'


 function Tab({children,activeTab,setTab}) {

  return (
    <div className='w-full flex flex-col gap-2'>
      <nav className='w-full flex'>
      {children .map((x,index)=>(
        <button 
        onClick={()=>setTab(index)}
        key={index}
        className={activeTab==index?'hoverBtnRed md:p-2 p-1':'hoverBtn md:p-2 p-1'}
        >{x.props.title}</button>
      ))}
      </nav>
      {children[activeTab]}
    </div>
  )
}

Tab.Panel=function({children}){
    return(
        <div className='w-full md:w-[80%] gap-3 flex border-2 rounded-md p-4 border-gray-900'>
           <h1> {children}</h1>
            
        </div>
    )
}

export default Tab