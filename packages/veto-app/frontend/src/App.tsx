import React from 'react'
import { Router, RouteComponentProps } from '@reach/router'
import { ThemeProvider } from 'emotion-theming'
import { lightTheme, GlobalStyles } from '@veriphi/veto-ui'
import MainLayout from './layouts/MainLayout'
import Welcome from './pages/Welcome'
import { Global, css } from '@emotion/core'

const App = () => (
  <ThemeProvider theme={lightTheme}>
    {/* Veto-ui necessary globals */}
    <GlobalStyles />

    {/* Global css reset */}
    <Global
      styles={css`
        html,
        body {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
      `}
    />
    <Router data-testid="Router">
      <RouterPage path="/" pageComponent={<Welcome />} />
      <MainLayout path="/*" />
    </Router>
  </ThemeProvider>
)

// This RouterPage Component is to ensure proper typing on children components to <Router /> by @reach/router
const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent

export default App
