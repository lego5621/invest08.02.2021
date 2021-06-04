export default function(state) {
    return{            
      
        colors:[ '#51a9f0', '#51a9f0', '#51a9f0', '#51a9f0','RGBA(102, 184, 250, 0.4)'],
            tooltip: {
            theme: 'dark',
        },

        chart: {
            sparkline: {
                enabled: true
            },
        },

        states: {
            active: {
                filter: {
                type: 'none'
                }
            }
        },

        xaxis: {
            categories: state.year,
        },

        plotOptions: {
            bar: {
                distributed: true,
            },
        },

        noData: {
            text: 'Ожидаем данные...',
            align: 'center',
            verticalAlign: 'middle',
            offsetX: 0,
            offsetY: 0,
            style: {
              color: '#51a9f0',
              fontSize: '19px',
              fontFamily: undefined
            }
        }
    }
}