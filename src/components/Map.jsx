import { useNavigate, useSearchParams } from "react-router-dom"


function Map() {
  const navigate=useNavigate(); //all it does is return function navigate
  const [searchParams, setSearchParams]=useSearchParams() //it is a customm hook.similar to useState hooks
  const lat=searchParams.get("lat");
  const lng=searchParams.get("lng");
  
  
  return (
    <div className={StyleSheet.mapContainer} onClick={()=>
    navigate("form")}> {/*navigate in imperative way */}
      <h1>Map</h1>
      <h1>
        position :{lat},{lng}
      </h1>

    
    
    
    </div>
  )
}
export default Map