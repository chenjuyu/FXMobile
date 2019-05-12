package com.fuxi.wxutil;

import android.content.Context;
import android.graphics.Bitmap;

import java.io.File;

import static com.fuxi.wxutil.SDCard.getBasePath;

public class Local {

    public static String getDiskBasePath(Context context){
        return  context.getExternalFilesDir("Caches")+"/";
    }

    public static String getString(Context c, String path)
    {
        return  getLocalManager(c).getString(c,path);
    }
    public static ILocal getLocalManager(Context c)
    {
//        return new Asset();
        if(isDiskExist(c))
        {
            return new Disk();
        }
        else
        {
            return new Asset();
        }

    }
    public static boolean isDiskExist(Context c)
    {
        String path= getBasePath(c);
        path+="/app/weexplus.json";
        File f=new File(path);
        return f.exists();
    }

    public static Bitmap getBitmap(Context c, String path)
    {
        return  getLocalManager(c).getBitmap(c,path);
    }
}
