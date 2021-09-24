const cmsURL = 'https://ia-cms.herokuapp.com/';
const ssoURL = 'https://singlesignonbackend.herokuapp.com/api/users/';

//----------CMS DE VIDEO----------------------------------------------------

//Endpoints de Peliculas
export const allMovies = async () =>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }
    try {
        const response = await fetch(cmsURL+'api/v1/public/data',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

//--------------------------------------------------------------------------

//----------SSO - LOGIN / REGISTER------------------------------------------

export const loginSSO = async (data) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch(ssoURL+'login',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

export const registroSSO = async (data) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    try {
        const response = await fetch(ssoURL+'register',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}

//--------------------------------------------------------------------------