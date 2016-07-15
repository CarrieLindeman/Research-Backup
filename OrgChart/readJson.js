var dataObject;
var visualizationList = [];

 var request = new XMLHttpRequest();
   request.open("GET", "input.json", false);
   request.send(null)
var dataObject = JSON.parse(request.responseText);

console.log(dataObject);

for(var i = 0; i < dataObject.links.length; i++){
    var row = [];
    row.push(dataObject.links[i].child);
    row.push(dataObject.links[i].parent);
    for(var j = 0; j < dataObject.nodes.length; j++){
        if(dataObject.nodes[j].id == dataObject.links[i].child){
            row.push(dataObject.nodes[i].actualComp);
        }
    }
    visualizationList.push(row);
}

console.log(visualizationList);