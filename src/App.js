import {useState} from 'react';

import Select from 'components/select/Select';

import './App.css';

function App() {
  const [select,setSelect]=useState("");
  const [selectIsOpen,setSelectIsOpen]=useState(false);

  const selectToggleHandler=()=>{
    setSelectIsOpen(!selectIsOpen);
  };

  const clickHandler=(program)=>{
    setSelectIsOpen(false);
    if(!program){
      setSelect("");
    }
    else{
      setSelect(program.programName);
    }
  };

  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <Select selectIsOpen={selectIsOpen} select={select} selectToggleHandler={selectToggleHandler} clickHandler={clickHandler} />
      </div>
    </section>
  );
}

export default App;