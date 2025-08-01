import axios from "axios";

export const handleCheck = async ({
	endpoint,
	data,
	changeload,
	setResult,
	phishmode,
}) => {
	let response; // Declare response outside the try block

	try {
		const userToken = localStorage.getItem("userToken");
		changeload(true);

		let url = `https://sandbox2025-1.onrender.com/v1/${endpoint}`;

		// Handle different cases for phishing detection
		if (endpoint === "phishing") {
			url =
				phishmode === "site"
					? "https://sandbox2025-1.onrender.com/v1/url"
					: "https://sandbox2025-1.onrender.com/v1/pmail";
		}

		response = await axios.post(url, data, {
			headers: { Authorization: `Bearer ${userToken}` },
		});

		// Process response based on the type of check
		setResult({
			res: true,
			...(endpoint === "phishing"
				? { malicious: response.data.isMalicious }
				: { pwned: response.data.pwned }),
			message: response.data.message,
		});

		console.log(response.data.details.sources);
	} catch (error) {
		console.error("Fetch error:", error.response?.data || error.message);
	} finally {
		changeload(false);

		if (endpoint === "email" && response) {
			// Check if response is defined
			console.log(response.data.details.sources);
			return response.data.details.sources;
		}
	}
};
