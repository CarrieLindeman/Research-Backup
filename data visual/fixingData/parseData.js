var studentProg = [];
var links = [];

function parseLinks(linksIn){
    for(var i = 0; i < linksIn.length; i++){
        links.push(linksIn[i]);
    }
}

function parseStudentProg(studPIn){
    for(var i = 0; i < studPIn.length; i++){
        studentProg.push(studPIn[i]);
    }
}