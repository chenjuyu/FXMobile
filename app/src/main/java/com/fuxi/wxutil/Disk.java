package com.fuxi.wxutil;

import android.content.Context;
import android.graphics.Bitmap;

import java.io.InputStream;

public class Disk implements ILocal {

    @Override
    public String getString(Context c, String path) {



        return SDCard.getString(c,path);
    }

    @Override
    public Bitmap getBitmap(Context c, String path) {
        return SDCard.getBitMap(c,path);
    }

    @Override
    public InputStream getFileInputStream(Context c, String path) {

        return SDCard.getFileStream(c,path);
    }
}
