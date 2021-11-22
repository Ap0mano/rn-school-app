import { MMKV } from 'react-native-mmkv'

const storage = new MMKV()


export const setData = async (key, value) => {
    try {
        // const jsonValue = JSON.stringify(value)adb device
        storage.set(key, JSON.stringify(value))
    } catch (e) {
        // saving error
    }
}

export const getData = async (key) => {
    try {
        const jsonUser = storage.getString(key) // { 'username': 'Marc', 'age': 21 }
        const userObject = JSON.parse(jsonUser)
        return userObject != null ? userObject : null;
    } catch (e) {
        // error while reading
    }
}

export const removeData = async (key) => {
    try {
        storage.delete(key)
    } catch (e) {
        // remove error
    }

    console.log('Done.')
}