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

      search(state, company) {
        state.search = company
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
        state.recommendationTrend = recommendationTrend
        state.recommendationSell = recommendationTrend[2]
        state.recommendationBuy = recommendationTrend[0]
        state.recommendationHold = recommendationTrend[1]


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
      year: [],
      allCompany: [],
      indexListLoader: true,

      recommendationSell:[],
      recommendationBuy:[],
      recommendationHold:[],
      search:[],
    },

    getters: {
      yearDebtRatioDividend,
      yearRevenueEarning,
      recommendationTrendSetting,

      recommendationTrend(state){
        let data = [{
          name: 'За продажу',
          data: state.recommendationSell
        }, {
          name: 'За удержание',
          data: state.recommendationHold
        }, {
          name: 'За покупку',
          data: state.recommendationBuy
        }]
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
          name: '',
          data: state.revenue,
        }]
        return revenue
      },

      earnings(state) {
        let earnings = [{
          name: '',
          data: state.earnings,
        }]
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
          data: state.dividendsPaid,
        }]
        return dividendsPaid
      },

      allCompany1(state) {
        return state.allCompany
      },
  }
}
