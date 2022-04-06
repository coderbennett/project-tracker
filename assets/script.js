moment().format();

var currentTimeDateEl = $("#currentTimeDate");

currentTimeDateEl.text(moment().format('MMMM Do YYYY, h:mm:ss a'));