import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store from './store'
import Index from './view/Index';
import { Provider } from 'mobx-react';
import { orange } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// 整体主题配置
const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#1e88e5'
    },
    // secondary: {
    //   main: orange[500],
    // },
  },
  overrides: {
    // MuiButton: {
    //   root: {
    //     fontSize: '14px',
    //     padding:'5px 8px'
    //   },
    // },
  },
});
ReactDOM.render(
  <ThemeProvider theme={outerTheme}>
    <Provider {...store}>
      <Index name="abc" />
    </Provider>
  </ThemeProvider>,
  document.getElementById('app') as HTMLElement
);