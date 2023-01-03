import React, { Component } from 'react'

 class Filter extends Component {
  render() {
    return (
        <div>
            <label>
                <input className="with-gap" name="filter" type="radio" datatype='all'/>
                <span>All</span>
            </label>
            <label>
                <input className="with-gap" name="filter" type="radio" datatype='movie'/>
                <span>Movies</span>
            </label>
            <label>
                <input className="with-gap" name="filter" type="radio" datatype='serias' />
                <span>Serias</span>
            </label>
        </div>
    )
  }
}

export default Filter
