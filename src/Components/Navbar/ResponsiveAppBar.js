import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import mominLogo from '../../img/logo/logo.png'

const pages = ['Home', 'About Us'];
const links = ['/', "/about"]

const ResponsiveAppBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static"
			sx={{
				bgcolor: (theme) =>
					theme.palette.mode === 'dark' ? 'black' : '#0101',
				color: (theme) =>
					theme.palette.mode === 'dark' ? 'black' : 'green',
			}}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
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
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page, index) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">
										<Link to={links[index]}>
											{page}
										</Link>
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignSelf: 'right', marginLeft: 'auto' }} >
						{
							pages.map((page, index) => (
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: 'black', display: 'block' }}
								>
									<Link to={links[index]}>
										{page}
									</Link>
								</Button>
							))
						}
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<img alt="Icon" src={mominLogo} className="h-6" />
					</Box>


				</Toolbar>
			</Container>
		</AppBar >
	);
};
export default ResponsiveAppBar;