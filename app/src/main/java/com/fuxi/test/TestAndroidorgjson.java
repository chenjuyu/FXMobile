package com.fuxi.test;

import android.util.Log;

import org.json.JSONException;
import org.json.JSONObject;

public class TestAndroidorgjson {




   public static void main(String[] args) throws JSONException{

       String str="{'Code':'123','Name':'陈生'}";



           JSONObject json = new JSONObject(str);
         //  json.getJSONArray().to
           Log.i("Test",json.getString("Name"));


   }



}
