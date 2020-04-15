  
 
  function doingrequest(){
       $.get("https://pomber.github.io/covid19/timeseries.json", (data) => {
        //  console.log(data);
         let countryname =document.getElementById('inp').value;
         if(countryname.charAt(0)!==countryname.charAt(0).toUpperCase()){
           alert('First letter of your country name should be capital')
         }
         let countryarray = data[countryname];
         console.log(countryarray);

         let date = countryarray[countryarray.length - 1].date;
         let confirmed = countryarray[countryarray.length - 1].confirmed;
         let deaths = countryarray[countryarray.length - 1].deaths;
         let recovered = countryarray[countryarray.length - 1].recovered;

        //  console.log(date);
        //  console.log(confirmed);
        //  console.log(deaths);
        //  console.log(recovered);

         let conname = document.getElementById("countryname");
         conname.innerText = countryname.toUpperCase();

         let activecases = document.getElementById("active");
         activecases.innerText = confirmed;

         let death = document.getElementById("death");
         death.innerText = deaths;

         let recovery = document.getElementById("recovery");
         recovery.innerText = recovered;

         makingbarchart(countryarray);
         makinglinearchart(countryarray);
         makingbarchartforrecovery(countryarray);
         document.getElementById('inp').value="";
       });
        

  }

  function makingbarchart(array){
      let datearray=[]
      for(let i=0;i<array.length;i++){
         datearray.push(array[i].date);
      }
      let activecasesarray=[]
      for(let i=0;i<array.length;i++){
          activecasesarray.push(array[i].confirmed)
      }


      let chart = document.getElementById("activecaseschart").getContext('2d');
      Chart.defaults.global.defaultFontColor='blue';


       let active = new Chart(chart, {
         type: "bar",
         data: {
           labels: [...datearray],
           datasets: [
             {
               label: "Cases Per day",
               data: [...activecasesarray],
               
               backgroundColor:"yellow"
             },
           ],
         },
         options: {
           title: {
             display: true,
             text: "Total Active Cases",
             fontSize: 25,
           },
           legend: {
             position: "right",
             labels: {
               fontColor: "#777",
             },
           },
         },
       });
  }

  function makinglinearchart(array){
      let datearray=[]
      for(let i=0;i<array.length;i++){
          datearray.push(array[i].date);
      }

      let deathsarray=[]
      for(let i=0;i<array.length;i++){
          deathsarray.push(array[i].deaths);
      }

      let chart = document.getElementById("deathcaseschart").getContext('2d');

      Chart.defaults.global.defaultFontColor="red";
        let dead = new Chart(chart, {
          type: "line",
          data: {
            labels: [...datearray],
            datasets: [
              {
                label: "Cases Per day",
                data: [...deathsarray],
             
                backgroundColor: "rgba(255,99, 132, 0.2)"
              },
            ],
          },
          options: {
            title: {
              display: true,
              text: "Total Death Cases",
              fontSize: 25,
            },
            legend: {
              position: "left",
              labels: {
                fontColor: "#777",
              },
            },
          },
        });

  }

  function makingbarchartforrecovery(array) {
    let datearray = [];
    for (let i = 0; i < array.length; i++) {
      datearray.push(array[i].date);
    }
    let recoveredcasesarray = [];
    for (let i = 0; i < array.length; i++) {
      recoveredcasesarray.push(array[i].recovered);
    }

    let chart = document.getElementById("recoveredcaseschart").getContext("2d");
    Chart.defaults.global.defaultFontColor = "blue";

    let active = new Chart(chart, {
      type: "horizontalBar",
      data: {
        labels: [...datearray],
        datasets: [
          {
            label: "Cases Per day",
            data: [...recoveredcasesarray],
            fill: false,
            backgroundColor: "green",
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Total Recovered Cases",
          fontSize: 25,
        },
        legend: {
          labels: {
            fontColor: "#777",
          },
        },
      },
    });
  }



  