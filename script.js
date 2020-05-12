//this is generic data to show a proof of concept
var tableData = [
  {
    name:'Jared',
    age:20,
    degree:'CIT'
  },
  {
    name:'Albert',
    age:31,
    degree:'Aviation Technolgy'
  },
  {
    name:'Tonya',
    age:25,
    degree:'Marketing'
  },
  {
    name:'Daniel',
    age:19,
    degree:'Psychology'
  },
  {
    name:'Jordan',
    age:41,
    degree:'Nursing'
  },
  {
    name:'Kyle',
    age:24,
    degree:'Computer Science'
  },
  {
    name:'Adam',
    age:20,
    degree:'Cullinary Science'
  },
  {
    name:'Lulu',
    age:8,
    degree:'N/A'
  }
  
]


//data splicing --------------------------------------
//this creates names for the headers
var dataHeaders = Object.keys(tableData[0]);
//this creates an empty list for the data to go into
var dataFinal = [];

//this creates the objects for data to be inserted into once spliced by category, including empy list for colors
for (var x = 0; x < (dataHeaders.length + 1); x++){
  var temp = dataHeaders[x];
  var tempArray = `[]`;
  var tempJSON = JSON.parse(tempArray);
  dataFinal.push(tempJSON);
  }

// splices data into each category
for (var i = 0; i < tableData.length; i++){
  for (var x = 0; x < dataHeaders.length; x++){
    var temp = [dataHeaders[x]];
    dataFinal[x].push(tableData[i][temp]);
  }
}
//end data splicing ----------------------------------

//this is the vue component
var app = new Vue({
  el:'#app',
  data:{
    persons: tableData
  }
})

//dynamically create random colors for charts.js chart
for(var i = 0; i < dataFinal[0].length; i++){
  var color1 = Math.round((Math.random()*256)-1);
  var color2 = Math.round((Math.random()*256)-1);
  var color3 = Math.round((Math.random()*256)-1);
  dataFinal[dataFinal.length - 1].push(`rgba(${color1}, ${color2}, ${color3}, 0.75)`);
}


//generic charts.js example
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: dataFinal[0],
        datasets: [{
            label: dataHeaders[1],
            data: dataFinal[1],
            backgroundColor: dataFinal[dataFinal.length - 1],
            borderColor: dataFinal[dataFinal.length - 1],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
