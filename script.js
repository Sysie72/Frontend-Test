document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('status-chart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Terminée', 'Planifiée', 'En cours', 'Reportée', 'A risque'],
            datasets: [{
                data: [35, 20, 15, 10, 5], 
                backgroundColor: ['#16b438ff', '#4e4d4bff', '#4ed8d8ff', '#e29d1bff', '#d6461aff'],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false 
                }
            }
        }
    });   
    
    const ctKPI = document.getElementById('kpi-chart').getContext('2d');
    new Chart(ctKPI, {
        type: 'line', 
        data: {
            labels: ['Janver', 'Fevr', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Sept', 'Octbre', 'Novbre', 'Decbre'], // Mois
            datasets: [
                {
                    label: 'KPI ',
                    data: [0, 4 ,12 ,16 ,8 ,20], 
                    borderColor: '#ff6384', 
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', 
                    borderWidth: 1,
                    fill: false
                },
                {
                    label: 'retard',
                    data: [1, 8.4,8,12.4,20.16,12.8,4.0], 
                    borderColor: '#36a2eb', 
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderWidth: 1,
                    fill: false
                },
                {
                    label: 'Nombre de tache',
                    data: [0.5, 8.4, 12.20], 
                    borderColor: '#1E3A8A', 
                    backgroundColor: 'rgba(30, 58, 138, 0.2)',
                    borderWidth: 1,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                     
                    ticks: {
                        stepSize: 1 
                    },
                    title: {
                        display: true,
                    
                    }
                },
               
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        }
    });
});
