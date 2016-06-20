function prereq(studNum){
    document.getElementById("title").innerHTML = "<h3> Prereq Progress for "+masterData[studNum].name+"</h3><p>Select a section to have theg gauges display the data about the student and class progress in that topic.</p>";
    
    var gauge;
      var gaugeData;
      var options;
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topic');
        data.addColumn('string', 'Parent');
        data.addColumn('number', 'Score');
          
        data.addRows(masterData[studNum].preData);
          
        

        // Create the chart.
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
        // Draw the chart, setting the allowHtml option to true for the tooltips.
        chart.draw(data, {allowHtml:true,ready:true});
        google.visualization.events.addListener(chart, 'select', selectHandler);
          
        gaugeTable = [
          ['Label', 'Value'],
          ['Score', 0],
          ['Class Avg', 0]
        ];
          
         gaugeData = google.visualization.arrayToDataTable(gaugeTable);

         options = {
          width: 400, height: 120,
          redFrom: 0, redTo: 40,
          yellowFrom:40, yellowTo: 80,
          greenFrom:80, greenTo:100,
          minorTicks: 5
        };
          
         gauge = new google.visualization.Gauge(document.getElementById('gauge_div'));

        gauge.draw(gaugeData, options);
          
        function selectHandler(e) {
            var topic;
            var score;
            var selection = chart.getSelection();
          for (var i = 0; i < selection.length; i++) {
            var item = selection[i];
            if (item.row != null && item.column != null) {
              topic = data.getFormattedValue(item.row, item.column);
              score = data.getFormattedValue(item.row, 2);
            } else if (item.row != null) {
              topic = data.getFormattedValue(item.row, 0);
              score = data.getFormattedValue(item.row, 2);
            } else if (item.column != null) {
              topic = data.getFormattedValue(0, item.column);
              score = data.getFormattedValue(item.row, 2);
            }
          }
            var input = "<h3>"+topic+"</h3>";
            document.getElementById("gauge_title").innerHTML = input;
            gaugeTable[1][1]=(score*1);
            gaugeTable[2][1]=(topicAvg[item.row]);
            gaugeData = google.visualization.arrayToDataTable(gaugeTable);
            gauge.draw(gaugeData, options);        }

      }
}