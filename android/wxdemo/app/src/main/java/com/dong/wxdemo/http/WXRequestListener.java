package com.dong.wxdemo.http;

/**
 * Description:
 * <p>
 * Author: dong
 * Date: 16/8/10
 */
public interface WXRequestListener {

    void onSuccess(WXHttpTask task);

    void onError(WXHttpTask task);
}
