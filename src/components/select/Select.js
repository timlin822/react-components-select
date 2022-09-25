import {FaCaretDown} from 'react-icons/fa';

import PROGRAMS_Data from 'data/ProgramsData';

import './Select.css';

const Select=({selectIsOpen,select,selectToggleHandler,clickHandler})=>{
    return (
        <div className="select-input" onClick={selectToggleHandler}>
            {select?select:"請選擇"}
            <FaCaretDown className={selectIsOpen?"arrow-icon arrow-icon-rotate":"arrow-icon"} />
            <ul className={selectIsOpen?"select-list select-list-open":"select-list select-list-close"}>
                <li className="option" onClick={()=>clickHandler()}>請選擇</li>
                {PROGRAMS_Data.map(program=>(
                    <li key={program.id} className="option" onClick={()=>clickHandler(program)}>{program.programName}</li>
                ))}
            </ul>
        </div>
    );
}

export default Select;