import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ConstructionIcon from '@mui/icons-material/Construction';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-scroll'

import account from '../../img/icons/logo192.png'

const pages = ['Home', 'Ongoing Projects', 'Completed Projects'];
const links = ["#Home", "#Ongoing", "#Completed"]
const icons = [
	<HomeIcon fontSize="small" />,
	<QueryBuilderIcon fontSize="small" />,
	<ConstructionIcon fontSize="small" />,
]

const ScrollNavBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const StyledBreadcrumb = styled(Chip)(({ theme }) => {
		const backgroundColor =
			theme.palette.mode === 'light'
				? theme.palette.grey[100]
				: theme.palette.grey[800];
		return {
			backgroundColor,
			height: theme.spacing(3),
			color: theme.palette.text.primary,
			fontWeight: theme.typography.fontWeightRegular,
			'&:hover, &:focus': {
				backgroundColor: emphasize(backgroundColor, 0.06),
			},
			'&:active': {
				boxShadow: theme.shadows[1],
				backgroundColor: emphasize(backgroundColor, 0.12),
			},
		};
	});

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
					<Breadcrumbs separator="›" aria-label="breadcrumb">
						{pages.map((page, index) => (
							<Link to={links[index]} smooth={true} duration={500}>
								<StyledBreadcrumb
									key={page}
									component="a"
									label={page}
									icon={icons[index]}
								/>
							</Link>
						))}
					</Breadcrumbs>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ScrollNavBar;