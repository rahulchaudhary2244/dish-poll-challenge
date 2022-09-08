import './styles.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
import { SnackbarProvider } from 'notistack';

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <SnackbarProvider
                    dense
                    preventDuplicate
                    maxSnack={3}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    autoHideDuration={3000}
                >
                    <div>hello</div>
                </SnackbarProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
