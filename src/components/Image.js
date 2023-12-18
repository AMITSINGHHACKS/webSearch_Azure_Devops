import React from 'react'
import '../styles/style.css'
export default function Image({imagedata}) {
  return (
    <>
    {imagedata.map((res) => {
          return (
           <>
           
            


            <div className='main'>
           <a className='link' href={res.contentUrl}>
            
            <div className='imagepage'>
                {res.thumbnailUrl && <img src={res.thumbnailUrl} height="200px" ></img>}
           
            
            {res.name && <p className="list-group-item" key={res.id} >
              {res.name}
            </p>}
           
            <a className='url' href={res.contentUrl}>Check Website</a>
            </div></a></div>


            </>
          );
        })}
    </>
  )
}
