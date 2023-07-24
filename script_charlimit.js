var messageForm = document.getElementById('subjectid');
var result = document.getElementById('result');
var subButton = document.getElementById('submitid');
var limit = 600;

result.textContent = 0 + "/" + limit; 

messageForm.addEventListener("input", () => {
    var textLength = messageForm.textLength;
    
    result.textContent = textLength + "/" + limit;

    if (textLength > limit){
        subButton.disabled = true;
        result.style.color="#ff2851";
    }
    else{
        subButton.disabled = false;
        result.style.color="#737373";
    }
});