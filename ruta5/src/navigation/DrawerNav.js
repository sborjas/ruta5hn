import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import ScreenA from '../../screens/ScreenA';
import ScreenB from '../../screens/ScreenB';
import ScreenC from '../../screens/ScreenC';
import tipsViajero from '../../screens/tipsViajero';
import rutaGas from '../../screens/rutaGas';
import empresaExito from '../../screens/empresaExito';
import extranjeroHon from '../../screens/extranjeroHon';
import rutaTuristica from '../../screens/rutaTuristica';
import rutaCultural from '../../screens/rutaCultural';
import productosNos from '../../screens/productosNos';
import cartasaEditor from '../../screens/cartasaEditor';
import mapa from '../../screens/mapa';
import Contacto from '../../screens/Contacto';
import drawerContentComponents from './drawerContentComponents';


export const DrawerNav = createDrawerNavigator (
    
    {
        ScreenA:{ screen: ScreenA },
        ScreenB:{ screen: ScreenB },
        ScreenC:{ screen: ScreenC },
        tipsViajero:{ screen: tipsViajero },
        rutaGas:{ screen: rutaGas }, 
        empresaExito:{ screen: empresaExito }, 
        extranjeroHon:{ screen: extranjeroHon },
        rutaTuristica:{ screen: rutaTuristica },
        rutaCultural:{ screen: rutaCultural },
        productosNos:{ screen: productosNos },
        cartasaEditor:{ screen: cartasaEditor },
        mapa:{ screen: mapa },
        Contacto:{ screen: Contacto }

    },
    {
       contentComponent: drawerContentComponents
    });