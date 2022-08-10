import React  from 'react';
import imagepc from './../pc.png'
import imagecamera from './../camera.png'
import imagesac from './../sac.png'
import imageeco from './../ecoblue.jpg'
import Bas2 from './bas2.js'

  
function App() {
    const produit = [
        {image : <img src={imagecamera} alt="camera" className='cardimage' /> , discoundprix: "78,99$", prix: "88,99$", name: "Nikon Z 5, Appareil Photo Numérique"},
        {image : <img src={imagesac} alt="sac" className='cardimage'/> , discoundprix: "41,99$", prix: "51,99$", name: "Eastpak Out of Office Sac à dos"},
        {image : <img src={imageeco} alt="ecoblue" className='cardimage'/> , discoundprix: "16,28$", prix: "23,28€", name: "Ecouteurs étanche T16 Casque Bluetooth"},
        {image : <img src={imagepc} alt="pc" className='cardimage'/> , discoundprix: "529,99$", prix: "$599,00€", name: "Acer Nitro 5 AN515-57-52LE "}
      ];
  return (
    <div className='allbas'>
    {
    produit.map(element=>(
   
      <Bas2 data={element}/>
      
      

      
    ))
  }
    </div>
  
    )
}

export default App;