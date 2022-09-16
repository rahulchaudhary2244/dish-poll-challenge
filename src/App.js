import './styles.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme';
import { SnackbarProvider } from 'notistack';
import LoginUserPage from './components/LoginUserPage';
import RegisterUserPage from './components/RegisterUserPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import DishesSelectionPage from './components/DishesSelectionPage';
import LeaderboardPage from './components/LeaderboardPage';
import DishState from './context/DishState';
import Protected from './components/Protected';

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <SnackbarProvider
                    dense
                    preventDuplicate
                    maxSnack={3}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    autoHideDuration={2000}
                >
                    <DishState>
                        <Routes>
                            <Route
                                exact
                                path="/login"
                                element={<LoginUserPage />}
                            />
                            <Route
                                exact
                                path="/register"
                                element={<RegisterUserPage />}
                            />
                            <Route
                                exact
                                path="/dishes"
                                element={
                                    <Protected
                                        Component={DishesSelectionPage}
                                    />
                                }
                            />
                            <Route
                                exact
                                path="/dishes/leaderboard"
                                element={
                                    <Protected Component={LeaderboardPage} />
                                }
                            />
                            <Route
                                path="/*"
                                element={<Navigate to="/login" replace />}
                            />
                        </Routes>
                    </DishState>
                </SnackbarProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
