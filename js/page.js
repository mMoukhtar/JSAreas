// Charts
let monthlySalesCTX = document.getElementById('monthlySales').getContext('2d');
let deptSalesCTX = document.getElementById('deptSales').getContext('2d');

let salesLabels = Array.of('OCT', 'NOV', 'DEC');
let salesData = Array.of(12, 14, 9);
let deptLabels = Array.of('Hiking', 'Running', 'Hunting');
let deptData = Array.of(12, 14, 9);

let newMonth = document.getElementById('monthId');
let newAmount = document.getElementById('itemAmount');
let yearlyTotalLabel = document.getElementById('yearlyTotal');


const monthlySales = new Set();
const monthlyLabels = new Set();

function addSale() {
    monthlyLabels.add(newMonth.value);
    monthlySales.add(Number.parseInt(newAmount.value));
    let total = 0;

    salesChart.data.datasets.forEach(dataset => {
        dataset.data = [];
    })
    for (let amount of monthlySales) {
        total += amount;
        salesChart.data.datasets.forEach(dataset => {
            dataset.data.push(amount);
        })
    }
    console.log(monthlyLabels);
    yearlyTotalLabel.innerHTML = total;
    salesChart.data.labels = Array.from(monthlyLabels);
    salesChart.update();


}

function GetTotal() {

}

// let total = 0;
// salesData.forEach(yearlyTotal);
// let totalLabel = document.getElementById('yearlyTotal');
// totalLabel.innerHTML = `$ ${total}`;

// function yearlyTotal(x) {
//     total += x;
// }


// function FindFirstThosand() {
//     alert(salesData.find(x => x > 12));
// }

// function ClearSales() {
//     salesData.fill(0);
//     salesChart.update();
// }

//Bar
var salesChart = new Chart(monthlySalesCTX, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: '# of sales',
            data: [],
            backgroundColor: [
                'rgb(238,184,104,1)',
                'rgb(75,166,223,1)',
                'rgb(239,118,122,1)'
            ],
            boarderWidth: 0
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


//Pie
var deptChart = new Chart(deptSalesCTX, {
    type: 'pie',
    data: {
        labels: deptData,
        datasets: [{
            label: '# of sales',
            data: deptData,
            backgroundColor: [
                'rgb(238,184,104,1)',
                'rgb(75,166,223,1)',
                'rgb(239,118,122,1)'
            ],
            boarderWidth: 0
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