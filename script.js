const form = document.querySelector(".feedback-form");
const p = document.querySelector("p");


const emailPattern = /^[a-zA-Z0-9]{5,10}@[a-zA-Z0-9]{3,10}.com$/;
const usernamePattern = /^[a-z]{6,10}$/;
const feedbackPattern = /^.{10,50}$/;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const usernameResult = usernamePattern.test(form.username.value);
    const feedbackResult = feedbackPattern.test(form.feedback.value)
    
    if(usernameResult && feedbackResult){
        p.setAttribute("class","success");
        p.textContent="Feedback Submitted!"
    } else if (!usernameResult && !feedbackResult) {
        p.setAttribute("class", "error");
        p.textContent = "please fill username and feedback";
    } else if(!usernameResult){
        p.setAttribute("class","error");
        p.textContent="please check username length should 6-10"
    }else{
        p.setAttribute("class", "error");
        p.textContent = "please check feedback length should 10-50"
    }
});

form.username.addEventListener("keyup",(event)=>{
    const usernameResult = usernamePattern.test(event.target.value);

    if(usernameResult){
        form.username.setAttribute("class","accepted");
    }else{
        form.username.setAttribute("class","rejected");
    }
}) 

form.feedback.addEventListener("keyup", (event) => {
    const feedbackResult = feedbackPattern.test(event.target.value);

    if (feedbackResult) {
        form.feedback.setAttribute("class", "accepted");
    } else {
        form.feedback.setAttribute("class", "rejected");
    }
}) 


