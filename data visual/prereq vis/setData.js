var lst = [
            ["Boolean Expressions","Literals, Data Types, Variables, Assignment, Math Expressions",20],
              ["If Statement","Boolean Expressions",65],
              ["While Loop","Boolean Expressions",87],

              ["Sequence Types","Literals, Data Types, Variables, Assignment, Math Expressions",98],
              ["For Loop","Sequence Types",65],

              ["Calling Functions, Arguments, Returning Values","Literals, Data Types, Variables, Assignment, Math Expressions",20],
              ["Defining Functions, Parameters, Catching Return Values","Calling Functions, Arguments, Returning Values",63],
              ["Recursion","Defining Functions, Parameters, Catching Return Values",45],
              ["Instantiating Objects","Calling Functions, Arguments, Returning Values",80],
              ["Using Objects","Instantiating Objects",78],
              ["Defining Classes","Using Objects",90]
        ];

for(var i = 0; i < lst.length; i++){
    lst[i][2]=(Math.random() * 10) + 1;   
}