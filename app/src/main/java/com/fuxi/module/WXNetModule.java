package com.fuxi.module;

import android.util.Log;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.fuxi.util.NetUtil;
import com.lzy.okgo.OkGo;
import com.lzy.okgo.callback.StringCallback;
import com.lzy.okgo.cookie.store.SPCookieStore;
import com.lzy.okgo.request.PostRequest;
import com.lzy.okgo.request.base.Request;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;

import java.util.HashMap;
import java.util.Map;

public class WXNetModule extends WXModule {

    public void fetch(boolean usepost, boolean usejson, final  String url, HashMap param, HashMap header, final JSCallback start, final JSCallback success, final JSCallback compelete, final JSCallback exception)
    {

        try {
            Request req = null;
            if (usepost) {
                req = OkGo.<String>post(url);
            } else {
                req = OkGo.<String>get(url);
            }
//          req.params(param);
            Object[] hkeys = header.keySet().toArray();
            for (Object key : hkeys) {
                req = req.headers(key + "", header.get(key) + "");
            }
            //强制使用cookie 访问，因为这个不是第一道请求
            if (!usejson) {
                Object[] keys = param.keySet().toArray();
                for (Object key : keys) {
                    req = req.params(key + "", param.get(key) + "");
                }
                req  =req.headers("Cookie",NetUtil.Cookie);
            } else {
                PostRequest preq = (PostRequest) req;
                JSONObject j = new JSONObject(param);
                preq.upJson(j.toJSONString());
                preq.headers("content-Type", "application/json");
                preq.headers("Cookie", NetUtil.Cookie);
            }




            req.execute(new StringCallback() {

                @Override
                public void onStart(Request<String, ? extends Request> request) {
                    super.onStart(request);
                    if (start != null)
                        start.invokeAndKeepAlive(null);
                }

                @Override
                public void onSuccess(com.lzy.okgo.model.Response<String> response) {
                    try {
                        String s = response.body();
                        Log.i("back", s);
//                        HashMap res=new HashMap();
//                        res.put("res",JSONObject.parse(s));
                        String cookie = response.headers().get("Set-Cookie");
//                        res.put("sessionid",cookie);
//                        if(success!=null)
//                            success.invoke(res);
                        s += "";
                        s = s.trim();
                        HashMap m = new HashMap();
                        if (s.startsWith("{")) {
                            Map maps = (Map) JSONObject.parse(s);
                            m.put("res", maps);
                        } else if (s.startsWith("[")) {
                            JSONArray ja = JSONObject.parseArray(s);
                            m.put("res", ja);
                        } else {
                            m.put("res", s);
                        }


                        m.put("sessionid", cookie+"");
                        success.invoke(m);
                    } catch (Exception e) {
                        if (exception != null)
                            exception.invoke(null);
                    }
                }

                @Override
                public void onError(com.lzy.okgo.model.Response<String> response) {
                    super.onError(response);
                    if (exception != null)
                        exception.invoke(null);
                }

                @Override
                public void onFinish() {
                    super.onFinish();
                    if (compelete != null)
                        compelete.invoke(null);
                }
            });


        } catch (Exception e) {
            if (exception != null)
                exception.invoke(null);
        }

    }
    /**
     *
     * @param url
     * @param param
     * @param header
     * @param start
     * @param success
     * @param compelete
     * @param exception
     */

    @JSMethod
    public void post(String url , HashMap param, HashMap header, final JSCallback start, final JSCallback success, final JSCallback compelete, final JSCallback exception)
    {
        this.fetch(true,false,url,param,header,start,success,compelete,exception);
    }

    @JSMethod
    public void postJson(String url , HashMap param, HashMap header, final JSCallback start, final JSCallback success, final JSCallback compelete, final JSCallback exception)
    {

        this.fetch(true,true,url,param,header,start,success,compelete,exception);
    }

    @JSMethod
    public void get(String url , HashMap param, HashMap header, final JSCallback start, final JSCallback success, final JSCallback compelete, final JSCallback exception)
    {
        this.fetch(false,false,url,param,header,start,success,compelete,exception);
    }












}
