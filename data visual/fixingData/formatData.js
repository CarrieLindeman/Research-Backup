function makeTreeMap(studentProg, links){
    var treeArray = makeTreeArray(studentProg, links);
    
}

function makeTreeArray(studentProg, links){
    var treeArray = [['Topic','Parent','Constant (size)','Current Score (color)'],
        ['Intro CS',null,0,0]];
    
    var nodesWithParents = [];
    var occurance = 0;
    
    for(var i = 0; i < links.length; i++){ // for every link
        for(var n = 0; n < studentProg.length; n++){
            if(links[i].child == studentProg[n].name){
                nodesWithParents.push(studentProg[n]);
            }
        }
    }
    
    console.log(nodesWithParents);
}

makeTreeMap(studentProg, links);
