
export default function(state) {
    return{            
      
        colors:[ '#51a9f0', '#51a9f0', '#51a9f0', '#51a9f0','RGBA(102, 184, 250, 0.4)'],

        tooltip: {
            theme: 'dark',
            // theme: this.$store.state.reporting.description == true ? 'dark':'light',
        },

        grid: {
            show: false
        ,},

        chart: {
          id:'test',
          type: 'bar',
          toolbar: {
              show: false,
          },
          zoom: {
            enabled: false,
          },
          background: 'transparent'
          // sparkline: {
          //    enabled: true
          // },
        },

        theme: {
            mode: 'light', 
            monochrome: {
                enabled: false,
                color: '#1e2022',
                shadeTo: 'dark',
                shadeIntensity: 0.65
            },
        },

        dataLabels: {
            style: {
              colors: ['#F44336']
            }
          },

        states: {
            active: {
                filter: {
                    type: 'none'
                }
            }
        },

        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },

        axisBorder: {
            show: false,
        },  

        dataLabels: {
            enabled: false,
        },

        xaxis: {
            // categories: state.year,
            show: false,
        },

        yaxis: {
            show: false,
        },

        plotOptions: {
            bar: {
                distributed: true,
                horizontal: false,
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