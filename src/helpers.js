if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}
if (!String.prototype.isEmpty) {
	String.prototype.isEmpty = function() {
	    return (this.length === 0 || !this.trim());
	};
}
var HELPERS = {
	AMPMconverter: function(hour24) {
		if (hour24==0) {
			return {hour: 12, m: 'AM'};
		}
		else if (hour24 >= 1 && hour24 < 12) {
			return {hour: hour24, m: 'AM'}; 
		}
		else if (hour24==12) {
			return {hour: hour24, m: 'PM'};
		}
		else {
			return {hour: hour24 - 12, m: 'PM'};
		}
	},
    // takes a unit timestamp and converts it into a properly formatted am/pm datetime
   	timeConverter: function(UNIX_timestamp){
    	var a = new Date(UNIX_timestamp);
     	var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		var year = a.getFullYear();
		var month = months[a.getMonth() - 1];
		var date = a.getDate();
		var hour = a.getHours();
		var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes();
		var sec = a.getSeconds();

		var hour_obj = this.AMPMconverter(hour);

		// convert to civilian time
		var time =  month + ' ' + date + ', ' + year + ' at ' 
		+ hour_obj.hour + ':' + min + ' ' + hour_obj.m;
		return time;
    }

};