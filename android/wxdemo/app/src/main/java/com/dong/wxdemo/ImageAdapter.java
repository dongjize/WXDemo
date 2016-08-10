package com.dong.wxdemo;

import android.text.TextUtils;
import android.widget.ImageView;

import com.squareup.picasso.Picasso;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKManager;
import com.taobao.weex.adapter.IWXImgLoaderAdapter;
import com.taobao.weex.common.WXImageStrategy;
import com.taobao.weex.dom.WXImageQuality;

/**
 * Description:
 * <p/>
 * Author: dong
 * Date: 16/8/5
 */
public class ImageAdapter implements IWXImgLoaderAdapter {
    @Override
    public void setImage(final String url, final ImageView view, WXImageQuality quality, WXImageStrategy strategy) {
        WXSDKManager.getInstance().postOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (view != null && view.getLayoutParams() != null) {
                    if (TextUtils.isEmpty(url)) {
                        view.setImageBitmap(null);
                    } else {
                        String temp = url;
                        if (url.startsWith("//")) {
                            temp = "http:" + url;
                        }
                        if (view.getLayoutParams().width > 0 && view.getLayoutParams().height > 0) {
                            Picasso.with(WXEnvironment.getApplication()).load(temp).into(view);
                        }
                    }
                }
            }
        }, 0L);
    }
}
