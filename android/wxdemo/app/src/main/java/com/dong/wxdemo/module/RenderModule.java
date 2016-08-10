package com.dong.wxdemo.module;

import android.util.Log;

import com.taobao.weex.common.WXModule;
import com.taobao.weex.common.WXModuleAnno;

/**
 * Description:
 * <p/>
 * Author: dong
 * Date: 16/8/5
 */
public class RenderModule extends WXModule {
    @WXModuleAnno
    public void performClick() {
        Log.d("Render", "Render");
    }
}
