import {getRequest} from "@/utils/request";

export function getCodeImg() {
    return getRequest('/a/auth/verifyCode', null);
}
