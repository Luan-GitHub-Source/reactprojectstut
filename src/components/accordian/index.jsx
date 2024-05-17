import './styles.css'

//single and multiple selection

import { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [selections, setSelections] = useState([]);

  const handleSingleSelection = (id) => {
    setSelected(selected === id ? null : id);
    console.log(enableMultiSelection);
  };

  const handleMultiSelection = (id) => {
    console.log(id);
    let cpyMul = [...selections];
    const findIndexOfId = cpyMul.indexOf(id)

    if(findIndexOfId !== -1){
      cpyMul.splice(findIndexOfId, 1);
      console.log('deleting ' + id);
    }
    else{
      cpyMul.push(id);
      console.log('adding ' + id);
    }

    setSelections(cpyMul);
    console.log(cpyMul);
  };

  return (
    <div className="wrapper">
      <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
      <div className="accordian">
        {data && data.length !== 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                  ? ()=> handleMultiSelection(dataItem.id)
                  : ()=> handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
              ? (selections.indexOf(dataItem.id) !== -1?
              <div className="content">{dataItem.answer}</div>
              :null)
              :(selected === dataItem.id?
              <div className="content">{dataItem.answer}</div>
              :null)}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
