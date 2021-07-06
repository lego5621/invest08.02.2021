import moment from 'moment'
export default function(state) {
    return{ 
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
        },
        colors:[ 'RGBA(102, 184, 250)', 'RGBA(102, 184, 250, 0.7)','RGBA(102, 184, 250, 0.4)',],
        tooltip: {
            theme: 'dark',
        },
        chart: {
            stacked: true,
            sparkline: {
                enabled: true
            },
        },
        xaxis: {
            categories: [ moment().locale("ru").subtract(3, 'Month').format("MMMM YYYY"), moment().locale("ru").subtract(2, 'Month').format("MMMM YYYY"), moment().locale("ru").subtract(1, 'Month').format("MMMM YYYY"), moment().locale("ru").subtract(0, 'Month').format("MMMM YYYY")],
        },
        states: {
            active: {
                filter: {
                    type: 'none'
                }
            }
        },
    }
}