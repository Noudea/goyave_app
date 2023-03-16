import {createContext, useContext, useReducer} from 'react';

const initialState = {
  user: null,
  isAuthenticated: true,
  accessToken: null,
  refreshToken: null,
};

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...initialState,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    case 'LOGOUT':
      return {
        ...initialState,
        user: null,
        isAuthenticated: action.payload.isAuthenticated,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    case 'REFRESH':
      return {
        ...initialState,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    default:
      return state;
  }
};

const AuthFactory = dispatch => ({
  login: async ({email, password}) => {
    try {
      const data = {
        user: {
          email: 'albus.dumbledor@hogwart.com',
          firstName: 'Albus',
          lastName: 'Dumbledor',
        },
      };
      dispatch({
        type: 'LOGIN',
        payload: {
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          isAuthenticated: true,
        },
      });
      return data;
    } catch (error) {
      return error;
    }
  },
  logout: async () => {
    try {
      dispatch({
        type: 'LOGOUT',
        payload: {
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
        },
      });
    } catch (error) {
      return error;
    }
  },
});

const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{state, ...AuthFactory(dispatch)}}>
      {children}
    </AuthContext.Provider>
  );
};

// --------------------------------------------------------------------------
// HOOK :
// --------------------------------------------------------------------------
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth muse be used inside a AuthProvider');
  }
  return context;
};

export {AuthProvider, useAuth};
