import { ReactNode } from 'react';
import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { useAppThemeContext, useDrawerContext } from '../../contexts';
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
  const { toggleTheme } = useAppThemeContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>

        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

          <Box width='100%' height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://lh3.googleusercontent.com/pw/AP1GczPAq2xctv5RaCC0WeokUCRC0mgZ6eCZwZGTutjEecBx5txZLo1WE_vEDfrpbn-vPgmE54WKbZ017If3xbJam1hwyzvN0etI3EsTXaQfBQJqI6w8SHbMletz9_Zzsooa1mmgA4zqX9fo4fO7b2-lm7ymDf8rKuy2AbeffqP5qot8fIXVPz46khxzPg93JGwQKz9wK1uCwhKFPyl9g-nS7rVGNE9dGHo_cwQN4seXl08_tN1DuUrM88s2VZTbL9TF3hh2IOMWrJp6NnHmC0xAAydHwsYW_6uHfwMJy3qtgCC2qeiKz8mrXbMuOEMwypxY8yoQoDno-V0wb6GSw-8Rdwdby3UnGFqXfB71HL_xpAS_ADQh8yhxunK7sCXsPupl4RYqXx5_DvdoTHMT67XOM7fjVDbj4LLc8PmLyaujNrNHjtJYfKQ7Q5CKFqYbBRUlNIre7tN1MPBueDiXzD6mmOAOCbv8tJhTunV3m427VYTVcWCbzDWDrVczHJ78faVkQVUuL0OGVEfuedutupQmk_SC505yp_u6arVF1EmOZBxy5lTKJKmNY2Qzdj6vGviv3vmpJH65CftgYwEPUL6V3VvMgJ0DeV5Pl-F_XqInFqGp3EbdVkmj00xEoSIwHFiY2iKTUMpQQD1DYnp3Q2H-ilARFnohThlRBe4wHVkQ5fmCdKw-5F7gMB09B6r86MWQQkawXcljW9oFxFNnwWstculGVtVh16TvYZNeQKK7WscwsqiIztgjdp-afhC2UGWNTXWxNmeNrRUwZ1Bpk0efHxyS1vzlGLtd14pcwGH5V8hb-whYiut8xqAdu61UAgQOVp4j4anddgdh-ZUWguZQh2sK8vZ1OMr5KSY3SVnyspn5oWstvbMoUijL0T0CNnQoeJ6Mw6gXg1KDpmRUmRQb6F5iZd8p=w1024-h1024-s-no-gm?authuser=0"
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

          <Box>
            <List component="nav">
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <Icon>dark_mode</Icon>
                </ListItemIcon>
                <ListItemText primary="Alterar tema" />
              </ListItemButton>
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