// create your App component here
import React, {useEffect, useState} from "react";

function App(){
    const [image, setImage] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect (()=>{
        fetch ("https://dog.ceo/api/breeds/image/random")
            .then((res)=>res.json())
            .then((data)=>{
                setImage(data)
                setIsLoaded(true);
            })
    }, [])

    //if the data hasn't been loaded, show a loading indicator
    if(!isLoaded) return <h3>Loading...</h3>;

    return(
        <div>
            <img src={image.message} alt="A Random Dog" />
        </div>
    )
}

export default App