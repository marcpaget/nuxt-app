import exports from "webpack"

export const state = () => ({
    beerdata: []
  })
  

  
  export const mutations = {
      updateBeerData: (state, data) => {
          state.beerdata = data
      }
  }

  export const actions = {
    async getBeerData({
state,
commit
    }) {
        try {
await fetch('https://api.punkapi.com/v2/')
        
.then(response => response.json())
.then(data => {
    console.log(data)
    commit('updateBeerData', data)
})
        }
        catch (err) {
            console.log(err)
        }
    }

    }
