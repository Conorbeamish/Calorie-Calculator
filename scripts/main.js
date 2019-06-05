var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("male");
var activity = document.getElementById("activity");
var metric = document.getElementById("metric");
var imperial = document.getElementById("imperial");
var heightInches = document.getElementById("heightInches");
var dailyIntake

//
document.getElementById("submit").addEventListener("click", function(){
    calculateCalories();
    document.getElementById("maintainWeight").innerHTML = dailyIntake
    document.getElementById("loseWeight").innerHTML = dailyIntake - 500
    document.getElementById("gainWeight").innerHTML = dailyIntake + 500
    document.getElementById("BMI").innerHTML = dailyIntake / activity.value
});

//change units
metric.addEventListener("change", function(){
    if(this.checked){
        height.placeholder = "in cm"
        weight.placeholder = "in kg"
        heightInches.classList.add("hidden");
        heightInches.classList.remove("reveal");
        document.getElementById("lose").innerHTML = "0.5kg"
        document.getElementById("gain").innerHTML = "0.5kg"
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
    }
})

//calculates calorie intake
function calculateCalories(){
    //check gender
    if (male.checked = true){
        var gender = 5;
    } else {
        gender = -161
    }
    //check for units
    if(metric.checked = true){
        dailyIntake = (10 * weight.value + 6.25 * height.value - 5 * age.value + gender) * activity.value;
    } else {
        height = heightInches.value + height.value * 12
        dailyIntake = (4.536 * weight.value + 15.88 * height - 5 * age.value + gender) * activity.value;
    }
}