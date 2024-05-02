import React from 'react';
import {createRoot} from 'react-dom/client';
import GlobalStyle from './styles/globalStyle';
import { render } from '@testing-library/react';
import Routes from './routes';

createRoot(
   
     document.getElementById('root')
   ).render( 
   <>
      <Routes /> 
      <GlobalStyle />
   </>, )

