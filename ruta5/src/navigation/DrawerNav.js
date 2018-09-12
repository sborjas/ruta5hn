import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import ScreenA from '../../screens/ScreenA';
import ScreenB from '../../screens/ScreenB';
import ScreenC from '../../screens/ScreenC';
import Videos from '../../screens/Videos';
import Aliados from '../../screens/Aliados';
import Contacto from '../../screens/Contacto';
import drawerContentComponents from './drawerContentComponents';


export const DrawerNav = createDrawerNavigator (
    
    {
        ScreenA:{ screen: ScreenA },
        ScreenB:{ screen: ScreenB },
        ScreenC:{ screen: ScreenC },
        Videos:{ screen: Videos },
        Aliados:{ screen: Aliados }, 
        Contacto:{ screen: Contacto }

    },
    {
       contentComponent: drawerContentComponents
    });