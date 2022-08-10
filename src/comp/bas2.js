import React  from 'react';
function App(props) {
console.log(props)

  return(
<div className='card'>
<div className='imageprop'>{props.data.image}</div>
<div className='name'><h2>{props.data.name}</h2></div>
<div className='prix'>
  <div><h4>{props.data.prix}</h4></div>
  <div><h6><span>{props.data.discoundprix}</span></h6></div>
</div>

</div> 
    
  );
}

export default App;