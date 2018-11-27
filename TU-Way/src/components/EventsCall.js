const axios = require('axios');
const util = require('util');

axios.get("http://25livepub.collegenet.com/calendars/publisher-calendar-tulife.ics")
    .then(function (res) {
        const lines = res.data.split("\n");
        let events = [];
        let date = '';
        let key = '';
        let location = '';
        let previousKey = '';
        for (i = 0; i < lines.length; i++) {
            if (lines[i].includes('DTSTART')) {
                date = lines[i].split(":")[1].trim();
            }
            else if (lines[i].includes('SUMMARY')) {
                key = lines[i].split(":")[1].trim();
            }
            else if (lines[i].includes('LOCATION')) {
                location = lines[i].split(":")[1].split('\\')[0];
            }
            else if (lines[i].includes('END:VEVENT')) {
                if (key === '' || date === '' || location === '') {
                    console.log("Warning: Upcoming event field not found.");
                }
                if (previousKey == key) {
                    events.push({
                        key: key,
                        date: date,
                        location: location
                    });
                    previousKey = key;
                }
                key = '';
                date = '';
                location = '';
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