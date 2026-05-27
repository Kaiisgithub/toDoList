let qnArray = [
    {question: "What is the capital of malaysia?", answer: "KL/Kuala Lumpur/kl"}, 
    {question: "What is 2 + 2?", answer: "4"}, 
    {question: "What is the largest mammal?", answer: "Blue Whale"}
];

let tracker =0;
let score =0; 

function showQuestion()
{
    let userQuestion = document.getElementById("question").innerHTML = qnArray[tracker].question;
}

function checkAnswer()
{
    let userInput = document.getElementById("userInput").value;
    
    if(qnArray[tracker].answer.toLowerCase().includes(userInput.toLowerCase())){
        document.getElementById("answer").innerHTML = ("Correct!");
        score++;
        tracker++;
    } else {
        document.getElementById("answer").innerHTML = ("Incorrect!");
        tracker++;
    }
    
    document.getElementById("userInput").value = "";
    
    if(tracker < qnArray.length)
    {showQuestion();}
    else
    {document.getElementById("score").innerHTML = ("Final score: " + score);}
    

}

showQuestion();
