import React from 'react'

class Pet extends React.Component {


  render() {

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            PET NAME: {this.props.name}
          </a>
          <div className="meta">
            <span className="date">Type: {this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>

          </div>
        </div>
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
          <button id={this.props.id} className="ui primary button" onClick={this.props.onAdoptPet} >Adopt pet</button>

        </div>
      </div>
    )
  }
}

export default Pet
