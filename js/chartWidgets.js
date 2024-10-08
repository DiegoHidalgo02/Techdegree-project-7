const trafficCanvas = document.querySelector("#traffic-chart").getContext('2d');
const dailyCanvas = document.querySelector("#daily-chart").getContext('2d');
const mobileCanvas = document.querySelector("#mobile-user").getContext('2d');

const trafficData = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];
const trafficDataDaily = [2450, 1250, 10, 1200, 2500, 1250, 1250, 1150, 2250, 1900, 2500];
const trafficDataWeekly = [1500, 1250, 1850, 1900, 1450, 2000, 1350, 1800, 1750, 1600, 2300];
const trafficDataMoths = [2250, 1700, 1400, 1950, 2100, 1550, 2450, 2050, 1250, 1850, 1750];

let trafficChart =  new Chart(trafficCanvas,{
    type: 'line',
    data:{
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3","4-10", "11-17", "18-24", "25-31"],
        datasets: [

            {   
                data: trafficData,
                backgroundColor: 'rgba(116, 119, 191, .3)',
                borderWidth: 1,
                fill:true,
                tension: 0.4
            },


        ]

    },

    options: {

        backgroundColor: 'rgba(112, 104, 201, .5)',
        fill: true,
        aspectRatio: 2.5,
        responsive: true,

        animation: {

            duration: 0,

        },

        plugins: {

            legend: {
                display: false
            },

            title: {
                display: false 
            }

        },

        scales: {
            y: {
                min: 0,
                max: 2500
            }
        },

        animation: {
            duration: 600,
            easing: 'easeInOutQuad',
        }
    }
});

let dailyChart = new Chart(dailyCanvas, {

    type: 'bar',

    data:{

        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '# of Hits',
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: '#7477BF',
            borderWidth: 1
        }]

    },

    options:{

        scales: {
            y: {
                beginAtZero: true
            }
        },

        plugins: {
            legend: {
                display: false
            }
        }

    }


});

let mobileChart = new Chart(mobileCanvas,{

    type: 'doughnut',

    data:{

        labels: ["Desktop", "Tablet", "Phones"],
        datasets: [{

            label: '# of Users',
            data: [2000, 550, 500],
            borderWidth: 0,
            backgroundColor: ['#7477BF',
                              '#78CF82',
                              '#51B6C8']
        }]

    },

    options:{
        aspectRatio: 1.9,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 20,
                    fontStyle: 'bold'
                }
            }
        }
    }

})

const trafficNav = document.querySelector(".traffic-nav"); 
const trafficNavbarInputs = document.querySelectorAll(".traffic-nav input");

trafficNav.addEventListener("change", e=>{

    switch (e.target.id){
        case "Hourly":
            trafficChart.data.datasets[0].data = trafficData;
            trafficChart.update();
            break;
        case "Daily":
            trafficChart.data.datasets[0].data = trafficDataDaily;
            trafficChart.update();
            break;
        case "Weekly":
            trafficChart.data.datasets[0].data = trafficDataWeekly;
            trafficChart.update();
            break;
        case "Monthly":
            trafficChart.data.datasets[0].data = trafficDataMoths;
            trafficChart.update();
            break;
    }       


});