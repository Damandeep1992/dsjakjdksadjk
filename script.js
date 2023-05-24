// Fetch the applicants data from the JSON file
fetch('Data.json')
	.then(response => response.json())
	.then(data => {
		let filteredData = data;
		let index = 0;

		// Display the first applicant's details
		displayApplicant(filteredData[index]);

		// Filter the applicants based on job openings
		const filterButton = document.getElementById('filter-btn');
		const filterInput = document.getElementById('filter');
		filterButton.addEventListener('click', () => {
			const searchTerm = filterInput.value.toLowerCase().trim();
			filteredData = data.filter(applicant => applicant.job.toLowerCase().includes(searchTerm));

			if (filteredData.length === 0) {
				displayErrorMessage("Invalid search or No applications for this job");
			} else {
				index = 0;
				displayApplicant(filteredData[index]);
				updateNavigationButtons(filteredData, index);
			}
		});

		// Next button functionality
		const nextButton = document.getElementById('next-btn');
		nextButton.addEventListener('click', () => {
			index++;
			if (index >= filteredData.length) {
				index = 0;
			}
			displayApplicant(filteredData[index]);
			updateNavigationButtons(filteredData, index);
		});

		// Previous button functionality
		const prevButton = document.getElementById('prev-btn');
		prevButton.addEventListener('click', () => {
			index--;
			if (index < 0) {
				index = filteredData.length - 1;
			}
			displayApplicant(filteredData[index]);
			updateNavigationButtons(filteredData, index);
		});
	})
	.catch(error => console.error(error));

// Function to display applicant's details
function displayApplicant(applicant) {
	document.getElementById('name').textContent = applicant.name;
	document.getElementById('email').textContent = applicant.email;
	document.getElementById('phone').textContent = applicant.phone;
	document.getElementById('address').textContent = applicant.address;
	document.getElementById('job').textContent = applicant.job;
}

// Function to update navigation buttons visibility
function updateNavigationButtons(filteredData, index) {
	const prevButton = document.getElementById('prev-btn');
	const nextButton = document.getElementById('next-btn');

	if (filteredData.length === 1) {
		prevButton.classList.add('hide');
		nextButton.classList.add('hide');
	} else {
		prevButton.classList.remove('hide');
		nextButton.classList.remove('hide');

		if (index === 0) {
			prevButton.classList.add('hide');
		} else if (index === filteredData.length - 1) {
			nextButton.classList.add('hide');
		}
	}
}

// Function to display error message
function displayErrorMessage(message) {
	const errorMessage = document.createElement('p');
	errorMessage.textContent = message;
	errorMessage.style.color = 'red';
	document.body.appendChild(errorMessage);
	setTimeout(() => {
		errorMessage.remove();
	}, 3000);
}
