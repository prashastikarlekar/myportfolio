/** @format */

const cusom = docuemnt.querySelector("ff");
const clickHandler = () => {
	fetch(url)
		.then((res) => {
			if (!res.ok) {
				console.log(res.description);
				return;
			}
			return res.json();
		})
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.log(error);
		});
};

const clickh = async () => {
	try {
		const res = await fetch(url);
		const data = await res.json();
		if (!res.ok) {
			console.log("problem");
			return;
		}
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};
