import React, { Component } from 'react'


class Work extends Component {
    constuctor() {
        this.state = {

        }
    }

    handleFileChange(e) {

    }

    render() {
        return (<div>
            <input type="file" onChange={this.handleFileChange().bind(this)}/>
        </div>)
    } 
}

export default Work;