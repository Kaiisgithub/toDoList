let toDoLiST = [];


function addToDoList()
{
    let proceed = true;
    let addToDo;
    do
    {
        addToDo = toDoLiST.push(prompt("Enter your To-Do : "));
        proceed = confirm("Do you wish to continue? (Y/N) : ");
        if(!proceed)
        break;

    }while(proceed != false);

    if(addToDo != null)
    {
        let countList = toDoLiST.length;
        return "Amount of added To Do's: " + countList;
    }

}

function displayToDoList()
{   
    let counter = 1;

    let allTasks = "";
    toDoLiST.forEach((task, index) => {
    allTasks += (index + 1) + ". " + task + "\n";});
    return allTasks + "Total List: " + toDoLiST.length;
}

function searchToDoList()
{
    let keyword = "";
    let proceed = true;
    let result = "";

    do 
    {
        keyword = prompt(displayToDoList() + "\nSearch for task: ");
        result = toDoLiST.filter(task => task.includes(keyword));

        let resultDisplay = "";
        result.forEach((task, index) => {resultDisplay += (index + 1) + ". " + task + "\n";});

        if(result.length > 0)
        {
            confirm("Search result: \n" + resultDisplay + "\n");
        }
        else
        {
            confirm("Search not found !!");
        }
        
        proceed = confirm("Continue searching ?");
    }while(proceed != false);
}

function deleteToDoList()
{
    let keyword = "";
    let proceed = true;
    let result = "";
    let numberToBeDeleted = 0;

    do 
    {
        keyword = prompt(displayToDoList() + "\nSearch for task to be deleted: ");
        result = toDoLiST.filter(task => task.includes(keyword))

        keywordResult = "";
        result.forEach((task, index) => {keywordResult += (index + 1) + ". " + task + "\n";});

        numberToBeDeleted = parseInt(prompt("Search r esult: \n" + keywordResult + "\n" 
                            + "Enter number of the task to be deleted? : "));
    
        if (numberToBeDeleted >= 1 && numberToBeDeleted <= toDoLiST.length) {
            toDoLiST.splice(numberToBeDeleted - 1, 1);
        }
        else
        {
            alert("Number not found, insert valid number !");
        }
        proceed = confirm("Continue deleting ?");
    }while(proceed != false);
}



addToDoList();
displayToDoList();
searchToDoList();
deleteToDoList();

alert("BYE !!");