import image from './../discount.png'
import { AiFillStar } from "react-icons/ai";
import { FaTshirt } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { TbToolsKitchen2 } from "react-icons/tb";
function App() {
  return (
    <div className="middle">
		<div className='table'>
    <table border="1"  >
    <tr>
		<td><div className='tab'><div><AiFillStar/></div><div className='types'>Top Products</div></div></td>
	</tr>
	<tr>
		<td><div className='tab'><div><FaTshirt/></div><div className='types'>Fashion</div></div></td>
	</tr>
	<tr>
		<td><div className='tab'><div><MdComputer/></div><div className='types'>Electronics</div></div></td>
	</tr>
	<tr>
		<td><div className='tab'><div><BsFillPhoneFill/></div><div className='types'>Smartphone and Tablets</div></div></td>
	</tr>
	<tr>
		<td><div className='tab'><div><FaHeadphones/></div><div className='types'>Accessoires</div></div></td>
	</tr>
    <tr>
		<td><div className='tab'><div><FaBed/></div><div className='types'>Bedroom Accessoires</div></div></td>
	</tr>
    <tr>
		<td><div className='tab'><div><FaBath/></div><div className='types'>bathroom Accessoires</div></div></td>
	</tr>
    <tr>
		<td><div className='tab'><div><TbToolsKitchen2/></div><div className='types'>kitchen Accessoires</div></div></td>
	</tr>   
	

    </table>
	</div>
    <div className='Image' >
		<img src={image} alt="solde"/> 
	</div>
	</div>
	
  );
}

export default App;
