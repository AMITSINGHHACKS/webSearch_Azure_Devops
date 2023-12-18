import React from 'react'

export default function Video({videodata}) {
  return (
    <>
    {videodata.map((res) => {
          return (
           <>
           
            


            <div className='main'>
           <a className='link' href={res.contentUrl}>
            
            <div className='imagepage'>
                {/* {res.embedHtml} */}

                
                
                {res.thumbnailUrl && <img src={res.thumbnailUrl} height="200px" ></img>}
           {res.creator && <h2>{res.creator.name}</h2>}
          
          
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
