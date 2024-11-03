/* eslint-disable react/prop-types */
// PersonArray Component
const PersonArray = (props) => {
	const { name, crackersAssigned, index, removePerson } = props;
	return (
		name && (
			<div className="bg-white shadow-lg rounded-lg p-4 mb-4 border border-gray-300">
				<div className="flex gap-4 justify-between items-center">
					<div className="text-lg font-semibold text-gray-800">{name}</div>
					<div className="text-sm text-gray-500 italic">{crackersAssigned}</div>
					<button
						className="text-red-500 font-semibold hover:text-red-700 transition duration-300"
						onClick={() => {
							removePerson(index);
						}}>
						Remove
					</button>
				</div>
			</div>
		)
	);
};

export default PersonArray;
