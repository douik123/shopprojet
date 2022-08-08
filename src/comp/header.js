import { AiFillShopping } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
function App() {
  return (
    <div className="allheader">
    <div className="header">
 <div className="iconshop"><h3><AiFillShopping/>DouikStore</h3></div>
 <div className="icon">
    <div>
    <ImLocation2/>
    </div>
    <div className='location'>
      <div><h6>Select your location</h6></div>
    </div>
 </div>
 <div className="search">
    <div><input  type="text" placeholder="Search For Products" size="49"></input></div>
    <div className="iconsear"><AiOutlineSearch/></div>
</div>
<div>
  <div className='icons'>
    <div className='heart'><AiFillHeart/></div>
    <div className='user'><AiOutlineUser/></div>
    <div className='shopp'><AiFillShopping/></div>
  </div>
</div>

     
    </div>
    </div>
  );
}

export default App;
