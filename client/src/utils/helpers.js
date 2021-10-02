import {uploadImageToImgur} from "./imgur";

export const getStringFromFile = (files)=> {
    return new Promise((resolve) => {
        if (!files || !files[0]) {
            return;
        }
        const reader = new FileReader();
        const file = files[0];
        reader.readAsDataURL(file);
        reader.onload = () => {
            const image = reader.result;
            const result = image.slice(image.search(/[^,]*$/));
            resolve(result);
        };
    });
};

export const fileSelectorHandler = (setForm) => (files) => {
    getStringFromFile(files)
        .then((str) => uploadImageToImgur(str))
        .then((res) => {
            if (res.data.status === 200) {
                setForm({image: res.data.data.link});
            }
        });
};

export const getAddFieldsObject = (keysObj, valuesObj) => {
    const keysArr = Object.values(keysObj);
    const valuesArr = Object.values(valuesObj);
    return keysArr.reduce((result, key, idx) => ({ ...result, [key]: valuesArr[idx]}), {});
};
export const resetFormsStateHelper = (prevState) => {
    Object.keys(prevState).forEach(key => prevState[key] = '');
    return prevState;
};

export const getInitDynamicKeysForm = (company) => {
    if (company.addFields) {
        const array = Object.keys(company.addFields);
        return array.reduce((result, el, idx) => ({...result, [`itemKey${idx}`]: el}), {});
    }
    return {};
};
export const getInitDynamicValuesForm = (company) => {
    if (company.addFields) {
        const array = Object.values(company.addFields);
        return array.reduce((result, el, idx) => ({...result, [`itemValue${idx}`]: el}), {});
    }
    return {};
};
