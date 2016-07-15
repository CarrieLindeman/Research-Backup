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

drawOrgChart(visualizationList);