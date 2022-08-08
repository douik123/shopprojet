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
		<td><div className='tab'><AiFillStar/>  Top Products</div></td>
	</tr>
	<tr>
		<td><div className='tab'><FaTshirt/>Fashion</div></td>
	</tr>
	<tr>
		<td><div className='tab'><MdComputer/>Electronics</div></td>
	</tr>
	<tr>
		<td><div className='tab'><BsFillPhoneFill/>Smartphone and Tablets</div></td>
	</tr>
	<tr>
		<td><div className='tab'><FaHeadphones/>Accessoires</div></td>
	</tr>
    <tr>
		<td><div className='tab'><FaBed/>Bedroom Accessoires</div></td>
	</tr>
    <tr>
		<td><div className='tab'><FaBath/>bathroom Accessoires</div></td>
	</tr>
    <tr>
		<td><div className='tab'><TbToolsKitchen2/>kitchen Accessoires</div></td>
	</tr>   
	

    </table>
	</div>
    <div className='Image' >
		<img src={image}/> 
	</div>
	</div>
	
  );
}

export default App;
