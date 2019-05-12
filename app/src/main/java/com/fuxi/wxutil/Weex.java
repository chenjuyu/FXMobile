package com.fuxi.wxutil;

import android.content.Context;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.utils.WXFileUtils;

import org.json.JSONObject;

public class Weex {

    public static String basedir;



    public void init(String basedir){
        Weex.basedir=basedir;


    }

    public static String loadLocal(String path, Context c)
    {
//        String px= SDCard.getBasePath(c);
//        String s= WXFileUtils.loadAsset(path, c);
        String appboard=loadAppboard(c);
        String s= Local.getString(c,path);
        if(!s.startsWith("// { \"framework\": \"Vue\"}"))
            s="// { \"framework\": \"Vue\"}\n"+s;
        return appboard+s;
    }
    public static String schema(Context c)
    {
        return config(c).optString("schema");
    }

    public static String loadAppboard(Context c)
    {
        String path=config(c).optString("appBoard");
        path=getLocalRootPath(path);
        String s= Local.getString(c,path);
        return s;
    }


    public static JSONObject config(Context c) {
        String s = WXFileUtils.loadAsset("app/weexplus.json", c);

        try {
            JSONObject j = new JSONObject(s);
            return j;
        } catch (Exception var3) {
            return null;
        }
    }

    public static String getLocalRootPath(String path)
    {
        path=path.replace("root:","app/");
        return path;
    }


    public static String getBaseUrl(WXSDKInstance instance)
    {
        if(instance==null)
            return "";
        return  getBaseUrl(instance.getBundleUrl());
    }

    public static String getBaseUrl(String  url)
    {

        String baseurl="";
        String s= url;

        if(s.startsWith("http"))
        {
            String x[]=url.split("\\/");

            if(x.length>3)
            {
                String res= x[0]+"//"+x[2]+"/"+Weex.basedir;
                if(!res.endsWith("/"))
                    res+="/";
                baseurl=res;
            }
        }
        else
        {
            baseurl="app/";

        }
        return baseurl;
    }

    public static String getRelativeUrl(String url, WXSDKInstance  instance)
    {
        if(url.startsWith("sdcard:"))
        {
            return url;
        }
        if(url.startsWith("http"))
        {
            return url;
        }
        if(url.startsWith("root:"))
        {
            return url.replace("root:", getBaseUrl(instance));
        }
        if(url.startsWith("./"))
        {
            url=url.substring(2);
        }
        String base= instance.getBundleUrl();
        String q[]=url.split("\\.\\.\\/");
        String x[]= base.split("\\/");

        String p="";

        for(int i=0;i<x.length-q.length;i++)
        {
            p+=x[i]+"/";
        }

        p+=q[q.length-1];
        return p;
    }
    public static String getRootUrl(String url, WXSDKInstance  instance)
    {

        if(url.contains("root:"))
        {
            String q[]=url.split("root:");

            if(instance.getBundleUrl().startsWith("http"))
            {
                String x[]=instance.getBundleUrl().split("\\/");

                if(x.length>3)
                {
                    String res= x[0]+"//"+x[2]+"/"+Weex.basedir;
                    if(!res.endsWith("/"))
                        res+="/";
                    url=res+url.replace("root:","");

                }
            }
            else
            {
                url="app/"+q[1];
            }
            return url;
        }


        return url;


    }

    public static String getSingleRealUrl(String url)
    {

        if(url.startsWith("./"))
        {
            url=url.substring(2);
        }
        if(url.startsWith("/"))
        {
            url=url.substring(1);
        }
        if(url.contains("/./"))
        {
            url=url.replace("/./","/");
        }

        String q[]=url.split("\\.\\.\\/");
        String x[]= q[0].split("\\/");
        if(q.length==1)
            return q[0];
        String p="";
        if(x.length>=q.length-1)
        {
            for(int i=0;i<x.length-q.length+1;i++)
            {
                p+=x[i]+"/";
            }
        }
        p+=q[q.length-1];
        return p;
    }

}
