import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import GlobalStyle from './globalStyle';
import { render } from '@testing-library/react';

createRoot(
   
     document.getElementById('root')
   ).render( 
   <>
      <App /> <GlobalStyle />
   </>, )

