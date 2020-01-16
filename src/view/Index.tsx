import * as React from 'react'
import { observer } from 'mobx-react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import { routes, IRoute } from '@/router/route'

@observer
class App extends React.Component<any, {}> {
    state = {
    }
    render() {
        return (
            <Router>
                {
                    routes.map((route: IRoute, index: number) => {
                        if (route.subRoutes) {
                            return (
                                <Switch key={index}>
                                    {
                                        route.subRoutes.map((subRoute: IRoute, subIndex: number) => (
                                            <Route key={index + '-' + subIndex} exact={subRoute.exact} path={route.path + subRoute.path} component={subRoute.comp} />
                                        ))
                                    }
                                    {
                                        route.redirect && <Redirect exact={true} from={route.path} to={route.redirect} />
                                    }
                                </Switch>
                            )
                        } else {
                            return (
                                <Route key={index} exact={route.exact} path={route.path} component={route.comp} />
                            )
                        }
                    })
                }
            </Router>
        )
    }
}

export default App;
