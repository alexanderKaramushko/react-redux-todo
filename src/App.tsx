import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './components/themes/default';
import GlobalStyle from './components/themes/GlobalStyle';
import AddTodo from './containers/AddTodo';
import Main from './components/organisms/Main';
import Footer from './components/organisms/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      	<>
			<GlobalStyle />
			<AddTodo />
			<Main />
			<Footer />
		</>
    </ThemeProvider>
  );
};

export default App;
