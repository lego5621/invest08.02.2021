export default {
    actions: {
      async fetchStatements({ commit, getters, dispatch, state }) {
        const res = await fetch(
          'https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=5&apikey=demo'
        )
        const Statements = await res.json()
        
        
        const revenueStatements = Statements.map(function(Statements) {
          return Statements.revenue;
        }).reverse();

        const incomeStatements = Statements.map(function(Statements) {
          return Statements.netIncome;
        }).reverse();

        commit('RevenueStatements', revenueStatements)
        commit('IncomeStatements', incomeStatements)

        dispatch('fetchActiv')
      },

      async fetchActiv({ commit, getters, dispatch, state }) {
        const res = await fetch(
          'https://financialmodelingprep.com/api/v3/balance-sheet-statement/AAPL?limit=5&apikey=demo'
        )
        const Statements = await res.json()
        
        
        const activStatements = Statements.map(function(Statements) {
          return Statements.totalAssets;
        }).reverse();


        commit('ActivStatements', activStatements)
        dispatch('debtToAssetsTTM')
      },

      async debtToAssetsTTM({ commit, getters, dispatch, state }) {
        const res = await fetch(
          'https://financialmodelingprep.com/api/v3/key-metrics-ttm/AAPL?limit=1&apikey=demo'
        )
        const Statements = await res.json()
        
        let debtToAssetsTTM= Statements[0].debtToAssetsTTM

        commit('debtToAssetsTTM', debtToAssetsTTM)
        dispatch('StockHistorical')
      },

      async StockHistorical ({ commit, getters, dispatch, state }) {
        const res = await fetch(
          'https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?serietype=line&limit=50&apikey=demo'
        )
        const Statements = await res.json()

        const dateHistorical = Statements.historical.map(function(Statements) {
          return Statements.close.toFixed(1)
        }).reverse();

        const labelHistorical = Statements.historical.map(function(Statements) {
          return Statements.date
        }).reverse();

        const sliceHistorical =dateHistorical.reverse().slice(0, 400)
        const dateSliceHistorical =labelHistorical.reverse().slice(0, 400)


        commit('StockHistorical', sliceHistorical.reverse() )
        commit('dateSliceHistorical',  dateSliceHistorical.reverse() )
        dispatch('DividendHistorical')
      },

      async DividendHistorical ({ commit, getters, dispatch, state }) {
        const res = await fetch(
          'https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/AAPL?apikey=demo'
        )
        const Statements = await res.json()

        const DividendHistorical = Statements.historical.map(function(Statements) {
          return Statements.adjDividend
        }).reverse();
        
        const dateDividendHistorical = Statements.historical.map(function(Statements) {
          return Statements.date
        }).reverse();

        const sliceDividendHistorical =DividendHistorical.reverse().slice(0, 20)
        const sliceDateSliceHistorical =dateDividendHistorical.reverse().slice(0, 20)

        commit('DividendHistorical', sliceDividendHistorical.reverse() )
        commit('dateDividendHistorical', sliceDateSliceHistorical.reverse() )
        dispatch('fetchPayoutRatio')
      },

      async fetchPayoutRatio({ commit, getters, dispatch, state }) {
        const res = await fetch(
          'https://financialmodelingprep.com/api/v3/ratios-ttm/AAPL?apikey=demo'
        )
        const Statements = await res.json()

        let payoutRatioTTM= Statements[0].payoutRatioTTM

        let priceEarningsRatioTTM = Statements[0].priceEarningsRatioTTM
      
        commit('payoutRatioTTM', payoutRatioTTM)
        commit('priceEarningsRatioTTM', priceEarningsRatioTTM)
        state.loaded = true
      },
    },

    mutations: {
      RevenueStatements(state, RevenueStatements) {
        state.RevenueStatements = RevenueStatements
      },
      IncomeStatements(state, incomeStatements) {
        state.incomeStatements = incomeStatements
      },
      ActivStatements(state, activStatements) {
        state.activStatements = activStatements
      },
      payoutRatioTTM(state, payoutRatioTTM) {
        state.payoutRatioTTM = payoutRatioTTM
      },

      priceEarningsRatioTTM(state, priceEarningsRatioTTM) {
        state.priceEarningsRatioTTM = priceEarningsRatioTTM
      },

      debtToAssetsTTM(state, debtToAssetsTTM) {
        state.debtToAssetsTTM = debtToAssetsTTM
      },

      StockHistorical(state, StockHistorical) {
        state.StockHistorical = StockHistorical
      },

      dateSliceHistorical(state, dateSliceHistorical) {
        state.dateSliceHistorical = dateSliceHistorical
      },

      DividendHistorical(state, DividendHistorical) {
        state.DividendHistorical = DividendHistorical
      },

      dateDividendHistorical(state, dateDividendHistorical) {
        state.dateDividendHistorical = dateDividendHistorical
      },
    },

    state: {
      RevenueStatements: [],
      incomeStatements: [],
      activStatements: [],
      payoutRatioTTM: null,
      priceEarningsRatioTTM: null,
      debtToAssetsTTM: null,
      loaded: false,
      StockHistorical:[],
      dateSliceHistorical:[],
      DividendHistorical: [],
      dateDividendHistorical: [],
    },

    getters: {
      revenueStatements(state) {
        let revenue ={
          labels: ['2015', '2016', '2017', '2018', '2019'],
          datasets: [
            {
              label: "",
              backgroundColor: 'rgba(31, 69, 98, 0.65)',
              data: state.RevenueStatements, 
              categoryPercentage: 1,
            }
          ]
        }
        return revenue
      },
      incomeStatements(state) {
        let income ={
          labels: ['2015', '2016', '2017', '2018', '2019'],
          datasets: [
            {
              label: "",
              backgroundColor: 'rgba(31, 69, 98, 0.65)',
              data: state.incomeStatements, 
              categoryPercentage: 1,
            }
          ]
        }
        return income
      },

      activStatements(state) {
        let income ={
          labels: ['2016', '2017', '2018', '2019', '2020'],
          datasets: [
            {
              label: "",
              backgroundColor: 'rgba(31, 69, 98, 0.65)',
              data: state.activStatements, 
              categoryPercentage: 1,
            }
          ]
        }
        return income
      },

      StockHistorical(state) {
        let income = [{
          name: 'Prise',
          data: state.StockHistorical
        }]

        return income
      },

      DividendHistorical(state) {
        let income = [{
          name: 'series-1',
          data: state.DividendHistorical
        }]
        
        return income
      },

      getPayoutRatioTTM(state){
        return state.payoutRatioTTM
      },

      priceEarningsRatioTTM(state){
        return state.priceEarningsRatioTTM
      },

      debtToAssetsTTM(state){
        return state.debtToAssetsTTM
      },
      

      loaded(state){
        return state.loaded
      }
  }
}