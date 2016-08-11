package com.dong.wxdemo.http;

import android.os.Handler;

import java.io.IOException;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;
import okhttp3.ws.WebSocket;
import okhttp3.ws.WebSocketCall;
import okhttp3.ws.WebSocketListener;
import okio.Buffer;

/**
 * Description:
 * <p/>
 * Author: dong
 * Date: 16/8/11
 */
public class HotRefreshManager {
    private static final String TAG = "HotRefreshManager";
    private static HotRefreshManager hotRefreshInstance = new HotRefreshManager();
    private WebSocket mWebSocket = null;
    private Handler mHandler = null;

    private HotRefreshManager() {

    }

    public static HotRefreshManager getInstance() {
        return hotRefreshInstance;
    }

    public void setHandler(Handler handler) {
        mHandler = handler;
    }


    public boolean connect(String url) {
        OkHttpClient httpClient = new OkHttpClient();
        Request request = new Request.Builder().url(url).addHeader("sec-websocket-protocol", "echo-protocol").build();
        WebSocketCall.create(httpClient, request).enqueue(new WXWebSocketListener(url));
        return true;
    }

    public boolean disConnect() {
        if (mWebSocket != null) {
            try {
                mWebSocket.close(1000, "activity finished!");
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return true;
    }

    class WXWebSocketListener implements WebSocketListener {
        private String mUrl;

        WXWebSocketListener(String url) {
            mUrl = url;
        }

        @Override
        public void onOpen(WebSocket webSocket, Response response) {
            mWebSocket = webSocket;
        }

        @Override
        public void onFailure(IOException e, Response response) {
            mWebSocket = null;
        }

        @Override
        public void onMessage(ResponseBody message) throws IOException {
            //TODO
        }

        @Override
        public void onPong(Buffer payload) {

        }

        @Override
        public void onClose(int code, String reason) {
            mWebSocket = null;
        }
    }
}
