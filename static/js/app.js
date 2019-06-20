// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");
console.log(data);

// populate the table with data information
data.forEach((ufodata) => {
  var row = tbody.append("tr");
  Object.entries(ufodata).forEach(([key, value]) => {
    var cell = row.append("td");
   cell.text(value);
  });
});


var submit = d3.select("#filter-btn");

submit.on("click", function() {
  
   d3.event.preventDefault();
  var datetime = d3.select("#datetime.form-control").property("value");
  var city=d3.select("#city.form-control").property("value")
  
   if (datetime === "" && city==="")
      {
        data.forEach((ufodata) => {
        var row = tbody.append("tr");
        Object.entries(ufodata).forEach(([key, value]) => {
          var cell = row.append("td");
         cell.text(value);
        });
      });
    }
      else if (datetime === "" && city!=="")
      {
  var filteredData = data.filter(Eachdata=> Eachdata.city === city);
  d3.select("tbody").html("");
  
    filteredData.forEach((ufositing) => {
         var row = tbody.append("tr");
        Object.entries(ufositing).forEach(([key, value]) => {
          var cell = row.append("td");
         cell.text(value);
        });
      });
   console.log(filteredData);
  }
  
  else if(datetime !== "" && city==="")
  {
      
    var filteredData = data.filter(Eachdata=> Eachdata.datetime === datetime );
    // var filteredData = data.filter(Eachdata=> Eachdata.datetime);
    d3.select("tbody").html("");
    filteredData.forEach((ufositing) => {
           var row = tbody.append("tr");
          Object.entries(ufositing).forEach(([key, value]) => {
            var cell = row.append("td");
           cell.text(value);
          });
        });
     console.log(filteredData);
    }

  else { 
      
    var filteredData = data.filter(Eachdata=> Eachdata.datetime === datetime && Eachdata.city === city);
    // var filteredData = data.filter(Eachdata=> Eachdata.datetime);
    d3.select("tbody").html("");
    filteredData.forEach((ufositing) => {
           var row = tbody.append("tr");
          Object.entries(ufositing).forEach(([key, value]) => {
            var cell = row.append("td");
           cell.text(value);
          });
        });
     console.log(filteredData);
    }
  
  
});



