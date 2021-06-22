import companyData from '@/store/modules/reporting/actions/companyData.js'
import allCompany from '@/store/modules/reporting/actions/allCompany.js'
import yearDebtRatioDividend from '@/store/modules/reporting/getters/yearDebtRatioDividend.js'
import yearRevenueEarning from '@/store/modules/reporting/getters/yearRevenueEarning.js'
import recommendationTrendSetting from '@/store/modules/reporting/getters/recommendationTrend.js'


export default {
    actions: {
      allCompany,
      companyData,
    },

    mutations: {

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
      },

      recommendationTrend(state, recommendationTrend) {
        state.recommendationTrend = recommendationTrend
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
    },

    getters: {
      yearDebtRatioDividend,
      yearRevenueEarning,
      recommendationTrendSetting,

      recommendationTrend(state){
        return [{
          name: 'За продажу',
          data: state.recommendationTrend[2]
        }, {
          name: 'За удержание',
          data: state.recommendationTrend[1]
        }, {
          name: 'За покупку',
          data: state.recommendationTrend[0]
        }]
      },



      pages(state){
        return state.pages
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
