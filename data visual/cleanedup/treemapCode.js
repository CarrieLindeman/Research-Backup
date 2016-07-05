
//takes in student obj
//is made to read in domain calculations from student
//returns an array that is properly formatted for treemap
function domForTreemap(student){
    var studentArr = student.progress;
    var domTable = [['Topic','Parent','Constant (size)','Current Score (color)'],
        ['Intro CS',null,0,0]];
    
    for(var i = 0; i < studentArr.length; i++){ // for every topic node
        domTable.push(createDOMTreeRow(studentArr[i]));
    }
    return domTable;
}

//takes a topic object 
//returns one row formatted from DOM to Tree map
function createDOMTreeRow(topic){
    var row = [];
    row.push(topic.name);
    row.push(topic.parent);
    row.push(10);
    row.push(topic.value);
    return row;
}

//takes student obj
//is made to read in prereq calculations from student
//returns an array that is properly formatted for treemap
function prereqForTreemap(student){
    var studentArr = student.progress;
    var prereqTable = [['Topic','Parent','Constant (size)','Current Score (color)'],
        ['Intro CS',null,0,0]];
    
    for(var i = 0; i < studentArr.length; i++){ // for every topic node
        prereqTable.push(createPrereqRow(studentArr[i]));   
    }
    
    for(var i = 0; i < prereqTable.length; i++){
        for(var j = i; j < prereqTable.length; j++){
            //if(prereqTable[i][0]   
        }
    }
    //logic to remove duplicates and average their values
    /*for(var i = 0; i < prereqTable.length; i++){
           
    }*/
    return prereqTable
}

//takes in topic obj
//returns one row of properly formatted treemap from prereq data
function createPrereqRow(topic){
    var row = [];
    row.push(topic.summaryTitle);
    row.push(topic.summaryTitleParent);
    row.push(10);
    row.push(topic.value);
    return row;
}

//takes student and draws titles for treemap
function drawTreeTitles(student){
    document.getElementById("title").innerHTML = "<h3> Domain Progress for "+student.name+"</h3><p>Select a section to see the sub topics. Each click takes you from an abstract concept to a more concrete topic. Right click a section to navigate backwards.</p>";
    document.getElementById("gauge_title").innerHTML = "";
    document.getElementById("gauge_div").innerHTML = "";   
}

//takes in a double array that is properly formatted and draws the tree map
function drawTreeMap(dataTable){
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var dataTree = google.visualization.arrayToDataTable(dataTable);

        tree = new google.visualization.TreeMap(document.getElementById('chart_div'));
        
         programmaticSelector = new google.visualization.ControlWrapper({
          'controlType': 'CategoryFilter',
          'containerId': 'filter_div',
          'options': {
            'filterColumnLabel': 'Student',
            'ui': {label: 'Metric', labelSeparator: ':'}
          }
        });
        
        tree.draw(dataTree, {
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
                   '<span style="font-family:Courier"><b>' + dataTree.getValue(row, 0) +
                   '</b>, <br>Parent: ' + dataTree.getValue(row, 1) + '<br>Current Score: ' + dataTree.getValue(row, 3) + '</span><br>';
                    //THIS IS WHERE WE COULD HAVE FEEDBACK AND LINK TO AREAS TO REVIEW
        }
    }
    
}   

//takes in string whichData, string whichVisual, and student obj
//based on parameter, calls the right functions
function execute(whichData, whichVisual, student){
    if(whichData == "domain" && whichVisual == "treemap"){
        //drawTreeTitles(student);
        var arr = domForTreemap(student);
        drawTreeMap(arr);
    }
}
