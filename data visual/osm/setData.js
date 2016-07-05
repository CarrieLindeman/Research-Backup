var users = [];

var lst = [
    ['Structure', 100],
    ['Scope', 100],
    ['Classes & Objects', 100],
    ['Functions', 100],
    ['Using Classes', 100],
    ['Defining Classes', 100],
    ['Defining Functions', 100],
    ['Returning Values', 100],
    ['Parameters', 100],
    ['Calling Functions', 100],
    ['Arguments', 100],
    ['Catching Return Values', 100],
    
    ['Data', 100],
    ['Assignment', 100],
    ['Literals', 100],
    ['Variables', 100],
    ['Expressions', 100],
    ['Math Expressions', 100],
    ['Boolean Expressions', 100],
    ['Int', 100],
    ['Float', 100],
    ['Boolean', 100],
    ['Data Types', 100],
    
    ['Control', 100],
    ['If Statement', 100],
    ['Loop', 100],
    ['While Loop', 100],
    ['For Loop', 100],
    ['Collections', 100],
    ['String', 100],
    ['List', 100]
    
];

//hard coded, simplified connections between nodes    
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

for(var stud = 0; stud < 20; stud++){
    //randomize the data
    //this is where I would read in the numbers from the textbook
    for(var i = 0; i < lst.length; i++){
        var num = (Math.random() * 10) + 1;
        lst[i][1]=num;
    }

    //constant used to unify the size of the blocks
    var cnst = 10;
    //title lines of the final tree list
    var finalLst = [
        ['Topic','Parent','Constant (size)','Current Score (color)'],
        ['Intro CS',null,0,0]
    ];
    

    for(var i = 0; i < connections.length; i++){
        var tempLst = [];
        
        //pushing the topic and parent and constant
        tempLst.push(connections[i][0]);
        tempLst.push(connections[i][1]);
        tempLst.push(10);
        
        for(var j = 0; j < lst.length; j++){
            if( connections[i][0] == lst[j][0]){
                tempLst.push(lst[i][1]); //pushing the score for that node
            }
        }
        //pushing that row to the final list
        finalLst.push(tempLst);
    }

    var student = {
        ID:stud,
        name:"Bob",
        class:Math.floor((Math.random() * 2) + 1),
        major:"Emerging Media",
        progress:finalLst,
    }

    users.push(student);
}
