import React from 'react'
import '../styles/style.css'
import '../index.css'

export default function Search({searchresult}) {
  return (
    <>
     {searchresult.map((res) => {
          return (
           <>
           <div className='main'>
           <a className='link' href={res.url}>
            <div className='container'>
                {res.thumbnailUrl && <img src={res.thumbnailUrl} ></img>}
            
            <h2 className="list-group-item" key={res.id} >
              {res.name}
            </h2>
            <p>{res.snippet}</p>
            <a className='url' href={res.displayUrl}>Check Website</a>
            </div></a></div>
            </>
          );
        })}</>
  )
}
