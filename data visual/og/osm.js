function osm(studentNum){
    document.getElementById("title").innerHTML = "<h3> Domain Progress for "+masterData[studentNum].name+"</h3><p>Select a section to see the sub topics. Each click takes you from an abstract concept to a more concrete topic. Right click a section to navigate backwards.</p>";
    document.getElementById("gauge_title").innerHTML = "";
    document.getElementById("gauge_div").innerHTML = "";
    google.charts.setOnLoadCallback(drawChart);
    
    function drawChart() {
        var dataArray = masterData[studentNum].OSM;
        var arr = [['Topic','Parent','Constant (size)','Current Score (color)'],
        ['Intro CS',null,0,0]]
        
        var dataOSM = google.visualization.arrayToDataTable(dataArray);

        tree = new google.visualization.TreeMap(document.getElementById('chart_div'));
        
         programmaticSelector = new google.visualization.ControlWrapper({
          'controlType': 'CategoryFilter',
          'containerId': 'filter_div',
          'options': {
            'filterColumnLabel': 'Student',
            'ui': {label: 'Metric', labelSeparator: ':'}
          }
        });
        
        tree.draw(dataOSM, {
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
           '<span style="font-family:Courier"><b>' + dataOSM.getValue(row, 0) +
           '</b>, <br>Parent: ' + dataOSM.getValue(row, 1) + '<br>Current Score: ' + dataOSM.getValue(row, 3) + '</span><br>';
            //THIS IS WHERE WE COULD HAVE FEEDBACK AND LINK TO AREAS TO REVIEW
  }
}
    
}