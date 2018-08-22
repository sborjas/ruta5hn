import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import ScreenA from '../../screens/ScreenA';
import ScreenB from '../../screens/ScreenB';
import ScreenC from '../../screens/ScreenC';
import drawerContentComponents from './drawerContentComponents';


export const DrawerNav = createDrawerNavigator (
    {
        ScreenA:{ screen: ScreenA },
        ScreenB:{ screen: ScreenB },
        ScreenC:{ screen: ScreenC }
    },
    {
       contentComponent: drawerContentComponents
    });