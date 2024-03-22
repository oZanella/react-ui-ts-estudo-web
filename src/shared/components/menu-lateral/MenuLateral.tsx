import { ReactNode } from 'react';
import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { useDrawerContext } from '../../contexts';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

interface IListItemLinkProps {
  label: string;
  icon: string;
  to: string;
  onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) => {
  const navigate = useNavigate();

  const reselvedPath = useResolvedPath(to);
  const match = useMatch({ path: reselvedPath.pathname, end: false });


  const handleClick = () => {
    onClick?.();
    navigate(to);
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};



interface MenuLateralProps {
  children: ReactNode;
}

export const MenuLateral: React.FC<MenuLateralProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>

        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

          <Box width='100%' height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://th.bing.com/th/id/OIG3.FNNgd1.IQjV0.YeeexxC?w=1024&h=1024&rs=1&pid=ImgDetMain"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map(drawerOption => (
                <ListItemLink
                  to={drawerOption.path}
                  key={drawerOption.path}
                  icon={drawerOption.icon}
                  label={drawerOption.label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>

        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};