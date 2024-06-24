class Task {
	#id;

	constructor(id, featureName, userStoryNumber, estimationHours) {
		this.#id = id;
		this.featureName = featureName;
		this.userStoryNumber = userStoryNumber;
		this.estimationHours = estimationHours;
	}

	getId() {
		return this.#id;
	}

	getFeatureName() {
		return this.featureName;
	}

	getUserStoryNumber() {
		return this.userStoryNumber;
	}

	getEstimationHours() {
		return this.estimationHours;
	}
}

module.exports = Task;
