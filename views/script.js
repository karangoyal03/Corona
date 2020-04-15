  
  function doingrequest(){
      const axios = require("axios");

      axios
        .get("https://pomber.github.io/covid19/timeseries.json")

        .then((response) => {
          let countrynameval = $("#inp").val();

          let countryname = countrynameval;

          let countryarray = response.data[countryname];
          let confirmed = countryarray[countryarray.length - 1].confirmed;
          let deaths = countryarray[countryarray.length - 1].deaths;
          let recovered = countryarray[countryarray.length - 1].recovered;
        //   console.log(
        //     "confirmed: " +
        //       confirmed +
        //       " deaths: " +
        //       deaths +
        //       " recovered:" +
        //       recovered
        //   );
        let conname =document.getElementById('countryname')
        conname.innerText=countrynameval;

        let activecases=document.getElementById('active')
        activecases.innerText=confirmed;

        let death=document.getElementById('death')
        death.innerText=deaths;

        let recovery=document.getElementById('recovery')
        recovery.innerText=recovered;

        makingbarchart(countryarray);
        makinglinearchart(countryarray);
        makingbarchartforrecovery(countryarray);

        })
        .catch((error) => {
          console.log(error);
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
              
            },
          ],
        },
        options:{
            title:{
                display:true,
                text:"Total Active Cases",
                fontSize:25
            }
            ,
            legend:{
                position:'right',
                labels:{
                    fontColor:'#777'
                }
            }
        }
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
    Chart.defaults.global.defaultFontColor = "green";

    let active = new Chart(chart, {
      type: "horizontalBar",
      data: {
        labels: [...datearray],
        datasets: [
          {
            label: "Cases Per day",
            data: [...recoveredcasesarray],
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



  