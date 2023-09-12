
let input = prompt("What Would you like to do?")
const todos = ['Collect Chicken Eggs','Clean letter Box'];
while(input !== 'quit' && input !=='q'){
    if(input === 'list'){
        console.log('****************');
        for(let i=0; i<todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('****************');
    }
    else if(input ==='new'){
        const newtodo = prompt('ok, What is the new todo?');
        todos.push(newtodo);
        console.log(`${newtodo} is added to the list!`);
    }
    else if(input ==='deleted'){
        const index =parseInt(prompt(`Ok, enter an index to deleted: `));
        if(!Number.isNaN(index)){
              const deleted = todos.splice(index,1);
              console.log(`Ok,deleted ${deleted[0]}`);
    }else{
        console.log('Unknown index');
    }
}
    input = prompt("What Would you like to do?")
}
console.log("Okey Quit the App.");