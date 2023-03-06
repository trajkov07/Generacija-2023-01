import React from 'react';
import PropTypes from 'prop-types';
 
export const Dropdown = ({elements,onChange}) => {
    return (
        <div>
            <label htmlFor="apps">Choose an app:</label>
            <select name="apps" id="apps" onChange={onChange}>
              {elements.map((elem,i)=>{
                return(
                    <option key={i} value={elem.value}> {elem.name} </option>
                )
              })

              }
            </select>
        </div>
    )
}

Dropdown.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChange:PropTypes.func.isRequired
}