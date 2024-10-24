import React from "react";
import { Counter } from "./counter";
import { ButtonAlert } from "./button";

//include images into your bundle


//create your first component
const SecondsCounter = ({timer}) => {
	
	return (
		<div className="bg-dark d-flex align-items-center flex-column">
			<div className="d-flex container p-4 justify-content-center align-items-center mb-4">
				<div className="contain-clock">
					<span className="fa-regular fa-clock clock-styles"></span>
				</div>
				<Counter timer={Math.floor(timer / 100000) % 10} />
				<Counter timer={Math.floor(timer / 10000) % 10} />
				<Counter timer={Math.floor(timer / 1000) % 10} />
				<Counter timer={Math.floor(timer / 100) % 10} />
				<Counter timer={Math.floor(timer / 10) % 10} />
				<Counter timer={timer % 10} />
			</div>
			<ButtonAlert />
		</div>
		
		
	);
};

export default SecondsCounter;
