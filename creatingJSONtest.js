var mon = {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {}
};

var tue = {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {}
};

var wed = {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {}
};

var thu = {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {}
};

var fri = {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {}
};

var sat = {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {}
};

var sun = {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {}
};


const monJSON = JSON.stringify(mon);
const tueJSON = JSON.stringify(tue);
const wedJSON = JSON.stringify(wed);
const thuJSON = JSON.stringify(thu);
const friJSON = JSON.stringify(fri);
const satJSON = JSON.stringify(sat);
const sunJSON = JSON.stringify(sun);



function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}
  
// Start file download.
download("mon.json",monJSON);
download("tue.json",monJSON);
download("wed.json",monJSON);
download("thu.json",monJSON);
download("fri.json",monJSON);
download("sat.json",monJSON);
download("sun.json",monJSON);











console.log(monJSON);
console.log(tueJSON);
console.log(wedJSON);
console.log(thuJSON);
console.log(friJSON);
console.log(satJSON);
console.log(sunJSON);


var fs = require('fs');
fs.writeFile('schedule.json', json, 'utf8', callback);
