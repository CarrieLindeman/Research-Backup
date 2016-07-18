function NodeColor(r,g,b){
    this.red = r;
    this.green = g;
    this.blue = b;
}

function findMax(listIn){
    var max = 0;
    for(var i = 0; i < listIn.length; i++){
        if(listIn[i][2] > max){
            max = listIn[i][2];
        }
    }
    return max;
}

function findMin(listIn){
    var min = 100000;
    for(var i = 0; i < listIn.length; i++){
        if(listIn[i][2] < min){
            min = listIn[i][2];
        }
    }
    return min;
}

function makeColorsList(dataList){
    
    var colorsList = [];
    var max = findMax(dataList);
    var min = findMin(dataList);
    
    var maxColor = new NodeColor(0,255,0);
    var minColor = new NodeColor(255,0,0);
    
    for(var i = 0; i < dataList.length; i++){
        var scorePer = calcScorePerc(max, min, dataList[i][2]);
        var r = getNewColorValue(maxColor.red, minColor.red, scorePer);
        var g = getNewColorValue(maxColor.green, minColor.green, scorePer);
        var b = getNewColorValue(maxColor.blue, minColor.blue, scorePer);
        
        var currNodeColor = new NodeColor(r,g,b);
        colorsList.push(rgbToHex(currNodeColor));
    }
    
    return colorsList;
}



function getNewColorValue(maxC, minC, scorePer){
    
    var cRange = maxC - minC;
    var newC = 0;
    if (cRange < 0){
        cRange = cRange * -1;
        scorePer = 100 - scorePer;
        newC = (scorePer * cRange) / 100;
        newC = maxC + newC;

    }else{
        newC = (scorePer * cRange) / 100;
        newC = minC + newC;

    }
    
    return newC;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(inputColor) {
    return "#" + componentToHex(inputColor.red) + componentToHex(inputColor.green) + componentToHex(inputColor.blue);
}

function calcScorePerc(max, min, score){
    var range = max - min;
    return ((score - min) * 100) / range;
}

function drawOrgChart(dataInput){
google.charts.load('current', {packages:["orgchart"]});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topic');
        data.addColumn('string', 'Parent');
        data.addColumn('number', 'Score');

        // For each orgchart box, provide the name, manager, and tooltip to show.
        data.addRows(dataInput);

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('section'));
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, {allowHtml:true});
      }
}

Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};

var colorList = makeColorsList(visualizationList);
console.log(colorList);
drawOrgChart(visualizationList);