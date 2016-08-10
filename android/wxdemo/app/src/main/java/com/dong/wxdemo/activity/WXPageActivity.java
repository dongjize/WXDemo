package com.dong.wxdemo.activity;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.BroadcastReceiver;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.support.v7.widget.Toolbar;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.alibaba.fastjson.JSONArray;
import com.dong.wxdemo.Constants;
import com.dong.wxdemo.R;
import com.dong.wxdemo.http.WXHttpManager;
import com.dong.wxdemo.http.WXHttpTask;
import com.dong.wxdemo.http.WXRequestListener;
import com.dong.wxdemo.util.ScreenUtil;
import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.appfram.navigator.IActivityNavBarSetter;
import com.taobao.weex.common.WXRenderStrategy;
import com.taobao.weex.utils.WXLogUtils;

import java.io.File;
import java.util.HashMap;

/**
 * Description:
 * <p>
 * Author: dong
 * Date: 16/8/9
 */
public class WXPageActivity extends WXBaseActivity implements IWXRenderListener, Handler.Callback {
    private static final String TAG = WXPageActivity.class.getSimpleName();
    private static Activity wxPageActivityInstance;
    private WXSDKInstance mInstance;
    private Handler mWXHandler;
    private BroadcastReceiver mReceiver;

    private String url = "http://" + Constants.IP + ":8081/js/index.js";
    private Uri mUri;
    private HashMap mConfigMap = new HashMap<String, Object>();
    private ViewGroup mContainer;
    private ProgressBar mProgressBar;
    private View mWAView;
    private Button mRefresh;
    private JSONArray mData;
    private int count = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_wxpage);
        setCurrentWxPageActivity(this);
        WXSDKEngine.setActivityNavBarSetter(new NavigatorAdapter());


        mUri = Uri.parse(url);

        if (mUri == null) {
            Toast.makeText(this, "the uri is empty!", Toast.LENGTH_SHORT).show();
            finish();
            return;
        }

        Log.e("TestScript_Guide mUri==", mUri.toString());
        initUIAndData();

        if (TextUtils.equals("http", mUri.getScheme()) || TextUtils.equals("https", mUri.getScheme())) {
            //      if url has key "_wx_tpl" then get weex bundle js
            String weexTpl = mUri.getQueryParameter(Constants.WEEX_TPL_KEY);
            String url = TextUtils.isEmpty(weexTpl) ? mUri.toString() : weexTpl;
            loadWXFromService(url);
//            startHotRefresh();
        } else {
//            loadWXfromLocal(false);
        }
        mInstance.onActivityCreate();

    }

    private void initUIAndData() {
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

//        actionBar.setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setTitle(mUri.toString().substring(mUri.toString().lastIndexOf(File.separator) + 1));

        mContainer = (ViewGroup) findViewById(R.id.container);
        mProgressBar = (ProgressBar) findViewById(R.id.progress);
        mWXHandler = new Handler(this);
        // TODO HotRefreshManager
        addOnListener();
    }

    private void loadWXFromService(final String url) {
        mProgressBar.setVisibility(View.VISIBLE);

        if (mInstance != null) {
            mInstance.destroy();
        }

        mInstance = new WXSDKInstance(this);
        mInstance.registerRenderListener(this);

        WXHttpTask httpTask = new WXHttpTask();
        httpTask.url = url;
        httpTask.requestListener = new WXRequestListener() {
            @Override
            public void onSuccess(WXHttpTask task) {
                Log.e(TAG, "into--[http:onSuccess] url:" + url);
                mInstance.render(TAG, mUri.toString(), null, null, ScreenUtil.getDisplayWidth(WXPageActivity.this),
                        ScreenUtil.getDisplayHeight(WXPageActivity.this), WXRenderStrategy.APPEND_ASYNC);
            }

            @Override
            public void onError(WXHttpTask task) {
                Log.e(TAG, "into--[http:onError]");
                mProgressBar.setVisibility(View.GONE);
                Toast.makeText(getApplicationContext(), "network error!", Toast.LENGTH_SHORT).show();
            }
        };
        WXHttpManager.getInstance().sendRequest(httpTask);

    }

    public Activity getCurrentWxPageActivity() {
        return wxPageActivityInstance;
    }

    public void setCurrentWxPageActivity(Activity activity) {
        wxPageActivityInstance = activity;
    }

    @Override
    public boolean handleMessage(Message msg) {
        return false;
    }

    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
        WXLogUtils.e("into--[onViewCreated]");
        if (mWAView != null && mContainer != null && mWAView.getParent() == mContainer) {
            mContainer.removeView(mWAView);
        }
        mWAView = view;
        mContainer.addView(view);
        mContainer.requestLayout();
        Log.d("WARenderListener", "renderSuccess");
    }

    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {
        mProgressBar.setVisibility(View.INVISIBLE);
    }

    @Override
    public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {
        mProgressBar.setVisibility(View.GONE);
    }

    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {
        mProgressBar.setVisibility(View.GONE);
        if (!TextUtils.isEmpty(errCode) && errCode.contains("|")) {
            String[] errCodeList = errCode.split("\\|");
            String code = errCodeList[1];
            String codeType = errCode.substring(0, errCode.indexOf("|"));

            if (TextUtils.equals("1", codeType)) {
                String errMsg = "codeType:" + codeType + "\n" + " errCode:" + code + "\n" + " ErrorInfo:" + msg;
                degradeAlert(errMsg);
                return;
            } else {
                Toast.makeText(getApplicationContext(), "errCode:" + errCode + " Render ERROR:" + msg, Toast.LENGTH_SHORT).show();
            }
        }
    }

    private void degradeAlert(String errMsg) {
        new AlertDialog.Builder(this)
                .setTitle("Downgrade success")
                .setMessage(errMsg)
                .setPositiveButton("OK", null)
                .show();

    }

    private void addOnListener() {

    }

    private class NavigatorAdapter implements IActivityNavBarSetter {

        @Override
        public boolean push(String param) {
            return false;
        }

        @Override
        public boolean pop(String param) {
            return false;
        }

        @Override
        public boolean setNavBarRightItem(String param) {
            return false;
        }

        @Override
        public boolean clearNavBarRightItem(String param) {
            return false;
        }

        @Override
        public boolean setNavBarLeftItem(String param) {
            return false;
        }

        @Override
        public boolean clearNavBarLeftItem(String param) {
            return false;
        }

        @Override
        public boolean setNavBarMoreItem(String param) {
            return false;
        }

        @Override
        public boolean clearNavBarMoreItem(String param) {
            return false;
        }

        @Override
        public boolean setNavBarTitle(String param) {
            return false;
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (mInstance != null) {
            mInstance.onActivityDestroy();
        }
        //        TopScrollHelper.getInstance(getApplicationContext()).onDestory();
        mWXHandler.obtainMessage(Constants.HOT_REFRESH_DISCONNECT).sendToTarget();
//        unregisterBroadcastReceiver();
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (mInstance != null) {
            mInstance.onActivityResume();
        }
    }
}
