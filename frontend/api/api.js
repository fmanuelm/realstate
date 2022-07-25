import AsyncStorage from '@react-native-community/async-storage';

const url = "http://192.168.0.101:3003";
export const login_API = async (dataToSend) => {
    try {
        let login_url = `${url}/auth/login`;
        const response = await fetch(login_url,
            {
                method: 'POST',
                body: JSON.stringify(dataToSend),
                headers: {
                  'Content-Type': 'application/json',
                }
            });
        const data = await response.json();
        return data;
    }
    catch(err)
    {
        return err;
    }

}
export const register_API = async (dataToSend) => {
    try {
        let register_url = `${url}/auth/register`;
        const response = await fetch(register_url,
            {
                method: 'POST',
                body: JSON.stringify(dataToSend),
                headers: {
                  'Content-Type': 'application/json',
                }
            });
        const data = await response.json();
        return data;
    }
    catch(err)
    {
        return err;
    }
}
export const getUserDetails_API = async (dataToSend) => {
    try {
        let userDetails_url = `${url}/auth/userdetails`;
        const token = AsyncStorage.getItem('token');
        
        const response = await fetch(userDetails_url,
        {
            method: 'POST',
            body: JSON.stringify(dataToSend),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        const data = await response.json();
        console.log("here inside api");
        console.log(data);
        return data;
    }
    catch(err) 
    {

    }
}

export const getUserWallet_API = async (dataToSend) =>
{
    try {
        const token = AsyncStorage.getItem('token');

        let userwallet_url = `${url}/wallet/user_wallet`;
        const response = await fetch(userwallet_url,
            {
                method: 'POST',
                body: JSON.stringify(dataToSend),
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`
                }
            });
        const data = await response.json();
        return data;
    }
    catch (err)
    {
        return err;
    }
}

const addUserWalletBalance = ()  =>
{

}

