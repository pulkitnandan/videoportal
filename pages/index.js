import Head from 'next/head'
import Router from 'next/router'

import {
    initStore
}
from '../store'
import withRedux from 'next-redux-wrapper'
import NavigationBar from '../components/NavigationBar'
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
            }
            else {
                Router.push('/login')
            }
        }
    }
    componentWillUnmount() {}
    render() {
        return ( < div > < NavigationBar auth = {
                this.props.auth
            }
            /> < /div>)
    }
}
export default withRedux(initStore)(Counter)