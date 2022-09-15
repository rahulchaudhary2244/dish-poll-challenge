import './styles.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
import { SnackbarProvider } from 'notistack';
import Login from './components/Login';
import Register from './components/Register';
import { Routes, Route } from 'react-router-dom';
import DishesPage from './components/DishesPage';
import LeaderboardPage from './components/LeaderboardPage';
import DishState from './context/DishState';

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
                    <DishState>
                        <Routes>
                            <Route exact path="/login" element={<Login />} />
                            <Route
                                exact
                                path="/register"
                                element={<Register />}
                            />
                            <Route
                                exact
                                path="/dishes"
                                element={<DishesPage />}
                            />
                            <Route
                                exact
                                path="/dishes/leaderboard"
                                element={<LeaderboardPage />}
                            />
                        </Routes>
                    </DishState>
                </SnackbarProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
