package com.fuxi.wxutil;

import android.content.Context;
import android.graphics.Bitmap;

import java.io.InputStream;

public interface ILocal {

    public String getString(Context c, String path);



    public Bitmap getBitmap(Context c, String path);

    public InputStream getFileInputStream(Context c, String path);

}
