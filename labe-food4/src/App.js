import {Router} from './routes'
import { ChakraProvider } from '@chakra-ui/react'


const App = () => {
  return (
    <ChakraProvider>
       <Router />
    </ChakraProvider>
  );
}

export default App;
