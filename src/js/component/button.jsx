import React from "react";


export const ButtonAlert = () => {
    const handleClick = () => {
        alert("You need to solve the 3 body problem.. MUAJAJA");
    };
   
    return (
        <div className="btn-container mb-5" onClick={handleClick}>
            <a className="btn btn-outline-light" type="button">¿Do you wanna stop?</a>
        </div>
    );
}
