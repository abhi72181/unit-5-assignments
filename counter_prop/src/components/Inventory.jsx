import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens:20
  });
    // Create add and remove functions here that changes the
    // state.
    const bookTotal=(value)=>{
      if(inv.books<=1){

        return
      }
       setInv({...inv,books:inv.books + value})
    }

    const notebookTotal=(value)=>{
      if(inv.notebooks<=1){

        return
      }
       setInv({...inv,notebooks:inv.notebooks + value})
    }

    const penTotal=(value)=>{
      if(inv.pens<=1){

        return
      }
       setInv({...inv,pens:inv.pens + value})
    }
    const inkpenTotal=(value)=>{
      if(inv.inkpens<=1){

        return
      }
       setInv({...inv,inkpens:inv.inkpens + value})
    }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>bookTotal(1)}>+</button>
        <button className="circlularButton" onClick={()=>bookTotal(-1)}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>notebookTotal(1)}>+</button>
        <button className="circlularButton" onClick={()=>notebookTotal(-1)}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>penTotal(1)}>+</button>
        <button className="circlularButton"  onClick={()=>penTotal(-1)}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={()=>inkpenTotal(1)}>+</button>
        <button className="circlularButton"  onClick={()=>inkpenTotal(-1)}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books+inv.notebooks+inv.pens+inv.inkpens}
    </div>
  );
};
