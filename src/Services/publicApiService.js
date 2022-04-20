import axios from 'axios';

// PARA CENTRALIZAR LOS PARAMETROS DE LOS HEADERS, ETC
const config = {
  Group: 163,
};

export const Get = async (URL, id = null, Authorization = '') => {
  const url = id ? `${URL}/${id}` : URL;
  const config2 = Authorization
    ? {
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + Authorization,
      },
    }
    : { headers: { 'Content-Type': 'application/json' } };
  try {
    const response = await axios(url, config2);
    return response.data;
  } catch (error) {
    console.log('Error GET public', error);
    return error;
  }
};

// PETICION POST QUE RECIBE EL PARAMETRO DE LA URL Y EL BODY
export const Post = async (url, body) => {
  try {
    const response = await axios({
      method: 'post',
      url: url,
      config,
      data: body,
    });
    return response.data;
  } catch (err) {
    console.log('Error POST public', err);
    return err;
  }
};
