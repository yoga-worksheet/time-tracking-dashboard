import icon_work from "../assets/images/icon-work.svg";
import icon_play from "../assets/images/icon-play.svg";
import icon_study from "../assets/images/icon-study.svg";
import icon_exercise from "../assets/images/icon-exercise.svg";
import icon_social from "../assets/images/icon-social.svg";
import icon_self_care from "../assets/images/icon-self-care.svg";

const data = [
	{
		title: "Work",
		icon: icon_work,
		background: "bg-work",
		timeframes: {
			daily: {
				current: 5,
				previous: 7,
			},
			weekly: {
				current: 32,
				previous: 36,
			},
			monthly: {
				current: 103,
				previous: 128,
			},
		},
	},
	{
		title: "Play",
		icon: icon_play,
		background: "bg-play",
		timeframes: {
			daily: {
				current: 1,
				previous: 2,
			},
			weekly: {
				current: 10,
				previous: 8,
			},
			monthly: {
				current: 23,
				previous: 29,
			},
		},
	},
	{
		title: "Study",
		icon: icon_study,
		background: "bg-study",
		timeframes: {
			daily: {
				current: 0,
				previous: 1,
			},
			weekly: {
				current: 4,
				previous: 7,
			},
			monthly: {
				current: 13,
				previous: 19,
			},
		},
	},
	{
		title: "Exercise",
		icon: icon_exercise,
		background: "bg-exercise",
		timeframes: {
			daily: {
				current: 1,
				previous: 1,
			},
			weekly: {
				current: 4,
				previous: 5,
			},
			monthly: {
				current: 11,
				previous: 18,
			},
		},
	},
	{
		title: "Social",
		icon: icon_social,
		background: "bg-social",
		timeframes: {
			daily: {
				current: 1,
				previous: 3,
			},
			weekly: {
				current: 5,
				previous: 10,
			},
			monthly: {
				current: 21,
				previous: 23,
			},
		},
	},
	{
		title: "Self Care",
		icon: icon_self_care,
		background: "bg-self-care",
		timeframes: {
			daily: {
				current: 0,
				previous: 1,
			},
			weekly: {
				current: 2,
				previous: 2,
			},
			monthly: {
				current: 7,
				previous: 11,
			},
		},
	},
];

export default data;
