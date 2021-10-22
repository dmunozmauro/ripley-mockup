import jwtDecode from 'jwt-decode';

/**
 * Guardar token en localStorage
 */
export const saveToken = (token) => {
    localStorage.setItem("token", token);
};

/**
 * Guardar username en localStorage
 */
export const saveUsername = (username) => {
    localStorage.setItem("username", username);
};

/**
 * Obtiene token desde localStorage
 */
export const getToken = () => {
    return localStorage.getItem("token");
};

/**
 * Obtiene username desde localStorage
 */
export const getUsername = () => {
    return localStorage.getItem("username");
};

/**
 * Elimina token en localStorage
 */
export const deleteToken = () => {
    localStorage.removeItem("token");
};

/**
 * Elimina username en localStorage
 */
export const deleteUsername = () => {
    localStorage.removeItem("username");
};

/**
 * Limpiar session localStorage
 */
export const clearSession = () => {
    deleteToken();
    deleteUsername();
};

/**
 * Validar session en localStorage
 */
export const validateSession = () => {
    return ((getToken() !== undefined && getToken() !== null) &&
        (getUsername() !== undefined && getUsername() !== null));
};

export const validateTokenExpiration = () => {

    console.log('validateTokenExpiration')

    const { exp } = jwtDecode(getToken().slice(6))

    if ((exp * 1000) > Date.now()) {
        return true
    }

    return false
}