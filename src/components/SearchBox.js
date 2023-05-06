import React from "react";

const SearchBox = ({searchfile,searchChange}) => {
    return (
        <div>
            <input className="pa3 ba b--green bg-lightest-blue" 
            type="search" 
            placeholder="Search Bot" 
            onChange={searchChange} 
            >  
            </input>
        </div>
    );
}


export default SearchBox;
