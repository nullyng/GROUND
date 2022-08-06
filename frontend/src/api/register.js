import { apiInstance } from "api";

const api = apiInstance();

function signUp(info, success, fail) {
  api.post(`/user/signUp`, info).then(success).catch(fail);
}

function idDupCheck(id, success, fail) {
  api.get(`/user/isUsedUsername`, id).then(success).catch(fail);
}

function emailDupCheck(email, success, fail) {
  api.get(`/user/isUsedEmail`, email).then(success).catch(fail);
}

function emailAuth(email, success, fail) {
  api.get(`/user/emailAuth`, email).then(success).catch(fail);
}

function nicknameDupCheck(nickname, success, fail) {
  api.get(`/user/isUsedNickname`, nickname).then(success).catch(fail);
}

export { signUp, idDupCheck, emailDupCheck, emailAuth, nicknameDupCheck };
