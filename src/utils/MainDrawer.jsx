import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import KeyIcon from '@mui/icons-material/Key';
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function MainDrawer({ open, setOpen }) {
	const { signOut, user } = useAuthenticator((context) => [
		context.signOut,
		context.user,
	]);
	const navigate = useNavigate();

	const toggleDrawer = (open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setOpen(!open);
	};

	const list = (anchor) => (
		<Box
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}>
			<List>
				<ListItem disablePadding>
					<ListItemButton onClick={() => navigate("/")}>
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary={"Home"} />
					</ListItemButton>
				</ListItem>

				<ListItem disablePadding>
					<ListItemButton onClick={() => navigate("/reservation")}>
						<ListItemIcon>
							<AccessTimeIcon />
						</ListItemIcon>
						<ListItemText primary={"Schedule Reservation"} />
					</ListItemButton>
				</ListItem>

				<ListItem disablePadding>
					<ListItemButton onClick={() => navigate("/credentials")}>
						<ListItemIcon>
							<KeyIcon />
						</ListItemIcon>
						<ListItemText primary={"Credentials"} />
					</ListItemButton>
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem disablePadding>
					<ListItemButton onClick={signOut}>
						<ListItemIcon>
							<ExitToAppIcon />
						</ListItemIcon>
						<ListItemText primary={"Sign Out"} />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);

	return (
		<Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
			{list("left")}
		</Drawer>
	);
}
