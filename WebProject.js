const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    
     const ActiveAccItemHd = document.querySelector(".accordion-item-header.active");
    if(ActiveAccItemHd && ActiveAccItemHd!==accordionItemHeader) {
        ActiveAccItemHd.classList.toggle("active");
        ActiveAccItemHd.nextElementSibling.style.maxHeight = 0;
     }

    accordionItemHeader.classList.toggle("active");
    const accBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accBody.style.maxHeight =  accBody.scrollHeight + "px";
    }
    else {
      accBody.style.maxHeight = 0;
    }
    
  });
});


function quoteSlider(){
  var quotes=["A smooth sea never made a skilled sailor.","The secret of getting ahead is getting started.","You will win if you don’t quit","Learn from yesterday, live for today, hope for tomorrow."];
  // find your element using id
  var x=document.getElementById("scrtext");

  // get a random quote index
  randomIndex = Math.floor(Math.random()*4);

  //set the random quote using innerHTML
  x.innerHTML=quotes[randomIndex];

  //Position absolute is necessary for sliding
  x.style.position="absolute";

  //get element width
  var width=x.offsetWidth;

  //start position is set at left
  var pos=0;

  //get parent container's width
  const parentWidth =x.parentNode.parentElement.clientWidth;

  //repeat frame at every interval of 10 miliseconds
  var id=setInterval(frame,10);

  function frame(){
    //check the right end reaches the parent end or not
      if(pos == parentWidth-10){
          pos=0; // set position to left again
          x.style.left=pos+ 'px'; //"px" // set the position 
          randomIndex=Math.floor(Math.random()*4); // get new quote index
           x.innerHTML=quotes[randomIndex]; // put new quote
          width=x.offsetWidth; // get new width of element
      }
      else{
          pos++; // increase position by 1
          x.style.left=pos+'px'; // set the position 
      }
  }
}
quoteSlider();


document.addEventListener("DOMContentLoaded", function (event) {

  var numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var getFirstDigit = function (number) {
      return parseInt(number / 10);
  }

  var getLastDigit = function (number) {
      return parseInt(number % 10);
  }

  /* calculating time */

  setInterval(function () {
      var myDate = new Date();
      var hours = myDate.getHours();
      var minutes = myDate.getMinutes();
      var seconds = myDate.getSeconds();


      let hoursFirst = document.querySelectorAll(".digit.hoursFirst")[0];
      hoursFirst.removeAttribute('class');
      hoursFirst.classList.add('digit');
      hoursFirst.classList.add('hoursFirst');
      hoursFirst.classList.add(numbers[getFirstDigit(hours)]);

      let hoursLast = document.querySelectorAll(".digit.hoursLast")[0];
      hoursLast.removeAttribute('class');
      hoursLast.classList.add('digit');
      hoursLast.classList.add('hoursLast');
      hoursLast.classList.add(numbers[getLastDigit(hours)]);


      /* to display minutes */
      let minutesFirst = document.querySelectorAll(".digit.minutesFirst")[0];
      minutesFirst.removeAttribute('class');
      minutesFirst.classList.add('digit');
      minutesFirst.classList.add('minutesFirst');
      minutesFirst.classList.add(numbers[getFirstDigit(minutes)]);

      let minutesLast = document.querySelectorAll(".digit.minutesLast")[0];
      minutesLast.removeAttribute('class');
      minutesLast.classList.add('digit');
      minutesLast.classList.add('minutesLast');
      minutesLast.classList.add(numbers[getLastDigit(minutes)]);

      /* to display seconds */
      let secondsFirst = document.querySelectorAll(".digit.secondsFirst")[0];
      secondsFirst.removeAttribute('class');
      secondsFirst.classList.add('digit');
      secondsFirst.classList.add('secondsFirst');
      secondsFirst.classList.add(numbers[getFirstDigit(seconds)]);

      let secondsLast = document.querySelectorAll(".digit.secondsLast")[0];
      secondsLast.removeAttribute('class');
      secondsLast.classList.add('digit');
      secondsLast.classList.add('secondsLast');
      secondsLast.classList.add(numbers[getLastDigit(seconds)]);
  }, 1000);


});




class Chart {

  left = 0;

  constructor(chartName, yAxisName, yAxisMaxValue) {
      this.chartName = chartName;
      this.yAxisName = yAxisName;
      this.yAxisMaxValue = yAxisMaxValue;

      let chartArea = document.querySelector("#chartArea");
      chartArea.style.display = "block";
      let chartCover = document.querySelector("#chartCover");
      chartCover.style.display = "block";
      let chartTitle = document.querySelector("#chartTitle");
      chartTitle.innerHTML = "<b>" + chartName + "</b>";
      let chartYAxis = document.querySelector("#chartYAxis");
      chartYAxis.innerHTML = yAxisName;
      this.chartArea = chartArea;
  }

  addXAxis(xAxisName, xAxisValue, xAxisColor) {

      const axisPercent = Math.floor(xAxisValue / this.yAxisMaxValue * 100);

      let xEle = document.createElement('div');
      xEle.style.width = "20px";
      xEle.style.position = "absolute";
      xEle.style.bottom = "0px";
      this.left = this.left + 60;
      xEle.style.left = this.left + "px";
      xEle.style.backgroundColor = xAxisColor;
      xEle.style.height = axisPercent + "%";
      this.chartArea.appendChild(xEle);

      let xEleName = document.createElement('span');
  
      xEleName.innerHTML = xAxisName;
      xEleName.style.width = "80px";
      xEleName.style.color = "black";
      xEleName.style.position = "absolute";
      xEleName.style.bottom = "-20px";
      xEleName.style.left = this.left + "px";
      this.chartArea.appendChild(xEleName);

      let xEleTag = document.createElement('span');
      xEleTag.innerHTML = axisPercent;
      xEleTag.style.width = "80px";
      xEleTag.style.color = "black";
      xEleTag.style.position = "absolute";
      xEleTag.style.bottom = axisPercent + "%";
      xEleTag.style.left = this.left + "px";
      this.chartArea.appendChild(xEleTag);

  }

  clearChart() {
      let chartArea = document.querySelector("#chartArea");
      chartArea.style.display = "none";
      chartArea.innerHTML = "";
      let chartCover = document.querySelector("#chartCover");
      chartCover.style.display = "none";
      chartArea.innerHTML = "";
      let chartTitle = document.querySelector("#chartTitle");
      chartTitle.innerHTML = "";
      let chartYAxis = document.querySelector("#chartYAxis");
      chartYAxis.innerHTML = "";

  }

}

let chart = '';

function createChart() {

  const chartName = document.querySelector('#chartName').value;
  const yAxisName = document.querySelector('#yAxisName').value;
  const yAxisMaxValue = document.querySelector('#yAxisMaxValue').value;

  this.chart = new Chart(chartName, yAxisName, yAxisMaxValue);

}

function addElement() {

  const xAxisName = document.querySelector('#xAxisName').value;
  const xAxisMaxValue = document.querySelector('#xAxisMaxValue').value;
  const xAxisColor = document.querySelector('.colors:checked').value;

  this.chart.addXAxis(xAxisName, xAxisMaxValue, xAxisColor);

}

function clearChart() {
  this.chart.clearChart();
}