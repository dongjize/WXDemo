package com.dong.wxdemo;

import android.app.Application;

import com.dong.wxdemo.component.MyViewComponent;
import com.dong.wxdemo.component.RichTextComponent;
import com.dong.wxdemo.module.MyModule;
import com.dong.wxdemo.module.RenderModule;
import com.dong.wxdemo.module.WXEventModule;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;

/**
 * Description:
 * <p/>
 * Author: dong
 * Date: 16/8/5
 */
public class WXApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        WXSDKEngine.addCustomOptions("appName", "WXDemo");
        InitConfig config = new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build();
        WXSDKEngine.initialize(this, config);

        try {
            WXSDKEngine.registerModule("render", RenderModule.class);
            WXSDKEngine.registerModule("event", WXEventModule.class);
            WXSDKEngine.registerModule("MyModule", MyModule.class);

            WXSDKEngine.registerComponent("MyView", MyViewComponent.class);
            WXSDKEngine.registerComponent("RichText", RichTextComponent.class);
        } catch (WXException e) {
            e.printStackTrace();
        }
    }

}
