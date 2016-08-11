package com.dong.wxdemo.extend.component;

import android.view.View;
import android.widget.TextView;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXDomPropConstant;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXComponentProp;
import com.taobao.weex.ui.component.WXVContainer;

/**
 * Description:
 * <p/>
 * Author: dong
 * Date: 16/8/5
 */
public class MyViewComponent extends WXComponent {
    public MyViewComponent(WXSDKInstance instance, WXDomObject dom, WXVContainer parent, boolean isLazy) {
        super(instance, dom, parent, isLazy);
    }

    @Override
    protected void initView() {
        super.initView();
    }

    @Override
    public View getView() {
        return super.getView();
    }

    @WXComponentProp(name = WXDomPropConstant.WX_ATTR_VALUE)
    public void setMyViewValue(String value) {
        ((TextView) mHost).setText(value);
    }
}
