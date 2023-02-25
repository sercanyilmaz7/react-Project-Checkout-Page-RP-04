import React from 'react'

const Buttons = ({show,setShow}) => {
  return (
    <div>
      <button onClick={()=>setShow(!show)} type="button" className="btn btn-warning">
        {show ? "Hide Product Bar":"Show Product Bar"}
      </button>

    </div>
  );
}

export default Buttons