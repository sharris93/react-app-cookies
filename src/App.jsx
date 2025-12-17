import { Routes, Route } from 'react-router'
import { Container } from '@mui/material'

import ResponsiveAppBar from './components/AppBar/AppBar.jsx'
import AboutView from './components/AboutView/AboutView.jsx'
import SignUp from './components/account/SignUp/SignUp.jsx'
import SignIn from './components/account/SignIn/SignIn.jsx'
import AccountManagement from './components/account/AccountManagement/AccountManagement.jsx'
import DataView from './components/DataView/DataView.jsx'
import InsightsView from './components/InsightsView/InsightsView.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import SignOut from './components/account/SignOut/SignOut.jsx'

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <main>
        <Container
          sx={{
            mt: 5,
            // display: 'flex',
            // justifyContent: 'center',
          }}
        >
          <Routes>
            <Route index element={<AboutView />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-out" element={<SignOut />} />
            <Route path="/account" element={<AccountManagement />} />
            <Route path="/data" element={<DataView />} />
            <Route path="/insights" element={<InsightsView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Container>
      </main>
    </>
  )
}

export default App
