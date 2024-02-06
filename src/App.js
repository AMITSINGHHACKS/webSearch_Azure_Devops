import { useState } from "react";
import Search from "./components/Search";
import Image from "./components/Image";
import './index.css'
import Video from "./components/Video";

function App() {
  const [query,setQuery]=useState('')
  const [searchresult,setSearchResult]=useState([])
  const [totalres,setTotalRes]=useState('')
  const [isLoaded,setisLoaded]=useState(false)
  const [suggestion,setSuggestion]=useState('')
  const [imagedata,setImagedata]=useState([])
  const [isimageloaded,setimageLoaded]=useState(true)
  const [isvideoLoaded,setIsVideoLoaded]=useState(true)
  const [videodata,setvideodata]=useState([])

 
  const searchTrigger=async(e)=>{
    e.preventDefault();
    const res=await fetch(`https://api.bing.microsoft.com/v7.0/search?q=${query}`,{
      method:"GET",
      headers:{
        'ocp-apim-subscription-key':"942f828a15c64147a2cf636f29f2ff77"
      }
    })
    const data=await res.json(res)
    setisLoaded(true)
   await  setSearchResult(data.webPages.value)
   await  console.log(data.webPages.value)
    await setTotalRes(data.webPages.totalEstimatedMatches)


    // suggestion part
const suggfetch=await fetch(`https://api.bing.microsoft.com/v7.0/spellcheck?text=${query}`,{
  method:"GET",
  headers:{
    'ocp-apim-subscription-key':"942f828a15c64147a2cf636f29f2ff77"
  }
})
const suggestiondata=await suggfetch.json(suggfetch)

var size = await Object.keys(suggestiondata.flaggedTokens).length;
if (size>0){
  console.log(suggestiondata.flaggedTokens[0].suggestions[0].suggestion)
setSuggestion(suggestiondata.flaggedTokens[0].suggestions[0].suggestion)
}

  }

  const changeval=async(e)=>{
    e.preventDefault();
    setQuery(suggestion)
    setimageLoaded(true)
    setIsVideoLoaded(true)
    
  
      }

      const triggerImage=async(e)=>{
        e.preventDefault();
        const fetchimage=await fetch(`https://api.bing.microsoft.com/v7.0/images/search?q=${query}`,{
          method:"GET",
          headers:{
            'ocp-apim-subscription-key':"942f828a15c64147a2cf636f29f2ff77"
          }
        });
        const resultimage=await fetchimage.json(fetchimage)
        setImagedata(resultimage.value)
        console.log(resultimage.value)
        setimageLoaded(false)
        setSearchResult('')
        setIsVideoLoaded(true)
      }

const triggerVideos=async(e)=>{
  e.preventDefault();

  const fetchvideo=await fetch(`https://api.bing.microsoft.com/v7.0/videos/search?q=${query}`,{
    method:"GET",
      headers:{
        'ocp-apim-subscription-key':"942f828a15c64147a2cf636f29f2ff77"
      }
  })

  const videodata=await fetchvideo.json(fetchvideo)
  console.log(videodata.value)
  setvideodata(videodata.value)
  setSearchResult('')
  setIsVideoLoaded(false)
  setimageLoaded(true)
}

  return (
  
   <>
  {totalres &&  <p>Total Results Found: {totalres}</p>}
   <center>
   <h1>GGGGGG CHILK</h1>
   <form onSubmit={searchTrigger}>
    <input className="inputbox" type="text" value={query} onChange={e=>setQuery(e.target.value)} required placeholder="Enter your Search Query here ................................"></input><br></br>
    <button className="buttonbox" type="submit"><div className="searchmetext">Search</div> <div className="searchicon">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></div></button>
   </form>
   {suggestion && <p>Did you mean <button className="suggestion" onClick={changeval}>{suggestion}</button>?</p>}
   {isLoaded && isimageloaded && <button className="images" onClick={triggerImage}>Images</button>}
   {isLoaded && isvideoLoaded && <button className="images" onClick={triggerVideos}>Videos</button>}
   {!isLoaded && <><p>Nothing's here you may search something ... </p>  <img src="https://i2.wp.com/recommendmeanime.com/wp-content/uploads/2018/10/doubt-manga.jpg?resize=616%2C473&ssl=1" height="220px"></img></>}
   
 {searchresult && <Search searchresult={searchresult}/>}
 {videodata && <Video videodata={videodata}/>}
 {imagedata && <Image imagedata={imagedata}/>}
 <br></br>
 <br></br>
 <br></br>

 <br></br>
 <hr></hr>
 
 <p>AniketSingh©2023.All rights reserved</p>
   </center>
   </>
  );
}

export default App;
