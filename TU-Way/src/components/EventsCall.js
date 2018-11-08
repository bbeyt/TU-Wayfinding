const axios = require('axios');
const util = require('util');

axios.get("http://25livepub.collegenet.com/calendars/publisher-calendar-tulife.ics")
    .then(function (res) {
        const lines = res.data.split("\n");
        let events = [{}];
        let events_i = 0;
        for (i = 0; i < lines.length; i++) {
            if (lines[i].includes('DTSTART')) {
                const date = lines[i].split(":");
                events[events_i] = { date: date[1] };
            }
            else if (lines[i].includes('SUMMARY')) {
                const title = lines[i].split(":");
                events[events_i]["title"] = title[1];
            }
            else if (lines[i].includes('LOCATION')) {
                const location = lines[i].split(":");
                events[events_i]["location"] = location[1];
            }
            else if (lines[i].includes('END:VEVENT')) {
                events_i++;
            }
        }
        console.log(util.inspect(events, false, 5, false));
        /* icalParser.convert(res.data, function (error, parsedResponse) {
            if (error) {
                console.log("Error occured while parsing iCal data.");
            } else {
                console.log(parsedResponse);
                const events = parsedResponse.VCALENDAR[0].VEVENT.map(function (event) {
                    return {
                        key: event.SUMMARY,
                        location: event.LOCATION.substring(0, event.LOCATION.indexOf("\\")),
                        description: event.DESCRIPTION
                    }
                });
                console.log(util.inspect(events, false, 5, false));
            } 
        }); */
    })
    .catch(function (error) {
        console.log(error);
    });