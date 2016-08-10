package com.dong.wxdemo.activity;

import android.graphics.Rect;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.view.ViewGroup;

import com.dong.wxdemo.util.ScreenUtil;
import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;

import java.util.HashMap;
import java.util.Map;

/**
 * Description:
 * <p>
 * Author: dong
 * Date: 16/8/8
 */
public class AbstractWeexActivity extends AppCompatActivity implements IWXRenderListener {
    private static final String TAG = "AbstractWeexActivity";
    private WXSDKInstance mWXSDKInstance;
    private ViewGroup mContainer;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        createWeexInstance();
        mWXSDKInstance.onActivityCreate();
    }

    protected void createWeexInstance() {
        destroyWeexInstance();

        Rect outRect = new Rect();
        getWindow().getDecorView().getWindowVisibleDisplayFrame(outRect);

        mWXSDKInstance = new WXSDKInstance(this);
        mWXSDKInstance.registerRenderListener(this);
    }

    protected final void setContainer(ViewGroup container) {
        this.mContainer = container;
    }

    protected final ViewGroup getContainer() {
        return this.mContainer;
    }

    protected void renderPage(String template, String source) {
        renderPage(template, source, null);
    }

    protected void renderPage(String template, String source, String jsonInitData) {
        Map<String, Object> options = new HashMap<>();
        options.put(WXSDKInstance.BUNDLE_URL, source);
        /**
         * /**
         * WXSample 可以替换成自定义的字符串，针对埋点有效。
         * template 是.we transform 后的 js文件。
         * option 可以为空，或者通过option传入 js需要的参数。例如bundle js的地址等。
         * jsonInitData 可以为空。
         * width 为-1 默认全屏，可以自己定制。
         * height =-1 默认全屏，可以自己定制。
         */
        mWXSDKInstance.render(getPageName(), template, options, jsonInitData,
                ScreenUtil.getDisplayWidth(this), ScreenUtil.getDisplayHeight(this),
                WXRenderStrategy.APPEND_ASYNC);
    }

    protected void renderPageByUrl(String url) {
        renderPage(url, null);
    }

    protected void renderPageByUrl(String url, String jsonInitData) {
        Map<String, Object> options = new HashMap<>();
        options.put(WXSDKInstance.BUNDLE_URL, url);
        mWXSDKInstance.renderByUrl(
                getPageName(), url, options, jsonInitData, ScreenUtil.getDisplayWidth(this),
                ScreenUtil.getDisplayHeight(this), WXRenderStrategy.APPEND_ASYNC);
    }

    protected void destroyWeexInstance() {
        if (mWXSDKInstance != null) {
            mWXSDKInstance.registerRenderListener(null);
            mWXSDKInstance.destroy();
            mWXSDKInstance = null;
        }
    }


    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
        if (mContainer != null) {
            mContainer.removeAllViews();
            mContainer.addView(view);
        }
    }

    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {

    }

    @Override
    public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {

    }

    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {

    }

    protected String getPageName() {
        return TAG;
    }

    @Override
    protected void onStart() {
        super.onStart();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityStart();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityResume();
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityPause();
        }
    }

    @Override
    protected void onStop() {
        super.onStop();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityStop();
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.onActivityDestroy();
        }
    }

}
