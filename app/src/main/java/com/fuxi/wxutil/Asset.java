package com.fuxi.wxutil;

import android.content.Context;
import android.graphics.Bitmap;

import com.taobao.weex.utils.WXFileUtils;

import java.io.InputStream;

public class Asset implements ILocal {

    public String getString(Context c, String path)
    {
        return WXFileUtils.loadAsset(path,c);
    }


    public Bitmap getBitmap(Context c, String path)
    {
        return FileTool.loadAssetImage(path,c);
    }


    public InputStream getFileInputStream(Context c, String path)
    {
        try {
            InputStream inputStream = c.getAssets().open(path);
            return inputStream;
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
        return null;
    }

}
