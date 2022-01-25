import axios from 'axios'
import router from '@/router/index.js';
export default async function({ commit }, id) {
    // let url =`http://localhost:3000/api/v1/company/${id}`
    let url =`https://serene-brushlands-48720.herokuapp.com/api/v1/company/${id}`

    
    axios.get(url)
        .then(function (res) {
            const Statements =  res.data

            const historicalPrice = Statements.historicalPrice.map(function(Statements) {
                return parseFloat(Statements.adjClose).toFixed(1)
            });

            const historicalPriceData = Statements.historicalPrice.map(function(Statements) {
                return Statements.date
            });

            const targetPrice = Statements.historicalPrice.map(function(Statements) {
                return parseFloat(Statements.adjTargetPrice).toFixed(1)||0
                // .toFixed(1)
            });

            const revenue = Statements.statementAll.map(function(Statements) {
                return Statements.revenue
            })

            const earnings = Statements.statementAll.map(function(Statements) {
                return Statements.earnings
            })

            const debtRatio = Statements.debtRatio.map(function(debtRatio) {
                return debtRatio.percent
            }).reverse();

            let dividendsPaid = {}
            
            dividendsPaid.percent = Statements.dividendsPaid.map(function(Statements) {
                return Statements.percent
            }).reverse()

            dividendsPaid.year = Statements.dividendsPaid.map(function(Statements) {
                return Statements.year
            }).reverse()

            let stocksCaunt ={}

            stocksCaunt.caunt = Statements.stocks.map(function(Statements) {
                return Statements.commonStock
            }).reverse()

            stocksCaunt.year = Statements.stocks.map(function(Statements) {
                return Statements.date
            }).reverse()


            const year =  Statements.statementAll.map(function(Statements) {
                return Statements.year
            })

            if(Statements.statementPrognosis[0].revenue && Statements.statementPrognosis[0].earnings ){
                year.push('Прогноз '+Statements.statementPrognosis[0].year)
                revenue.push(Statements.statementPrognosis[0].revenue)
                earnings.push(Statements.statementPrognosis[0].earnings)
            }
            if(Statements.statementPrognosis[1].revenue && Statements.statementPrognosis[1].earnings ){
                year.push('Прогноз '+Statements.statementPrognosis[1].year)
                revenue.push(Statements.statementPrognosis[1].revenue)
                earnings.push(Statements.statementPrognosis[1].earnings)
            }

            let description = {}
            description.description = Statements.description
            description.fullDescription = Statements.fullDescription
            description.name = Statements.name
            description.avatar = Statements.avatar
            description.historicalPrice = Statements.historicalPrice[Statements.historicalPrice.length - 1].adjClose  
            // description.TargetPrice = Statements.historicalPrice[Statements.historicalPrice.length - 1].adjTargetPrice
            description.TargetPrice = Statements.recommendationPrice
            description.profitPercentage = Statements.profitPercentage
            //description.otherFactors = Statements.otherFactors
            description.analystsGrade = Statements.analystsGrade

            description.historicalPriceData = historicalPriceData

            //description.city = Statements.city
            description.country = Statements.country
            description.sector = Statements.sector
            description.recommendation = Statements.recommendation
            description.minRecommendation = Statements.minRecommendation
            description.maxRecommendation = Statements.maxRecommendation
            description.website = Statements.website
            description.ticker = Statements.ticker.toUpperCase()
            description.recommendationAnalCaunt = Statements.recommendationAnalCaunt


            //description.site = Statements.site
            //description.overallRisk = Statements.overallRisk

            commit('historicalPrice', historicalPrice)
            stocksCaunt

            commit('stocksCaunt', stocksCaunt)
            commit('idea', Statements.idea)


            commit('targetPrice', targetPrice)
            commit('historicalPriceData', historicalPriceData)
            commit('revenue', revenue)
            commit('earnings', earnings)
            commit('debtRatio', debtRatio)
            commit('dividendsPaid', dividendsPaid)
            commit('description', description)
            commit('year', year)
            commit('recommendationTrend', Statements.recommendationTrend)
        }).catch(err => { 
            console.log(err)
            if(err.response.status == 404){
                router.push({ name: '404' });
            }
            if(err.response.status == 500){
                router.push({ name: '500' });
            }
          })
    }
