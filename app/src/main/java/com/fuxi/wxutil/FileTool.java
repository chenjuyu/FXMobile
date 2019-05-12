package com.fuxi.wxutil;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;

import java.io.IOException;
import java.io.InputStream;

public class FileTool {

    public static Bitmap loadAssetImage(String src, Context context)
    {

        try {
            InputStream is = context.getAssets().open(src);
            Bitmap bitmap = BitmapFactory.decodeStream(is);
            return bitmap;
        }
        catch (IOException io)
        {
            return null;
        }

    }
}
