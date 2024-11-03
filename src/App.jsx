// App Component
import { useRef, useState } from "react";
import PersonArray from "./Components/PersonArray";

function App() {
	const [person, setPerson] = useState([]);
	const crackers = [
		"Churchuri",
		"Built Bomb",
		"Lasan Bomb",
		"Seeko",
		"Rocket",
		"Anar",
		"Chakri",
		"Pencil Rocket",
		"Atom Bomb",
		"Bhookhi Bomb",
		"Phuljhari",
		"Flower Pot",
		"Kalam Bomb",
		"Bam Bam",
		"Sutli Bomb",
	];

	const [randomGiftArray, setRandomGiftArray] = useState([]);
	const personName = useRef();
	const [giftAssigned, setGiftAssigned] = useState(false);

	const onAddpersonHandler = () => {
		if (!giftAssigned) {
			const newPerson = personName.current.value.trim();
			if (newPerson && !person.includes(newPerson)) {
				setPerson([...person, newPerson]);
				personName.current.value = "";
			} else {
				alert("Enter a unique name.");
			}
		} else {
			alert("Reset first");
		}
	};

	const assignGiftHandler = () => {
		if (!giftAssigned) {
			const randomGiftArray = person.map(() =>
				Math.floor(Math.random() * crackers.length)
			);
			setRandomGiftArray(randomGiftArray);
			setGiftAssigned(true);
		} else {
			alert("Already assigned");
		}
	};

	const resetHandler = () => {
		setPerson([]);
		setGiftAssigned(false);
		setRandomGiftArray([]);
	};

	const reAssignHandler = () => {
		if (giftAssigned) {
			const randomGiftArray = person.map(() =>
				Math.floor(Math.random() * crackers.length)
			);
			setRandomGiftArray(randomGiftArray);
		} else {
			alert("Assign the gifts first");
		}
	};

	const removePerson = (index) => {
		setPerson(person.filter((_, i) => i !== index));
	};

	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100 p-10">
			<h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">
				Diwali Gift Assigner
			</h1>
			<div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
				<div className="flex items-center gap-4 mb-6">
					<input
						type="text"
						placeholder="Enter the name"
						ref={personName}
						className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<button
						type="submit"
						className="bg-blue-500 text-white rounded-md px-4 py-0.5 hover:bg-blue-600 transition duration-300"
						onClick={onAddpersonHandler}>
						Add Person
					</button>
				</div>
				<div className="flex flex-col gap-2 mb-6">
					{person.map((name, index) => (
						<PersonArray
							key={index}
							name={name}
							index={index}
							removePerson={removePerson}
							crackersAssigned={
								!randomGiftArray.length
									? "No Gifts Assigned"
									: crackers[randomGiftArray[index]]
							}
						/>
					))}
				</div>
				<div className="flex justify-between gap-2">
					<button
						className="flex-1 bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 transition duration-300"
						onClick={assignGiftHandler}>
						Assign Gifts
					</button>
					<button
						className="flex-1 bg-yellow-500 text-white rounded-md px-4 py-2 hover:bg-yellow-600 transition duration-300"
						onClick={reAssignHandler}>
						Re-Assign Gifts
					</button>
					<button
						className="flex-1 bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 transition duration-300"
						onClick={resetHandler}>
						Reset
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
