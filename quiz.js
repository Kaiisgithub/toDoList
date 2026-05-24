let qnArray = [
    {question: "What is the capital of malaysia?", answer: "KL/Kuala Lumpur/kl"}, 
    {question: "What is 2 + 2?", answer: "4"}, 
    {question: "What is the largest mammal?", answer: "Blue Whale"}
];

let tracker =0;
let score =0;

do{
    let userAnswer = prompt(qnArray[tracker].question);
    
    if(qnArray[tracker].answer.toLowerCase().includes(userAnswer.toLowerCase())){
        alert("Correct!");
        score++
    } else {
        alert("Incorrect!");
    }
    tracker++;

}while(tracker < qnArray.length)

alert("Final score: " + score);