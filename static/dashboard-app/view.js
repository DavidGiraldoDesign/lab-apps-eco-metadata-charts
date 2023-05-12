class View {
    static barItem = document.querySelector('#myBarChart');
    static doughnutItem = document.querySelector('#myDoughnutChart');
    static lineItem = document.querySelector('#myLineChart');
    constructor() {

    }

    getHello() {
        this.onHello();
    }

    getBarChart() {
        const config = {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }
        new Chart(View.barItem, config);
    }

    getmyDoughnutChart() {
        const data = {
            labels: [
                'Red',
                'Blue',
                'Yellow'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }]
        };
        const config = {
            type: 'doughnut',
            data: data,
        };
        new Chart(View.doughnutItem, config);
    }

    getLineChart() {
        const labels = ['January','February', 'March', 'April', 'May', 'June', 'July'];
        const data = {
            labels: labels,
            datasets: [{
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        };
        const config = {
            type: 'line',
            data: data,
        };
        new Chart(View.lineItem, config);
    }

    getDataUpdate(){
        
    }

    render() {
        this.getBarChart();
        this.getmyDoughnutChart();
        this.getLineChart();

    }

}