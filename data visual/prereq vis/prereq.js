      var gauge;
      var gaugeData;
      var options;
      google.charts.load('current', {packages:["gauge","orgchart"]});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topic');
        data.addColumn('string', 'Parent');
        data.addColumn('number', 'Score');
          
        data.addRows(lst);
          
        

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
            var input = "<h3>"+topic+"</h3>";
            document.getElementById("gauge_title").innerHTML = input;
            //gauge.clearChart();
            gaugeTable[1][1]=(score*10);
            gaugeTable[2][1]=(Math.random()*100)+1;
            gaugeData = google.visualization.arrayToDataTable(gaugeTable);
            gauge.draw(gaugeData, options);
            console.log("drew");
          //document.getElementById("gauge_div").innerHTML = "<p>"+topic+"</p><p>"+score+"</p>";
        }

      }
