import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ConstructionIcon from '@mui/icons-material/Construction';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import { Link } from 'react-scroll'


const pages = ['Ongoing Projects', 'Completed Projects'];
const links = ["#Ongoing", "#Completed"]
const icons = [
	<QueryBuilderIcon fontSize="small" />,
	<ConstructionIcon fontSize="small" />,
]

const ScrollNavBar = () => {
	const StyledBreadcrumb = styled(Chip)(({ theme }) => {
		const backgroundColor =
			theme.palette.mode === 'light'
				? theme.palette.grey[300]
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
		<AppBar position='sticky'
			sx={{
				bgcolor: (theme) =>
					theme.palette.mode === 'dark' ? 'black' : '#fff',
				color: (theme) =>
					theme.palette.mode === 'dark' ? 'black' : 'green',

			}}>
			<Container maxWidth="xl">
				<Toolbar disableGutters variant='dense'>
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
		</AppBar >
	);
};
export default ScrollNavBar;