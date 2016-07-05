 google.charts.load('current', {'packages':['treemap']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable(users[0].progress);

        tree = new google.visualization.TreeMap(document.getElementById('chart_div'));
        
         programmaticSelector = new google.visualization.ControlWrapper({
          'controlType': 'CategoryFilter',
          'containerId': 'filter_div',
          'options': {
            'filterColumnLabel': 'Student',
            'ui': {label: 'Metric', labelSeparator: ':'}
          }
        });

        tree.draw(data, {
          maxDepth: 1,
          maxPostDepth: 2,
          minColor: '#ee8100',
          midColor: '#f7f7f7',
          maxColor: '#009688',
          headerHeight: 15,
          fontColor: 'black',
          fontSize: 16,
          showScale: true,
          generateTooltip: showFullTooltip,
          title: "Introduction to Computer Science, Python" 
        });
        
        function showFullTooltip(row, size, value) {
    return '<div style="background:#fd9; padding:10px; border-style:solid">' +
           '<span style="font-family:Courier"><b>' + data.getValue(row, 0) +
           '</b>, <br>Parent: ' + data.getValue(row, 1) + '<br>Current Score: ' + data.getValue(row, 3) + '</span><br>';
            //THIS IS WHERE WE COULD HAVE FEEDBACK AND LINK TO AREAS TO REVIEW
  }
      }