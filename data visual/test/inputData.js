var student1 = {
    name: "Carrie"
}

var linkList = [{child:'A',parent:null,value:10.0,color:'#c91614'},{child:'B',parent:'A',value:5.0,color:'#d3150a'},{child:'C',parent:'A',value:70.0,color:'#50278d'},{child:'D',parent:'B',value:23.0,color:'#af1a2e'},{child:'E',parent:'B',value:110.0,color:'#0032de'},{child:'D1',parent:'C',value:23.0,color:'#af1a2e'},{child:'F',parent:'C',value:31.0,color:'#9f1c3e'},{child:'E1',parent:'D',value:110.0,color:'#0032de'},{child:'E2',parent:'D1',value:110.0,color:'#0032de'},{child:'F1',parent:'D',value:31.0,color:'#9f1c3e'},{child:'F2',parent:'D1',value:31.0,color:'#9f1c3e'},{child:'F3',parent:'E',value:31.0,color:'#9f1c3e'},{child:'F4',parent:'E1',value:31.0,color:'#9f1c3e'},{child:'F5',parent:'E2',value:31.0,color:'#9f1c3e'},{child:'G',parent:'E',value:55.0,color:'#6f236f'},{child:'G1',parent:'E1',value:55.0,color:'#6f236f'},{child:'G2',parent:'E2',value:55.0,color:'#6f236f'},{child:'G3',parent:'F',value:55.0,color:'#6f236f'},{child:'G4',parent:'F1',value:55.0,color:'#6f236f'},{child:'G5',parent:'F2',value:55.0,color:'#6f236f'},{child:'G6',parent:'F3',value:55.0,color:'#6f236f'},{child:'G7',parent:'F4',value:55.0,color:'#6f236f'},{child:'G8',parent:'F5',value:55.0,color:'#6f236f'}]; 

student1.data = linkList;

console.log(student1.name);