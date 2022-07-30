import {getRequest} from "@/utils/request";

export function getCodeImg() {
    return getRequest('/auth/verifyCode', null);
}
