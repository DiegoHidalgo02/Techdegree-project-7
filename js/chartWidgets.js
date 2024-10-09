const trafficCanvas = document.querySelector("#traffic-chart").getContext('2d');

let trafficData =  new Chart(trafficCanvas,{
    type: 'line',
    data:{
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3","4-10", "11-17", "18-24", "25-31"],
        datasets: [

            {   
                data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
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
        }
    }
});