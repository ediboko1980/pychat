// webpack global consts
declare const PYCHAT_CONSTS: any;

const _WS_API_URL = PYCHAT_CONSTS.WS_API_URL;
const _STATIC_API_URL = PYCHAT_CONSTS.STATIC_API_URL;
const _XHR_API_URL = PYCHAT_CONSTS.XHR_API_URL;
const _IS_DEBUG = PYCHAT_CONSTS.IS_DEBUG;
const _GOOGLE_OAUTH_2_CLIENT_ID = PYCHAT_CONSTS.GOOGLE_OAUTH_2_CLIENT_ID;
const _FACEBOOK_APP_ID = PYCHAT_CONSTS.FACEBOOK_APP_ID;
const _RECAPTCHA_PUBLIC_KEY = PYCHAT_CONSTS.RECAPTCHA_PUBLIC_KEY;
const _MANIFEST = PYCHAT_CONSTS.MANIFEST;
export const GITHUB_URL = 'https://github.com/Deathangel908/pychat';
export const PING_CLOSE_JS_DELAY = 5000;
export const CONNECTION_RETRY_TIME = 5000;
export const CLIENT_NO_SERVER_PING_CLOSE_TIMEOUT = 313000;
export {_WS_API_URL as WS_API_URL};
export {_STATIC_API_URL as STATIC_API_URL};
export {_XHR_API_URL as XHR_API_URL};
export {_IS_DEBUG as IS_DEBUG};
export {_FACEBOOK_APP_ID as FACEBOOK_APP_ID};
export {_RECAPTCHA_PUBLIC_KEY as RECAPTCHA_PUBLIC_KEY};
export {_GOOGLE_OAUTH_2_CLIENT_ID as GOOGLE_OAUTH_2_CLIENT_ID};
export {_MANIFEST as MANIFEST};
export const RESPONSE_SUCCESS = 'ok';

export const CHROME_EXTENSION_ID = 'cnlplcfdldebgdlcmpkafcialnbopedn';
export const CHROME_EXTENSION_URL = 'https://chrome.google.com/webstore/detail/pychat-screensharing-exte/' + CHROME_EXTENSION_ID
export const PASTED_IMG_CLASS = 'B4j2ContentEditableImg';
export const MESSAGES_PER_SEARCH = 10;
export const CONNECTION_ERROR = `Connection error`;
export const SEND_CHUNK_SIZE = 16384;
export const READ_CHUNK_SIZE = SEND_CHUNK_SIZE * 64;
export const MAX_BUFFER_SIZE = 256;
export const MAX_ACCEPT_FILE_SIZE_WO_FS_API = Math.pow(2, 28); // 256 MB