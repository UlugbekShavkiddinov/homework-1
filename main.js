var elInputAmound = document.querySelector("#input_amound");
var elSubmit = document.querySelector("#hisoblash");
var elForm = document.querySelector("#form_counting");


var elWalkingResult = document.querySelector("#walking__result");
var elBikeresult = document.querySelector("#bike__result");
var elCarResult = document.querySelector("#car__result");
var elPlaneResult = document.querySelector("#plane__result");

var walkSpeed = 3.6;
var bikeSpeed = 20.1;
var carSpeed = 70;
var planeSpeed = 800;


elForm.addEventListener("submit", function (evt) {
    {
        evt.preventDefault();
        var inputAmound = elInputAmound.value;

        if (inputAmound <= 0) {
            alert("Xato");
        } else {
            var spendTimeByWalkHour = inputAmound / walkSpeed;
            var spendTimeByBikeHour = inputAmound / bikeSpeed;
            var spendTimeByCarHour = inputAmound / carSpeed;
            var spendTimeByPlaneHour = inputAmound / planeSpeed;

            var spendTimeByWalkMinute = Math.ceil(((spendTimeByWalkHour - Math.floor(spendTimeByWalkHour)) * 60));
            var spendTimeByBikeMinute = Math.ceil(((spendTimeByBikeHour - Math.floor(spendTimeByBikeHour)) * 60));
            var spendTimeByCarMinute = Math.ceil(((spendTimeByCarHour - Math.floor(spendTimeByCarHour)) * 60));
            var spendTimeByPlaneMinute = Math.ceil(((spendTimeByPlaneHour - Math.floor(spendTimeByPlaneHour)) * 60));

            var walkResult = (Math.floor(spendTimeByWalkHour) + "hr" + " " + spendTimeByWalkMinute + "" + "min");
            var bikeResult = (Math.floor(spendTimeByBikeHour) + "hr" + " " + spendTimeByBikeMinute + "" + "min");
            var carResult = (Math.floor(spendTimeByCarHour) + "hr" + " " + spendTimeByCarMinute + "" + "min");
            var planeResult = (Math.floor(spendTimeByPlaneHour) + "hr" + " " + spendTimeByPlaneMinute + "" + "min");


            elWalkingResult.textContent = walkResult;
            elBikeresult.textContent = bikeResult;
            elCarResult.textContent = carResult;
            elPlaneResult.textContent = planeResult;
        }
    }
}
)
