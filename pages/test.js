import React from 'react'
import { initStore} from '../store'
import withRedux from 'next-redux-wrapper'
import NavigationBar from '../components/NavigationBar'
import LoginForm from '../components/LoginForm'
import Head from 'next/head'

class Counter extends React.Component {
  static async getInitialProps (ctx) {
      console.log(ctx)
    return { 
           }
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    return (
      <div>
      </div>
    )
  }
}

export default withRedux(initStore)(Counter)
