function makeDivs(box){
    var inputDivs = "";
    for(var i = 0; i < box.divs.length; i++){
        inputDivs += "<div id='" + box.divs[i] + "'></div>"
    }
    document.getElementById("section").innerHTML = inputDivs;
}


function drawOrgChart(box){
    
    document.getElementById(box.divs[0]).innerHTML = "<h2>" + box.student.name + "</h2>";

    var drawInput = [];

    var colors = [];

    for(var i = 0; i < box.student.data.length; i++){
        var tempArray = [];
        tempArray.push(box.student.data[i].child);
        tempArray.push(box.student.data[i].parent);
        tempArray.push(box.student.data[i].value);
        colors.push(box.student.data[i].color);
        drawInput.push(tempArray);
    }
    
    var options;
    google.charts.load('current', {packages:["orgchart"]});
    google.charts.setOnLoadCallback(drawChart);
    
    function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topic');
        data.addColumn('string', 'Parent');
        data.addColumn('number', 'Score');
          
        data.addRows(drawInput);

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById(box.divs[1]));
          
          for(var i = 0; i < linkList.length; i++){
            data.setRowProperty(i, 'style', 'border: 10px solid '+colors[i]+'');  
            
          }
        
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
                document.getElementById(box.divs[2]).innerHTML = "Topic: " + topic + " Score: " + score;
          }
    }
    
}

makeDivs(box1);
drawOrgChart(box1);

