import React from "react";

const Card = ({ title, current, previous, icon, background }) => {
	return (
		<div className="h-[170px] md:h-[600px] md:max-h-[220px] w-full relative">
			<div
				className={`${background} h-[80px] overflow-y-hidden flex justify-end rounded-tl-2xl rounded-tr-2xl`}
			>
				<img className="mr-5 -mt-3" src={icon} alt={title} />
			</div>
			<div className="absolute group bottom-0 z-[2] w-full bg-dark-blue px-6 py-8 md:py-7 rounded-2xl cursor-pointer hover:bg-desaturated-blue duration-100">
				<div className="flex justify-between items-center">
					<span className="text-[18px] font-[500]">{title}</span>
					<svg
						width="21"
						height="5"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							className="group-hover:fill-white duration-100"
							d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
							fill="#BBC0FF"
							fillRule="evenodd"
						/>
					</svg>
				</div>
				<div className="mt-1 md:mt-5 flex md:flex-col md:items-start justify-between items-center">
					<h2 className="text-3xl md:text-5xl font-[300]">
						{current}hrs
					</h2>
					<span className="text-[16px] md:text-xs text-pale-blue md:mt-3">
						Last Week - {previous}hrs
					</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
