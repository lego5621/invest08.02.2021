export default {
    actions: {
      async StockHistorical({ commit, getters, dispatch, state }) {
        let url ='http://localhost:5000/get/single/aapl'
        const res = await fetch(url)
        const Statements = await res.json()

        const dateHistorical = Statements.historicalPrice.map(function(Statements) {
          return Statements.adjClose.toFixed(1)
        }).reverse();

        const TargetPrice = Statements.historicalPrice.map(function(Statements) {
          return Statements.adjTargetPrice.toFixed(1);
        }).reverse();

        const Revenue = Statements.statementAll.map(function(Statements) {
          return Statements.revenue
        })

        const Earnings = Statements.statementAll.map(function(Statements) {
          return Statements.earnings
        })

        const debtRatio = Statements.debtRatio.map(function(debtRatio) {
          return debtRatio.percent
        }).reverse();

        const dividendsPaid = Statements.dividendsPaid.map(function(Statements) {
          return Statements.percent
        }).reverse()

        const year = Statements.statementAll.map(function(Statements) {
          return Statements.year
        })

        if(Statements.statementPrognosis.revenue){
          year.push('Прогноз на '+Statements.statementPrognosis.year)
          Revenue.push(Statements.statementPrognosis.revenue)
          Earnings.push(Statements.statementPrognosis.earnings)
        }

        commit('StockHistorical', dateHistorical.reverse())
        commit('TargetPrice', TargetPrice.reverse())
        commit('Revenue', Revenue)
        commit('Earnings', Earnings)
        commit('debtRatio', debtRatio)
        commit('dividendsPaid', dividendsPaid)
        commit('year', year)
        state.loaded = true
      },
    },

    mutations: {
      StockHistorical(state, StockHistorical) {
        state.StockHistorical = StockHistorical
      },
      TargetPrice(state, TargetPrice) {
        state.TargetPrice = TargetPrice
      },
      Revenue(state, Revenue) {
        state.Revenue = Revenue
      },
      Earnings(state, Earnings) {
        state.Earnings = Earnings
      },
      debtRatio(state, debtRatio) {
        state.debtRatio = debtRatio
      },
      dividendsPaid(state, dividendsPaid) {
        state.dividendsPaid = dividendsPaid
      },
      year(state, year) {
        state.year = year
      },
    },

    state: {
      loaded: false,
      StockHistorical:[],
      TargetPrice:[],
      Revenue:[],
      Earnings:[],
      debtRatio:[],
      dividendsPaid:[],
      year:[],
    },

    getters: {
      getStockHistorical(state) {

        let price = [{
          name: 'Прогноз',
          data: state.TargetPrice,
        },{
          name: 'Цена',
          data: state.StockHistorical
        }]

        return price
      },

      getRevenue(state) {

        let revenue = [{
          name: '',
          data: state.Revenue,
        }]

        return revenue
      },

      getEarnings(state) {

        let earnings = [{
          name: '',
          data: state.Earnings,
        }]

        return earnings
      },

      getDebtRatio(state) {

        let debtRatio = [{
          name: '',
          data: state.debtRatio,
        }]

        return debtRatio
      },

      getDividendsPaid(state) {

        let dividendsPaid = [{
          name: '',
          data: state.dividendsPaid,
        }]

        return dividendsPaid
      },

      getYear(state) {

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
        }
      },
   
      loaded(state){
        return state.loaded
      }
  }
}
