function calculateBottom() {
    var height=document.querySelector("#height").value;
    var age=document.querySelector("#age").value;
    var index=document.querySelector("#index").value;
    var gender=document.querySelector("input[value='man']");
    if (gender.checked) {
        gender="man"; 
    } else { gender="woman";}
    var result = calculation(height, age, index, gender);
    document.querySelector(".result").innerHTML = "Идеальный вес =  " + result;
} 

function calculation(height, age, index, gender) {
    debugger;
    var index2;
    if (index<=15) {index2=0.9;
    } else if (index>=17) {index2=1.1;
    } else { index2=1; }
    var weightAnyGender = ((height-100+(age/10))*0.9*index2);
    var genderIndex;
    if (gender=="man") {
        genderIndex=1;
    } else { genderIndex=0.85;}
    var weight = weightAnyGender*genderIndex;
    return weight.toFixed(1);
}

