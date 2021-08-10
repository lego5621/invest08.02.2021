import axios from 'axios'
import router from '@/router/index.js';
export default async function({ commit }, id) {
    let url =`http://localhost:3000/api/v1/company/${id}`
    // let url =`https://serene-brushlands-48720.herokuapp.com/api/v1/company/${id}`

    
    axios.get(url)
        .then(function (res) {
            const Statements =  res.data

            const historicalPrice = Statements.historicalPrice.map(function(Statements) {
                return Statements.adjClose.toFixed(1)
            });

            const targetPrice = Statements.historicalPrice.map(function(Statements) {
                return Statements.adjTargetPrice.toFixed(1);
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

            if(Statements.statementPrognosis[0].revenue){
                year.push('Прогноз '+Statements.statementPrognosis[0].year)
                revenue.push(Statements.statementPrognosis[0].revenue)
                earnings.push(Statements.statementPrognosis[0].earnings)
            }
            if(Statements.statementPrognosis[1].revenue){
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

            //description.city = Statements.city
            description.country = Statements.country
            description.sector = Statements.sector
            description.recommendation = Statements.recommendation
            //description.site = Statements.site
            //description.overallRisk = Statements.overallRisk

            commit('historicalPrice', historicalPrice)
            stocksCaunt

            commit('stocksCaunt', stocksCaunt)

            commit('targetPrice', targetPrice)
            commit('revenue', revenue)
            commit('earnings', earnings)
            commit('debtRatio', debtRatio)
            commit('dividendsPaid', dividendsPaid)
            commit('description', description)
            commit('year', year)
            commit('recommendationTrend', Statements.recommendationTrend)
        }).catch(err => { 
            if(err.response.status == 404){
                router.push({ name: '404' });
            }
            if(err.response.status == 500){
                router.push({ name: '500' });
            }
          })
    }
