const axios = require('axios');
const icalToolkit = require('ical-toolkit');
const util = require('util');

axios.get("http://25livepub.collegenet.com/calendars/publisher-calendar-tulife.ics")
    .then(function (res) {
        const events = icalToolkit.parseToJSON(res.data);
        console.log(util.inspect(events, false, 5, false));
    })
    .catch(function (error) {
        console.log(error);
    });