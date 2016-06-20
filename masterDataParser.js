
 
//OSM ARRAY 
 var connections = [
	
	['Structure','Intro CS'],
	['Data','Intro CS'],
	['Control','Intro CS'],

	['Scope','Structure'],
	['Classes & Objects','Structure'],
	['Functions','Structure'],

	['Defining Classes','Classes & Objects'],
	['Using Classes','Classes & Objects'],
    ['Arguments','Classes & Objects'],
    ['Catching Return Values','Classes & Objects'],

	['Defining Functions','Functions'],
	['Returning Values', 'Functions'],
	['Parameters','Functions'],
	['Calling Functions','Functions'],

	['Expressions','Data'],
	['Assignment','Data'],
	['Data Types','Data'],

	['Literals','Assignment'],
	['Variables','Assignment'],

	['Math Expressions','Expressions'],
	['Boolean Expressions','Expressions'],

	['Int','Math Expressions'],
	['Float','Math Expressions'],

	['Boolean','Boolean Expressions'],

	['If Statement','Control'],
	['Loop','Control'],

	['While Loop','Loop'],
	['For Loop','Loop'],

	['Collections','For Loop'],

	['String','Collections'],
	['List','Collections']

];

for(var stud = 0; stud < masterData.length; stud++){//for every student
    //constant used to unify the size of the blocks
    var cnst = 10;
    //title lines of the final tree list
    var OSMData = [
        ['Topic','Parent','Constant (size)','Current Score (color)'],
        ['Intro CS',null,0,0]
    ];
    

    for(var i = 0; i < connections.length; i++){//for every topic in intro CS
        var tempLst = [];
        
        //pushing the topic and parent and constant
        tempLst.push(connections[i][0]);
        tempLst.push(connections[i][1]);
        tempLst.push(10);
        
        for(var j = 0; j < masterData[stud].scoreList.length; j++){//finding position of corresponding topic in student data
            if( connections[i][0] == masterData[stud].scoreList[j][0]){
                tempLst.push(masterData[stud].scoreList[i][1]); //pushing the score for that node
            }
        }
        //pushing that row to the final list
        OSMData.push(tempLst);
    }
    masterData[stud].OSM = OSMData;
}
//END OSM

//PREREQ ARRAY
var prereqConnections = [
    [0,"Boolean Expressions","Literals, Data Types, Variables, Assignment, Math Expressions"],
              [1,"If Statement","Boolean Expressions"],
              [2,"While Loop","Boolean Expressions"],

              [3,"Sequence Types","Literals, Data Types, Variables, Assignment, Math Expressions"],
              [4,"For Loop","Sequence Types"],

              [5,"Calling Functions, Arguments, Returning Values","Literals, Data Types, Variables, Assignment, Math Expressions"],
              [6,"Defining Functions, Parameters, Catching Return Values","Calling Functions, Arguments, Returning Values"],
              [7,"Recursion","Defining Functions, Parameters, Catching Return Values"],
              [8,"Instantiating Objects","Calling Functions, Arguments, Returning Values"],
              [9,"Using Objects","Instantiating Objects"],
              [10,"Defining Classes","Using Objects"]
];

for(var stud = 0; stud < masterData.length; stud++){//for every student
    var prereqData = [];
    //for(var group = 0; group < 11; group++){//for every grouping
        var tempList = [];
        if(prereqConnections[0][0]==0){
            var num = sumAvg(["Boolean Expressions","Boolean"],stud,masterData);
            tempList.push(prereqConnections[0][1]);
            tempList.push(prereqConnections[0][2]);
            tempList.push(num);
            prereqData.push(tempList);
            tempList = [];
            
        }
        if(prereqConnections[1][0]==1){
            var num = sumAvg(["If Statement"],stud,masterData);
            
            tempList.push(prereqConnections[1][1]);
            tempList.push(prereqConnections[1][2]);
            tempList.push(num);
            prereqData.push(tempList);
            tempList = [];
            
        }
        if(prereqConnections[2][0]==2){
            var num = sumAvg(["While Loop"],stud,masterData);
            
            tempList.push(prereqConnections[2][1]);
            tempList.push(prereqConnections[2][2]);
            tempList.push(num);
            prereqData.push(tempList);
            tempList = [];
            
        }
        if(prereqConnections[3][0]==3){
            var num = sumAvg(["Lists"],stud,masterData);
            
            tempList.push(prereqConnections[3][1]);
            tempList.push(prereqConnections[3][2]);
            tempList.push(num);
            prereqData.push(tempList);
            tempList = [];
            
        }
        if(prereqConnections[4][0]==4){
            var num = sumAvg(["For Loop"],stud,masterData);
            
            tempList.push(prereqConnections[4][1]);
            tempList.push(prereqConnections[4][2]);
            tempList.push(num);
            prereqData.push(tempList);
            tempList = [];
            
        }
        if(prereqConnections[5][0]==5){
            var num = sumAvg(["Calling Functions"],stud,masterData);
            
            tempList.push(prereqConnections[5][1]);
            tempList.push(prereqConnections[5][2]);
            tempList.push(num);
            prereqData.push(tempList);
            tempList = [];
            
        }
        if(prereqConnections[6][0]==6){
            var num = sumAvg(["Catching Return Values"],stud,masterData);
            
            tempList.push(prereqConnections[6][1]);
            tempList.push(prereqConnections[6][2]);
            tempList.push(num);
            prereqData.push(tempList);
            tempList = [];
            
        }
        if(prereqConnections[7][0]==7){
            var num = sumAvg(["Recursion"],stud,masterData);
            
            tempList.push(prereqConnections[7][1]);
            tempList.push(prereqConnections[7][2]);
            tempList.push(num);
            prereqData.push(tempList);
            tempList = [];
            
        }
        if(prereqConnections[8][0]==8){
            var num = sumAvg(["Instantiating Objects"],stud,masterData);
            
            tempList.push(prereqConnections[8][1]);
            tempList.push(prereqConnections[8][2]);
            tempList.push(num);
            prereqData.push(tempList);
            tempList = [];
            
        }
        if(prereqConnections[9][0]==9){
            var num = sumAvg(["Classes & Objects"],stud,masterData);
            
            tempList.push(prereqConnections[9][1]);
            tempList.push(prereqConnections[9][2]);
            tempList.push(num);
            prereqData.push(tempList);
            tempList = [];
            
        }
        if(prereqConnections[10][0]==10){
            var num = sumAvg(["Defining Classes"],stud,masterData);
            
            tempList.push(prereqConnections[10][1]);
            tempList.push(prereqConnections[10][2]);
            tempList.push(num);
            prereqData.push(tempList);
            tempList = [];
        }
        
    //}//per group
    masterData[stud].preData = prereqData;
}//per student


function sumAvg(groupArr, studIndex, masterData){
    
    var avg = 0;
    for(var i = 0; i < groupArr.length; i++){
        for(var j = 0; j < masterData[studIndex].scoreList.length; j++){
            if(groupArr[i] == masterData[studIndex].scoreList[j][0]){
                avg+=masterData[studIndex].scoreList[j][1];
            }
        }
    }
    avg = avg / groupArr.length;
    return avg;
}

var topicAvg = [];

for(var j = 0; j < masterData[0].preData.length; j++){//per topic
    var tempArr = [];
    for(var i = 0; i < masterData.length; i++){ //per person
        tempArr.push(masterData[i].preData[j][2]);
    }
    var tempAvg = 0;
    for(var k = 0; k < tempArr.length; k++){
        tempAvg += tempArr[k];       
    }
    tempAvg= tempAvg / tempArr.length;
    topicAvg.push(tempAvg);
}

