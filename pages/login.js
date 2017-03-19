import Router from 'next/router'
import withRedux from 'next-redux-wrapper'
import Head from 'next/head'
import {
    initStore
}
from '../store'
import NavigationBar from '../components/NavigationBar'
import LoginForm from '../components/LoginForm'
import cookieman from '../utils/cookieman'
import {setCurrentUser} from '../actions/authActions'

class Counter extends React.Component {
    static getInitialProps({
        store, isServer
    }) {
        return {
            isServer
            , auth: store.getState()
        }
    }
    componentDidMount() {
        if (!this.props.auth.isAuthenticated) {
            let cookieInfo = cookieman(document.cookie);
            if (cookieInfo.valid) {
                this.props.dispatch(setCurrentUser({
                    user: cookieInfo.user
                    , sessionId: cookieInfo.sessionId
                }));
                Router.push('/index')
            }
        }
        else {
            Router.push('/index')
        }
    }
    componentWillUnmount() {}
    render() {
        return ( < div > < NavigationBar auth = {
                this.props.auth
            }
            /> < LoginForm / > < /div>)
    }
}
export default withRedux(initStore)(Counter)