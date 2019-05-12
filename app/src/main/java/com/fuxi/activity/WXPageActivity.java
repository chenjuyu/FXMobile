package com.fuxi.activity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;

import android.os.Handler;
import android.os.Message;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.view.WindowManager;
import android.widget.FrameLayout;

import com.alibaba.fastjson.JSONObject;
import com.fuxi.application.ECApplication;
import com.fuxi.main.R;
import com.fuxi.wxutil.Weex;
import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;
import com.taobao.weex.utils.WXFileUtils;
import com.taobao.weex.utils.WXUtils;

import java.io.File;
import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
//AppCompatActivity
public class WXPageActivity extends AppCompatActivity {
    public WXSDKInstance mWXSDKInstance;
    private FrameLayout mContainer;
    private Handler mHandler;
    private ECApplication application;
    private String ActivityName=this.getClass().getName();
    String   goodsId,deptId;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_wxpage);
       // getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS,WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);

        mContainer = (FrameLayout) findViewById(R.id.pagecontent);

        Bundle bundle= this.getIntent().getExtras();
         if(bundle !=null){
             goodsId = bundle.getString("goodsId");
             deptId = bundle.getString("deptId");
         }


        mWXSDKInstance = new WXSDKInstance(this);
       // mWXSDKInstance.onActivityCreate();
        mWXSDKInstance.registerRenderListener(new IWXRenderListener() {
            @Override
            public void onViewCreated(WXSDKInstance wxsdkInstance, View view) {
                if (mContainer != null) {
                    mContainer.addView(view);
                }
            }

            @Override
            public void onRenderSuccess(WXSDKInstance wxsdkInstance, int i, int i1) {

                Map<String,Object> p=new HashMap<>();
                p.put("ActivityName",ActivityName);
                p.put("GoodsID",goodsId);
                p.put("DeptID",deptId);//"007"
                p.put("onLineId","0000-0000");
                p.put("userId","1");
                mWXSDKInstance.fireGlobalEventCallback("onPageInit",p);
                mWXSDKInstance.onActivityCreate();



            }

            @Override
            public void onRefreshSuccess(WXSDKInstance wxsdkInstance, int i, int i1) {
            }

            @Override
            public void onException(WXSDKInstance wxsdkInstance, String s, String s1) {
            }
        });


        // 在渲染前先要保证WXSDKEngine已经完成了初始化
        if (WXSDKEngine.isInitialized()) {
            startRender();
        } else {
            mHandler = new Handler() {
                @Override
                public void handleMessage(Message msg) {
                    if (msg.what == 0) {
                        Log.i("Main", "WXSDKEngine.isInitialized: " + WXSDKEngine.isInitialized());
                        if (WXSDKEngine.isInitialized()) {
                            startRender();
                        } else {
                            msg = mHandler.obtainMessage(0);
                            mHandler.sendMessageDelayed(msg, 100);
                        }
                    }
                }
            };
            Message msg = mHandler.obtainMessage(0);
            mHandler.sendMessageDelayed(msg, 100);
        }
        Log.i("Main", "onCreate over");

    }

    /**
     * 开始执行渲染
     */
    private void startRender() {
        String source="app/multiselect.js";
        String template= Weex.loadLocal(source, this); //"app/multiselect.js"  得到vue 框架


        Map<String, Object> options = new HashMap<>();
        options.put(WXSDKInstance.BUNDLE_URL, Weex.getRelativeUrl(source,mWXSDKInstance));

        try {
            String banner = WXUtils.getBundleBanner(template);
            JSONObject jsonObj = JSONObject.parseObject(banner);
            String digest = null;
            if (jsonObj != null) {
                digest = jsonObj.getString(com.taobao.weex.common.Constants.CodeCache.BANNER_DIGEST);
            }
            if (digest != null) {
                options.put(com.taobao.weex.common.Constants.CodeCache.DIGEST, digest);
            }
        } catch (Throwable t) {}

        String path = WXEnvironment.getFilesDir(getApplicationContext());
        path += File.separator;
        path += com.taobao.weex.common.Constants.CodeCache.SAVE_PATH;
        path += File.separator;
        options.put(com.taobao.weex.common.Constants.CodeCache.PATH, path);

    // WXFileUtils.loadAsset(url, this)  "app/"
        mWXSDKInstance.setTrackComponent(true);
        mWXSDKInstance.render("Main",template,
                options, null, WXRenderStrategy.APPEND_ASYNC);
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
        if(mWXSDKInstance != null) {
            mWXSDKInstance.onActivityPause();
        }
    }

    @Override
    protected void onStop() {
        super.onStop();
        if(mWXSDKInstance != null) {
            mWXSDKInstance.onActivityStop();
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if(mWXSDKInstance != null) {
            mWXSDKInstance.onActivityDestroy();
        }
    }

    @Override
    public void finish() {
        super.finish();
        if (mWXSDKInstance != null) {
            mWXSDKInstance.fireGlobalEventCallback("onDestory",null);}
    }


    public void exit(List ls){
        System.out.println("回到Activity的方法中了");
        Intent inte = new Intent();
        inte.putExtra("datas", (Serializable) ls);
        setResult(1, inte);
        finish();
    }



    }


