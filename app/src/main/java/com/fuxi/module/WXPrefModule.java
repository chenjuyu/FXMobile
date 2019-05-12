package com.fuxi.module;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.support.v7.app.AppCompatActivity;

import com.fuxi.activity.WXPageActivity;
import com.fuxi.dao.ParamerDao;
import com.fuxi.vo.Paramer;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;



public class WXPrefModule extends WXModule {

    @JSMethod(uiThread = false)
    public String getString(String key)
    {
        ParamerDao paramerDao = new ParamerDao(this.mWXSDKInstance.getContext());

        System.out.println("getContext():"+this.mWXSDKInstance.getContext());

        Paramer ip = paramerDao.find(key);//"ip"
        System.out.println("ip的值:"+String.valueOf(ip));
        if (null == ip) {
            return "";
        }
       String s=ip.getValue();
        return s;

    }
    @JSMethod
    public void _SendN(List ls){

        finish(ls);
        mWXSDKInstance.destroy();  //关键点，不加会闪退 不然走 返回 函数的，会空，就会报错
    }
    public void finish(List ls)
    {

        WXPageActivity p= (WXPageActivity) mWXSDKInstance.getContext();
        p.exit(ls);

    }



}
