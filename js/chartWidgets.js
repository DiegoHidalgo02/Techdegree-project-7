const trafficCanvas = document.querySelector("#traffic-chart").getContext('2d');
const dailyCanvas = document.querySelector("#daily-chart").getContext('2d');
const mobileCanvas = document.querySelector("#mobile-user").getContext('2d');

const trafficData = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500];
const trafficDataDaily = [2450, 1250, 10, 1200, 2500, 1250, 1250, 1150, 2250, 1900, 2500];
const trafficDataWeekly = [1500, 1250, 1850, 1900, 1450, 2000, 1350, 1800, 1750, 1600, 2300];
const trafficDataMoths = [2250, 1700, 1400, 1950, 2100, 1550, 2450, 2050, 1250, 1850, 1750];