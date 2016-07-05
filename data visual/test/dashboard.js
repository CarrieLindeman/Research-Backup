function getVal(nodeList, nodeName){
    for(var i = 0; i < nodeList.length; i++){
        if(nodeList[i].name == nodeName){
            return nodeList[i].value;
        }
    }
    return 0;
    
}

var drawInput = [
    ['Topic','Parent','Current Score'],
    ['A',null,0.0]
];

//console.log(typeof getVal(nodeList, linkList[3].child));

for(var i = 0; i < linkList.length; i++){
    var temp = [];
    temp.push(linkList[i].child);
    temp.push(linkList[i].parent);
    temp.push(getVal(nodeList, linkList[i].child));
    drawInput.push(temp);
    
}

console.log(drawInput);

 google.charts.load('current', {'packages':['treemap']});
google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable(drawInput);
        
        var tree = new google.visualization.TreeMap(document.getElementById('chart_div'));

      var options = {
        highlightOnMouseOver: false,
        maxDepth: 1,
        maxPostDepth: 7,
        minHighlightColor: '#8c6bb1',
        midHighlightColor: '#9ebcda',
        maxHighlightColor: '#edf8fb',
        minColor: '#009688',
        midColor: '#f7f7f7',
        maxColor: '#ee8100',
        headerHeight: 15,
        showScale: true,
        height: 500,
        useWeightedAverageForAggregation: true,
        generateTooltip: showFullTooltip
      };

        tree.draw(data, options);
        
        console.log(data.getValue(2,2));
        console.log(typeof data.getValue(2,2));

function showFullTooltip(row, size, value) {
    return '<div style="background:#fd9; padding:10px; border-style:solid">' +
           '<span style="font-family:Courier"><b>' + data.getValue(row, 0) +
           '</b>, <br>Parent: ' + data.getValue(row, 1) + '<br>Current Score: ' + data.getValue(row, 2) + '</span><br>';
            //THIS IS WHERE WE COULD HAVE FEEDBACK AND LINK TO AREAS TO REVIEW
  }
    }
        
        
        
      