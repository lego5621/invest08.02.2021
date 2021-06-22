import axios from 'axios'
export default async function({ commit }, id) {
        let url =`http://localhost:3000/api/v1/company/${id}`
        axios.get(url)
            .then(function (res) {
            
            // const res = await fetch(url)
            // const Statements = await res.json()
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

            const dividendsPaid = Statements.dividendsPaid.map(function(Statements) {
                return Statements.percent
            }).reverse()

            const year =  Statements.statementAll.map(function(Statements) {
                return Statements.year
            })


            if(Statements.statementPrognosis.revenue){
                year.push('Прогноз на '+Statements.statementPrognosis.year)
                revenue.push(Statements.statementPrognosis.revenue)
                earnings.push(Statements.statementPrognosis.earnings)
            }

            let description ={}
            description.description = Statements.description
            description.name = Statements.name
            description.avatar = Statements.avatar
            description.historicalPrice = Statements.historicalPrice[Statements.historicalPrice.length - 1].adjClose  
            description.TargetPrice = Statements.historicalPrice[Statements.historicalPrice.length - 1].adjTargetPrice

            commit('historicalPrice', historicalPrice)
            commit('targetPrice', targetPrice)
            commit('revenue', revenue)
            commit('earnings', earnings)
            commit('debtRatio', debtRatio)
            commit('dividendsPaid', dividendsPaid)
            commit('description', description)
            commit('year', year)
            commit('recommendationTrend', Statements.recommendationTrend)
        })
    }
