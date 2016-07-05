
var drawInput = [];

var colors = [];

for(var i = 0; i < linkList.length; i++){
    var tempArray = [];
    tempArray.push(linkList[i].child);
    tempArray.push(linkList[i].parent);
    tempArray.push(linkList[i].value);
    colors.push(linkList[i].color);
    drawInput.push(tempArray);
}

console.log(drawInput);
console.log(colors);

var options;
      google.charts.load('current', {packages:["gauge","orgchart"]});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topic');
        data.addColumn('string', 'Parent');
        data.addColumn('number', 'Score');
          
        data.addRows(drawInput);

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
          
          for(var i = 0; i < linkList.length; i++){
            data.setRowProperty(i, 'style', 'border: 10px solid '+colors[i]+'');  
            
          }
          
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, {allowHtml:true,ready:true,selectionColor:'#666666'});
        google.visualization.events.addListener(chart, 'select', selectHandler);
        
          function selectHandler(e) {
              var selection = chart.getSelection();
              for (var i = 0; i < selection.length; i++) {
                var item = selection[i];
                if (item.row != null && item.column != null) {
                  var topic = data.getFormattedValue(item.row, item.column);
                  var score = data.getFormattedValue(item.row, 2);
                } else if (item.row != null) {
                  var topic = data.getFormattedValue(item.row, 0);
                  var score = data.getFormattedValue(item.row, 2);
                } else if (item.column != null) {
                  var topic = data.getFormattedValue(0, item.column);
                  var score = data.getFormattedValue(item.row, 2);
                }
              }
                document.getElementById("text").innerHTML = "Topic: " + topic + " Score: " + score;
          }

          
      }
