import logo from './logo.svg';
import './App.css';
import {ChakraProvider} from '@chakra-ui/react'
import Cards from './component/card'
import Home from './component/home';
function App() {
  return (
    <ChakraProvider>
   
      <Home />
    
    </ChakraProvider>
  );
}

export default App;
