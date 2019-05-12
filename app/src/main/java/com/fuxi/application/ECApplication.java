package com.fuxi.application;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import android.app.Activity;
import android.app.Application;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.Environment;
import android.os.IBinder;
import com.fuxi.exception.CrashHandler;
import com.fuxi.module.WXNetModule;
import com.fuxi.module.WXPrefModule;
import com.fuxi.service.ECServiceManager;
import com.fuxi.service.IECManager;
import com.fuxi.util.Logger;

import com.fuxi.wxutil.DrawableLoader;
import com.fuxi.wxutil.PicassoImageAdapter;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.bridge.WXBridgeManager;
import com.taobao.weex.performance.WXAnalyzerDataTransfer;

/**
 * Title: ECApplication Description: 程序全局配置
 * 
 * @author LJ
 * 
 */
public class ECApplication extends Application {

    /** 缓存路径 */
    private static String cacheDir;
    private IECManager ecManager;
    private List<Activity> records = new ArrayList<Activity>();
    private static final String TAG = "ECApplication";
    private static ECApplication instance;

    @Override
    public void onCreate() {
        super.onCreate();


        WXBridgeManager.updateGlobalConfig("wson_on");
        WXEnvironment.setOpenDebugLog(true);
        WXEnvironment.setApkDebugable(true);

        WXSDKEngine.addCustomOptions("appName", "伏羲智能终端");
        WXSDKEngine.addCustomOptions("appGroup", "WXApp");

        InitConfig.Builder builder = new InitConfig.Builder();

        builder.setImgAdapter(new PicassoImageAdapter())
                .setDrawableLoader(new DrawableLoader());
             //   .setJSExceptionAdapter(new ExceptionAdapter())
              //  .setHttpAdapter(new WXHttpAdapter())
               // .setURIAdapter(new UriAdapter())
               // .setWebSocketAdapterFactory(new DefaultWebSocketAdapterFactory())

        InitConfig config = builder.build();
        WXSDKEngine.initialize(this, config);
        WXAnalyzerDataTransfer.isOpenPerformance = false;



        try {

            bindService(new Intent(ECApplication.this, ECServiceManager.class), new ECServiceConnection(), Context.BIND_AUTO_CREATE);
            initCacheDirPath();
            instance = this;
            CrashHandler.getInstance().init(this);

            WXSDKEngine.registerModule("pref", WXPrefModule.class);
            WXSDKEngine.registerModule("net", WXNetModule.class);

        } catch (Exception e) {
            Logger.e("ECApplication", e);
        }
    }

    /**
     * 获取Context
     * 
     * @return
     */
    public static ECApplication getInstance() {
        return instance;
    }

    public static String getCacheDirPath() {
        return cacheDir;
    }

    private void initCacheDirPath() {
        try {
            File f;
            if (Environment.getExternalStorageState().equals(Environment.MEDIA_MOUNTED)) {
                f = new File(Environment.getExternalStorageDirectory().getAbsolutePath() + File.separator + "fxpda" + File.separator + "cache");
                if (!f.exists()) {
                    f.mkdirs();
                }
            } else {
                f = getApplicationContext().getCacheDir();
            }
            cacheDir = f.getAbsolutePath();
        } catch (Exception e) {
            Logger.e("ECApplication", e);
        }
    }

    public IECManager getEcManager() {
        return ecManager;
    }

    private class ECServiceConnection implements ServiceConnection {

        @Override
        public void onServiceConnected(ComponentName name, IBinder service) {
            Logger.d(TAG, "onServiceConnected");
            ecManager = (IECManager) service;
        }

        @Override
        public void onServiceDisconnected(ComponentName name) {

        }
    }

    public void addActvity(Activity activity) {
        records.add(activity);
        Logger.d(TAG, "Current Acitvity Size :" + getCurrentActivitySize());
    }

    public void removeActvity(Activity activity) {
        records.remove(activity);
        Logger.d(TAG, "Current Acitvity Size :" + getCurrentActivitySize());
    }

    public void exit() {
        for (Activity activity : records) {
            activity.finish();
        }
    }

    public int getCurrentActivitySize() {
        return records.size();
    }
}
