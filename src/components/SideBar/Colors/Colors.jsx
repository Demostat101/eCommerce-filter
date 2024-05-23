
import "./Colors.css"
import { ColorArray } from "../../arrayData/ArrayData"

import { filterContext } from "../../../context/FilterContext"




const Colors = () => {

  const {handleChange} = filterContext()
  return (
    <div>

      <h4>Color</h4>

      {
       ColorArray.map(({value,type, label, color}) => {
          
          return <label htmlFor="" className="sidebar-label-container color-title" key={Math.random()}>
         
          <input  type={type} name="test3" value={value} id="price" onChange={handleChange}/>
          <span className="checkmark" style={{backgroundColor: color, border: "2px solid black"}}></span> {label}
          
        </label>
        })
      }

      
     
    </div>
  )
}

export default Colors
