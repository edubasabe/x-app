import React from 'react'
import { Box, ListItemIcon, MenuItem, MenuList, Typography } from '@mui/material'
import {
  GridView as GridViewIcon,
  SettingsOutlined as SettingsOutlinedIcon,
  AssessmentOutlined as AssessmentOutlinedIcon} 
from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { Routes } from '../router';

type DashboardProps = React.HTMLAttributes<HTMLDivElement>;

function Dashboard({ children }: DashboardProps) {
  return (
    <Box display={"flex"} height="100vh" width={"100%"}>
      <Box bgcolor={"white"} p={2} flex={1}>
        <Typography variant={"h5"} fontWeight={"bold"} mb={2}> 
          X App
        </Typography>
        <MenuList>
          <MenuItem component={RouterLink} to={Routes.Home}>
            <ListItemIcon>
              <GridViewIcon />
            </ListItemIcon>
            <Typography fontWeight={600}>
              Dashboard
            </Typography>
          </MenuItem>
          <MenuItem component={RouterLink} to={Routes.Settings}>
            <ListItemIcon>
              <SettingsOutlinedIcon />
            </ListItemIcon>
            <Typography fontWeight={600}>
              Settings
            </Typography>
          </MenuItem>
          <MenuItem component={RouterLink} to={Routes.Reports}>
            <ListItemIcon>
              <AssessmentOutlinedIcon />
            </ListItemIcon>
            <Typography fontWeight={600}>
              Reports
            </Typography>
          </MenuItem>
        </MenuList>
      </Box>
      <Box p={4} flex={4}>
        {children}
      </Box>
    </Box>
  )
}

export default Dashboard