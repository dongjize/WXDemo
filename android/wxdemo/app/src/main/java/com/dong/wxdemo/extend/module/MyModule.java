package com.dong.wxdemo.extend.module;

import android.widget.Toast;

import com.taobao.weex.common.WXModule;
import com.taobao.weex.common.WXModuleAnno;

/**
 * Description:
 * <p/>
 * Author: dong
 * Date: 16/8/5
 */
public class MyModule extends WXModule {
    @WXModuleAnno(runOnUIThread = true)
    public void printLog(String msg) {
        Toast.makeText(mWXSDKInstance.getContext(), msg, Toast.LENGTH_SHORT).show();
    }
}
