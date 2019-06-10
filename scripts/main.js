var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("male");
var female = document.getElementById("female"); 
var activity = document.getElementById("activity");
var metric = document.getElementById("metric");
var imperial = document.getElementById("imperial");
var heightInches = document.getElementById("heightInches");
var dailyIntake
var gender

//changes units 
metric.addEventListener("change", function(){
    if(this.checked){
        height.placeholder = "in cm"
        weight.placeholder = "in kg"
        heightInches.classList.add("hidden");
        heightInches.classList.remove("reveal");
        document.getElementById("lose").innerHTML = "0.5kg"
        document.getElementById("gain").innerHTML = "0.5kg"
        document.getElementById("calorieForm").reset();
        document.getElementById("metric").checked = true;
    }
});
imperial.addEventListener("change", function(){
    if (this.checked){
        height.placeholder = "feet"
        weight.placeholder = "in lbs"   
        heightInches.classList.add("reveal");
        heightInches.classList.remove("hidden");
        document.getElementById("lose").innerHTML = "1.1 lbs"
        document.getElementById("gain").innerHTML = "1.1 lbs"
        document.getElementById("calorieForm").reset();
        document.getElementById("imperial").checked = true;
    }
});

//Clears text
document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("calorieForm").reset();
    document.getElementById("errorValue").classList.remove("reveal");
    document.getElementById("errorEmpty").classList.remove("reveal");
    document.getElementById("info").classList.remove("text-info-reveal"); 
});



//calculates calorie intake
function calculateCalories(){
    //check for units
    if(metric.checked == true){
        dailyIntake = (10 * weight.value + 6.25 * height.value - 5 * age.value + gender) * activity.value;
    } else {
        height = heightInches.value + height.value * 12
        dailyIntake = (4.536 * weight.value + 15.88 * height - 5 * age.value + gender) * activity.value;
    }
}   

//Listen for submit
document.getElementById("submit").addEventListener("click", function(){

        // check inputs for errors
        if (80 < age.value || age.value < 16 || height.value <= 0 || weight.value < 0 || isNaN(age.value) || isNaN(height.value) || isNaN(weight.value)){
            document.getElementById("errorValue").classList.add("reveal");
        } else if(metric.checked != true && 0 >= heightInches.value > 12 ){
            document.getElementById("errorValue").classList.add("reveal");
        } else if (age.value == "" || height.value == "" || weight.value == ""){
            document.getElementById("errorEmpty").classList.add("reveal");
        } else { 

            //check gender & default to male
            if (female.checked == true){
                gender = -161;
            } else {
                gender = 5
            }

            calculateCalories();

            //output text in document
            document.getElementById("maintainWeight").innerHTML = dailyIntake
            document.getElementById("loseWeight").innerHTML = dailyIntake - 500
            document.getElementById("gainWeight").innerHTML = dailyIntake + 500
            document.getElementById("BMI").innerHTML = dailyIntake / activity.value
            document.getElementById("info").classList.add("text-info-reveal");

            //clear error messages
            document.getElementById("errorValue").classList.remove("reveal");
            document.getElementById("errorEmpty").classList.remove("reveal");  
        }  
}); 
