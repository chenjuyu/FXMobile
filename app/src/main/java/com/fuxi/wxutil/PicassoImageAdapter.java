package com.fuxi.wxutil;

import android.app.Activity;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import com.fuxi.wxutil.Picture;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.text.TextUtils;
import android.util.Base64;
import android.widget.ImageView;

import com.bumptech.glide.Glide;
import com.fuxi.activity.WXPageActivity;
import com.fuxi.application.ECApplication;
import com.squareup.picasso.Callback;
import com.squareup.picasso.Picasso;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.adapter.IWXImgLoaderAdapter;
import com.taobao.weex.common.WXImageStrategy;
import com.taobao.weex.dom.WXImageQuality;

import java.util.HashMap;

import static com.fuxi.wxutil.Local.getBitmap;

public class PicassoImageAdapter implements IWXImgLoaderAdapter {

    static HashMap<String,Drawable> placeholders=new HashMap<>();

    public PicassoImageAdapter() {
    }
    @Override
    public void setImage(final String url, final ImageView view,
                         final WXImageQuality quality, final WXImageStrategy strategy) {
        if(view==null||view.getLayoutParams()==null){
            return;
        }
        if (TextUtils.isEmpty(url)) {
            view.setImageBitmap(null);
            if(strategy==null||strategy.placeHolder==null)
                return;
        }
        String temp = url;

        if (view.getLayoutParams().width <= 0 || view.getLayoutParams().height <= 0) {
            return;
        }

        if(view.getContext() instanceof WXPageActivity)
        {
            WXPageActivity a= (WXPageActivity)view.getContext();
            temp=Weex.getRelativeUrl(url,a.mWXSDKInstance);
        }
        if(temp.startsWith("http"))
        {
            loadHttp(temp,view,quality,strategy);
        }
        else
        {
            loadLocal(temp,view,quality,strategy);
        }

    }

    public  void loadLocal(String url,final ImageView view,
                           WXImageQuality quality, final WXImageStrategy strategy) {
        Drawable pladrawable = null;
        if (!TextUtils.isEmpty(strategy.placeHolder)) {


            if (placeholders.containsKey(strategy.placeHolder)) {
                pladrawable = placeholders.get(strategy.placeHolder);
            } else {
                if (strategy.placeHolder != null) {
//                  String placeholder=strategy.placeHolder.replace("root:",Weex.baseurl);
                    WXPageActivity a = (WXPageActivity) view.getContext();
                    String placeholder = Weex.getRelativeUrl(strategy.placeHolder, a.mWXSDKInstance);
//                  Bitmap bmx= FileTool.loadAssetImage(placeholder,((Activity)view.getContext()).getApplicationContext());
                    Bitmap bmx = getBitmap(((Activity) view.getContext()).getApplicationContext(), placeholder);
                    pladrawable = new BitmapDrawable(bmx);
                    placeholders.put(strategy.placeHolder, pladrawable);
                }

            }
        }
        view.setImageDrawable(pladrawable);
        if (url.toLowerCase().contains(".gif")) {
//          Glide.with((Activity)view.getContext()).load()
            Bitmap bm = getBitmap(((Activity) view.getContext()).getApplicationContext(), url);


            boolean exist = Local.isDiskExist(view.getContext());
            if (exist) {
                url = "file:///" + Local.getDiskBasePath(view.getContext()) + url;
            } else {

                url = "file:///android_asset/" + url;
            }
            Glide
                    .with(ECApplication.getInstance())
                    .asGif()
                    .load(url)
                    .into(view);

            return;
        }
        Bitmap bm = getLocalBitmap(url);
        if (bm != null)
            view.setImageBitmap(bm);
    }

    public static Bitmap getLocalBitmap(String url){
        if(url.startsWith(Const.PREFIX_SDCARD))
        {
            url=url.replace(Const.PREFIX_SDCARD,"");
            Bitmap  bm= Picture.getBitmap(url);

            return bm;
        }
        url=Weex.getSingleRealUrl(url);
        Bitmap bm=null;
        if(url.startsWith(Const.PREFIX_BASE64))
        {
            url=url.replace(Const.PREFIX_BASE64,"");
            bm= PicassoImageAdapter.base64ToBitmap(url);
        }
        else
        {
            bm= FileTool.loadAssetImage(url,WXEnvironment.getApplication().getApplicationContext());
        }
        return bm;
    }

    public static Bitmap base64ToBitmap(String base64Data) {
        byte[] bytes = Base64.decode(base64Data, Base64.DEFAULT);
        return BitmapFactory.decodeByteArray(bytes, 0, bytes.length);
    }

    public  void loadHttp(final String url,final ImageView view,
                          WXImageQuality quality, final WXImageStrategy strategy)
    {
        Drawable pladrawable=null;
        if(!TextUtils.isEmpty(strategy.placeHolder)){


            if(placeholders.containsKey(strategy.placeHolder))
            {
                pladrawable=placeholders.get(strategy.placeHolder);
            }
            else
            {
                if(strategy.placeHolder!=null)
                {
                    WXPageActivity a= (WXPageActivity)view.getContext();
                    String  placeholder=Weex.getRelativeUrl(strategy.placeHolder,a.mWXSDKInstance);
//          String placeholder=strategy.placeHolder.replace("root:",Weex.baseurl);
                    placeholder=placeholder.replace(Weex.getBaseUrl(a.mWXSDKInstance),"app/");
                    Bitmap bm= getBitmap(((Activity)view.getContext()).getApplicationContext(),placeholder);
                    pladrawable =new BitmapDrawable(bm);
                    placeholders.put(strategy.placeHolder,pladrawable);
                }

            }
        }

        if(url.toLowerCase().contains(".gif"))
        {
            Glide
                    .with((Activity)view.getContext())

                    .asGif()
//                  .placeholder(pladrawable)
                    .load(url)
//                  .asGif()
//                  .placeholder(pladrawable)
//                  .diskCacheStrategy(DiskCacheStrategy.SOURCE)
                    .into(view);

            return;
        }

        Picasso.with(WXEnvironment.getApplication())
                .load(url)
                .placeholder(pladrawable)
                .transform(new BlurTransformation(strategy.blurRadius))
                .into(view, new Callback() {
                    @Override
                    public void onSuccess() {
                        if(strategy.getImageListener()!=null){
                            strategy.getImageListener().onImageFinish(url,view,true,null);
                        }


                    }

                    @Override
                    public void onError() {
                        if(strategy.getImageListener()!=null){
                            strategy.getImageListener().onImageFinish(url,view,false,null);
                        }
                    }
                });



    }

}
