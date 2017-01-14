var axios = require('axios');


//Create helper function for making API calls
var helper = {
	runQuery: function(title, subId, content){
		console.log(title, subId, content);
	},

	getInformation: function(){
		return axios.get("/api");
	},

	postInformation: function(title, subId, content) {
		return axios.post({ title: title, subId: subId, content: content });
	}
}

module.exports = helper;