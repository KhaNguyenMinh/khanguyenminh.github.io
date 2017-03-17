export default class Campaign {
	id: string = '';
	name: string = '';

	getId() {
		return this.id;
	}

	getName() {
		return this.name;
	}

	setId(id) {
		this.id = id;
	}

	setName(name) {
		this.name = name;
	}

	constructor(id: string = '', name: string = '') {
		this.id = id;
		this.name = name;
	}

}