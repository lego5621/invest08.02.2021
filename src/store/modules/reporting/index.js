import companyData from '@/store/modules/reporting/actions/companyData.js'
import allCompany from '@/store/modules/reporting/actions/allCompany.js'
import yearDebtRatioDividend from '@/store/modules/reporting/getters/yearDebtRatioDividend.js'
import yearRevenueEarning from '@/store/modules/reporting/getters/yearRevenueEarning.js'
import recommendationTrendSetting from '@/store/modules/reporting/getters/recommendationTrend.js'
import search from '@/store/modules/reporting/actions/search.js'



export default {
    actions: {
      allCompany,
      companyData,
      search,
    },

    mutations: {

      QAnalysis(state, QAnalysis){
        state.QAnalysis = QAnalysis
      },

      search(state, company) {
        state.search = company
      },

      stocksCaunt(state, stocksCaunt) {
        state.stocksCaunt = stocksCaunt
      },

      liab(state, liab) {
        state.liab = liab
      },

      Capital(state, Capital) {
        state.Capital = Capital
      },

      pages(state, allCompany){

        let pages = {
          totalPages: allCompany.totalPages,
          currentPage: allCompany.currentPage
        }

        state.pages = pages
      },

      clearDataCompany(state) {
        state.description = {}
        state.historicalPrice = []
        state.targetPrice = []
        state.revenue = []
        state.earnings = []
        state.debtRatio = []
        state.dividendsPaid = []
        state.year = []
        state.recommendationTrend = []
        state.recommendationSell = []
        state.recommendationBuy = []
        state.recommendationHold = []
      },

      clearAllCompany(state) {
        state.allCompany = []
      },

      description(state, description) {
        state.description = description
      },

      historicalPrice(state, historicalPrice) {
        state.historicalPrice = historicalPrice
      },

      targetPrice(state, targetPrice) {
        state.targetPrice = targetPrice
      },

      revenue(state, revenue) {
        state.revenue = revenue
      },

      earnings(state, earnings) {
        state.earnings = earnings
      },

      debtRatio(state, debtRatio) {
        state.debtRatio = debtRatio
      },

      dividendsPaid(state, dividendsPaid) {
        state.dividendsPaid = dividendsPaid
        state.dividendsPaidYear=dividendsPaid.year
      },

      year(state, year) {
        state.year = year
      },

      allCompany(state, allCompany) {
        //let arr = []
        //if(state.allCompany == {}){
         // state.allCompany = allCompany
        //}
        //state.allCompany = arr.concat(state.allCompany, allCompany);
        state.allCompany = allCompany
        state.indexListLoader = false
      },

      recommendationTrend(state, recommendationTrend) {
        // state.recommendationTrend = recommendationTrend
        state.recommendationSell = recommendationTrend[2]
        state.recommendationBuy = recommendationTrend[0]
        state.recommendationHold = recommendationTrend[1]
        // state.recommendationStrongSell = recommendationTrend[2]
        state.recommendationStrongBuy = recommendationTrend[3]
      },
    },

    state: {
      recommendationTrend:[],
      pages: {},
      description: {},
      historicalPrice: [],
      targetPrice: [],
      revenue: [],
      earnings: [],
      debtRatio: [],
      dividendsPaid: [],
      dividendsPaidYear:[],
      year: [],
      allCompany: [],
      indexListLoader: true,


      recommendationSell:[],
      recommendationBuy:[],
      recommendationHold:[],
      search:[],
      filter:'',

      stocksCaunt:[],
    },

    getters: {
      yearDebtRatioDividend,
      yearRevenueEarning,
      recommendationTrendSetting,



      QAnalysis(state){
        return state.QAnalysis
      },

      liabCapital(state){
        let data = [{
          name: 'Задолженость',
          data: state.liab
        }, {
          name: 'Капитал',
          data: state.Capital
        }]
        return data
      },


      recommendationTrend(state){
        let data = [
        // {
        //   name: 'Падение более 30%',
        //   data: state.recommendationStrongSell
        // }, 
        {
          name: 'Ожидают падение акций',
          data: state.recommendationSell
        }, 
        {
          name: 'Ожидают рост менее 15%',
          data: state.recommendationHold
        }, 
        {
          name: 'Ожидают рост более 15%',
          data: state.recommendationBuy
        },
        {
          name: 'Ожидают рост более 30%',
          data: state.recommendationStrongBuy
        }, 
      ]
        return data
      },


      pages(state){
        return state.pages
      },

      states(state){
        return state.search
      },

      description(state) {
        return state.description
      },

      historicalPrice(state) {
        let price = [{
          name: 'Прогноз',
          data: state.targetPrice,
        },{
          name: 'Цена',
          data: state.historicalPrice
        }]
        return price
      },

      revenue(state) {
        let revenue = [{
          name: 'Выручка',
          data: state.revenue,
        }]
        return revenue
      },

      earnings(state) {
        let earnings = [{
          name: 'Прибыль',
          data: state.earnings,
        },
      ]
        return earnings
      },

      debtRatio(state) {
        let debtRatio = [{
          name: '',
          data: state.debtRatio,
        }]
        return debtRatio
      },

      dividendsPaid(state) {
        let dividendsPaid = [{
          name: '',
          data: state.dividendsPaid.percent,
        }]
        return dividendsPaid
      },


      dividendsPaidYear(state) {
        let dividendsPaid = [{
          name: '',
          data: state.dividendsPaidYear,
        }]
        return dividendsPaid
      },

      getStocksCaunt(state) {
        let dividendsPaid = [{
          name: '',
          data: state.stocksCaunt.caunt,
        }]
        return dividendsPaid
      },

      stocksYear(state) {
        let dividendsPaid = [{
          name: '',
          data: state.stocksCaunt.date,
        }]
        return dividendsPaid
      },

      allCompany1(state) {
        return state.allCompany
      },
  }
}
