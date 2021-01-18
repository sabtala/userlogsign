import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component{
    constructor(){
        super()
        this.state = {
            fullName: '',
            username: '',
            email: '',
            password:''
        }
    }

    changeFullName(e){
        this.setState({
            fullName: e.target.value
        })
    }

    changeUserName(e){
        this.setState({
            username: e.target.value
        })
    }

    changeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    changePassword(e){
        this.setState({
            password: e.target.value
        })
    }
    render(){
        return(
            <div>
                <div className='container'>
                    <div className = 'form-div'>
                        <form>
                            <input type = 'text'
                            placeholder = 'Full Name'
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className='form-control form-group'
                            />

                            <input type = 'text'
                            placeholder = 'User Name'
                            onChange={this.changeUserName}
                            value={this.state.username}
                            className='form-control form-group'
                            />

                            <input type = 'text'
                            placeholder = 'Email'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'
                            />

                            <input type = 'password'
                            placeholder = 'Password'
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group'
                            />

                            <input type='submit' className='btn btn-danger btn-block'
                            value='Submit'
                            /> 
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default App;