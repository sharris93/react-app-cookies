import { useState, useContext } from 'react'
import { Link } from 'react-router'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import ReceiptIcon from '@mui/icons-material/Receipt'
import { CircularProgress } from '@mui/material'

import { useUser } from '../../contexts/UserContext'

const ResponsiveAppBar = () => {
  const pages = [
    { label: 'Data', tooltip: 'Capture and review receipts', path: '/data' },
    {
      label: 'Insights',
      tooltip: 'Understand purchasing behaviour',
      path: '/insights',
    },
    { label: 'About', tooltip: 'Learn more about PurchasIQ', path: '/about' },
  ]
  const settings = [
    { label: 'Account', tooltip: 'Customize settings', path: '/account' },
    { label: 'Sign out', tooltip: 'Leave the private area', path: '/sign-out' },
  ]

  const { user, loading } = useUser()

  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  if (loading) return <CircularProgress />
  if (!user) return <></>

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ReceiptIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 200,
              textDecoration: 'none',
            }}
          >
            PurchaseIQ
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Tooltip title="Open navigation">
              <IconButton size="large" onClick={handleOpenNavMenu}>
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <Tooltip title={page.tooltip} key={page.label}>
                  <MenuItem
                    component={Link}
                    to={page.path}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography sx={{ textAlign: 'center' }}>
                      {page.label}
                    </Typography>
                  </MenuItem>
                </Tooltip>
              ))}
            </Menu>
          </Box>

          <ReceiptIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 200,
              textDecoration: 'none',
            }}
          >
            PurchaseIQ
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Tooltip title={page.tooltip} key={page.label}>
                <Button
                  component={Link}
                  to={page.path}
                  sx={{ my: 2, color: 'inherit', display: 'block' }}
                >
                  {page.label}
                </Button>
              </Tooltip>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar>{user?.username.charAt(0).toUpperCase()}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Tooltip title={setting.tooltip} key={setting.label}>
                  <MenuItem
                    component={Link}
                    to={setting.path}
                    onClick={handleCloseUserMenu}
                  >
                    <Typography sx={{ textAlign: 'center' }}>
                      {setting.label}
                    </Typography>
                  </MenuItem>
                </Tooltip>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
