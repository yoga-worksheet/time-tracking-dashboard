import React, { useState } from "react";
import Profile from "./components/Profile/Profile";
import Card from "./components/Card/Card";

import data from "./constants/data";

const App = () => {
  const [isActive, setIsActive] = useState("weekly");

	const menuHandler = (menu) => {
		if (isActive !== menu) {
			setIsActive(menu);
		}
	};

	return (
		<main className="bg-very-dark-blue py-24 text-white w-full h-full md:min-h-screen md:grid md:place-items-center">
			<section className="grid gap-5 px-5 md:gap-6 md:grid-cols-4 md:grid-rows-2 md:w-full md:max-w-[1100px]">
				<Profile isActive={isActive} menuHandler={menuHandler} />
				{data.map((card, index) => (
          <Card 
            key={index}
            title={card.title}
            current={card.timeframes[isActive].current}
            previous={card.timeframes[isActive].current}
            icon={card.icon}
            background={card.background}
          />
        ))}
			</section>
		</main>
	);
};

export default App;
