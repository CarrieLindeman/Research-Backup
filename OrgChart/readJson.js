var dataObject;
var visualizationList = [];

 var request = new XMLHttpRequest();
   request.open("GET", "domain.json", false);
   request.send(null)
   
var dataObject = JSON.parse(request.responseText);

var roots = findRoot(dataObject);
for(var i = 0; i < roots.length; i++){
    var row1 = [];
    row1.push(roots[i].id);
    row1.push(null);
    row1.push(roots[i].actualComp);
    visualizationList.push(row1);
}

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

function findRoot(dataList){
    var roots = [];
    for(var i = 0; i < dataList.nodes.length; i++){
        roots.push(dataList.nodes[i]);
    }
    
    for(var i = 0; i < dataList.links.length; i++){
        for(var j = 0; j < dataList.nodes.length; j++){
            if(dataObject.links[i].child == dataList.nodes[j].id){
                var index = roots.indexOf(dataList.nodes[j].id);
                roots.splice(index, 1);
            }
        }
    }
    
    return roots;
}