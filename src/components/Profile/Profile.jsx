import React from "react";
import image_avatar from "../../assets/images/image-jeremy.png";

const Profile = ({isActive, menuHandler}) => {

	return (
		<div className="h-[200px] relative md:h-full md:row-span-2">
			<div className="flex items-center md:h-full md:max-h-[65%] md:flex-col md:items-start gap-5 px-6 py-8 bg-profile rounded-xl relative z-[1]">
				<div className="w-[64px] h-[64px] bg-white rounded-full grid place-items-center">
					<img
						className="block w-[58px] h-[58px]"
						src={image_avatar}
						alt="avatar"
					/>
				</div>
				<div className="md:mt-2">
					<span className="text-sm text-pale-blue">Report for</span>
					<h1 className="text-2xl md:text-3xl font-[300]">Jeremy Robson</h1>
				</div>
			</div>
			<div className="h-1/2 relative md:absolute md:w-full -top-[30px] md:top-auto md:bottom-0 bg-dark-blue rounded-xl grid">
				<div className="self-end flex md:flex-col md:items-start md:pl-5 md:gap-3 justify-evenly gap-5 pb-[25px] text-desaturated-blue text-[18px]">
					<button
						className={isActive === "daily" ? "active" : "hover:text-pale-blue duration-100"}
						onClick={() => menuHandler("daily")}
					>
						Daily
					</button>
					<button
						className={isActive === "weekly" ? "active" : "hover:text-pale-blue duration-100"}
						onClick={() => menuHandler("weekly")}
					>
						Weekly
					</button>
					<button
						className={isActive === "monthly" ? "active" : "hover:text-pale-blue duration-100"}
						onClick={() => menuHandler("monthly")}
					>
						Monthly
					</button>
				</div>
			</div>
		</div>
	);
};

export default Profile;
