import axios from 'axios';


export default axios.create({

	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID a93e11f41c80ce6be4b34339e5e1c37d9fe692aa07827941cb26bd3249adc458'
	}

});