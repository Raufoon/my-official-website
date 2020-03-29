const LocalStorageManager = {
	get: (key) => {
		let data = localStorage.getItem(key);

		if (typeof data === 'string') {
			try {
				data = JSON.parse(data);
			} catch (e) { }
		}
		return data;
	},

	save: (key, data) => {
		if (process.env.NODE_ENV === 'development') return;

		let dataToWrite = data;

		if (typeof data !== 'string') {
			dataToWrite = JSON.stringify(data);
		}

		localStorage.setItem(`age-${key}`, Date.now().toString());
		localStorage.setItem(key, dataToWrite);
	},

	has: (key, maxAge=7200000) => {
		let age = new Date(parseInt(localStorage.getItem(`age-${key}`), 10));

		if (Date.now() - age > maxAge) {
			return false;
		}
		return !!localStorage.getItem(key);
	}
};

export default LocalStorageManager
