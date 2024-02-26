import React from "react";
import Blackbox from "./blackbox";




//create your first component
const Home = (props) => {
	console.log(props.num)
	return (
		<div className="box justify-content-center"> <Blackbox />
			<div className="text-center">
				<div>
					<div className="container text-center">
						<div className="row border-box-overlay justify-content-center">
							<i className="col fa-regular fa-clock"></i>
							<div className="col 1">{props.num.charAt(props.num.length - 6)}</div>
							<div className="col 2">{props.num.charAt(props.num.length - 5)}</div>
							<div className="col 3">{props.num.charAt(props.num.length - 4)}</div>
							<div className="col 4">{props.num.charAt(props.num.length - 3)}</div>
							<div className="col 5">{props.num.charAt(props.num.length - 2)}</div>
							<div className="col 6">{props.num.charAt(props.num.length - 1)}</div>

						</div>


					</div>

				</div>

			</div>
		</div>

	);

};

export default Home;
