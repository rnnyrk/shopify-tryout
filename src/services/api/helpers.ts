import { isBrowser } from 'services/isBrowser';

export const getUrlParamsObject = () => {
  if (isBrowser) {
    const search = window.location.search.substring(1);

    if (search === '') {
      return {};
    }
    const params = JSON.parse(
      '{"' +
        decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +
        '"}',
    );

    return params;
  }

  return {};
};
