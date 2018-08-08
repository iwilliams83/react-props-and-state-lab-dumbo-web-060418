import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  handleAdoption = (e) => {
    let id = e.target.id
    this.props.adoptPet(id)
  }

  render() {
   // console.log(this.props)
    return (this.props.pets.map(pet => {
      return <div key={pet.id} className="ui cards"><Pet onAdoptPet={this.handleAdoption} id={pet.id}
         name={pet.name}
      type={pet.type} age={pet.age} weight={pet.weight}/></div>
    }))
  }
}

export default PetBrowser
