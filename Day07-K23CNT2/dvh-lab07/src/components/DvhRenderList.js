import React from 'react'

export default function DvhRenderList() {
    const DvhList = ["Dinh Van Hieu", "ReactJS","Fit-NTU"];

    const DvhElement = DvhList.map(item=>{
        return <li>{item}</li>
    })

  return (
    <div className='alert alert-success'>
        <h2> Danh sách:</h2>
        <ul>
            {
                DvhList.map(item=>{
                    return <li>{item}</li>
                })
            }
        </ul>
        <hr/>
        {DvhElement}
    </div>
  )
}
