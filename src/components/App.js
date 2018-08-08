import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeType = (animal) => {
    this.setState ({
      filters: {
        type: animal
      }
    })
  }


  fetchPets = () => {
    return fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(res => res.json()).then(pets => this.populatePets(pets))
  }

  populatePets = (pets) => {
    this.setState ({
      // one level deep in state
      pets: pets,
      // filters: {...this.state.filters, type: this.state.type}
    })
  }

  adoptPet = (id) => {
    // FIRST OPTION
    // found pet is an object on the state array
    // found pet
    // copy the pets array
    // non-destructively alter the pet object in the pets array
    // set state to new pets array

    // let foundPet = this.state.pets.find((pet) => {
    //   return pet.id === id
    // })
    // let petsCopy = [...this.state.pets]
    // let index = petsCopy.indexOf(foundPet) // 1
    // petsCopy.splice(index, 1, {...foundPet, isAdopted: true})
    //

    // BALLER OPTION
    let petsCopy = this.state.pets.map(pet => pet.id === id ? {...pet, isAdopted: true} : pet)
    this.setState({
        pets: petsCopy
    })
  }

  render() {
    console.log(this.state.pets)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType}
                  onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
