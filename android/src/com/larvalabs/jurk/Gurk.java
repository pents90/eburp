package com.larvalabs.jurk;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.Dialog;
import android.content.DialogInterface;
import android.graphics.Canvas;
import android.media.AudioManager;
import android.os.Bundle;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;
import android.webkit.WebBackForwardList;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.LinearLayout;
import com.larvalabs.gurk3.R;

import java.lang.reflect.Method;

public class Gurk extends Activity
{

    private WebInterface webInterface;

    private static boolean existing = false;
    private WebView webView;

    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        Log.i("GURK", "CREATE. Existing: " + existing + ", SavedInstance: " + (savedInstanceState != null));
        setContentView(R.layout.main);
        setVolumeControlStream(AudioManager.STREAM_MUSIC);
        SoundManager.init(this);
        MusicManager.init(this);
        LinearLayout parent = (LinearLayout) findViewById(R.id.webview);
        webView = new WebView(this);
        parent.addView(webView);
        webView.setWebChromeClient(new WebChromeClient() {
            public void onConsoleMessage(String message, int lineNumber, String sourceID) {
                Log.d("GURK", message + " -- From line "
                        + lineNumber + " of "
                        + sourceID);
            }
        });
        WebSettings settings = webView.getSettings();
        webInterface = new WebInterface(this);
        webView.addJavascriptInterface(webInterface, "Android");
        settings.setDomStorageEnabled(true);
        settings.setJavaScriptEnabled(true);
        webView.setInitialScale(100);
        webView.setBackgroundColor(0xFF000000);
        settings.setSupportZoom(false);
        settings.setBuiltInZoomControls(false);
        settings.setRenderPriority(WebSettings.RenderPriority.HIGH);
        settings.setPluginState(android.webkit.WebSettings.PluginState.ON_DEMAND);
        webView.loadUrl("file:///android_asset/index.html");
        existing = true;
    }

    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_BACK) {
            showDialog(0);
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    @Override
    public Dialog onCreateDialog(int id) {
        // Confirm back button
        AlertDialog.Builder adb = new AlertDialog.Builder(this);
        adb.setTitle("Exit");
        adb.setMessage("Withdraw from the land of Gurk?");
        adb.setPositiveButton("Aye", new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface dialog, int which) {
                finish();
            }
        });
        adb.setNegativeButton("Nay", null);
        AlertDialog dialog = adb.create();
        return dialog;
    }

    @Override
    public void onResume() {
        Log.i("GURK", "RESUME");
        super.onResume();
        MusicManager.init(this);
        String setting = webInterface.getData("_GurkSetting_music");
        Log.i("GURK", "Setting: '" + setting + "'");
        if (!"false".equals(setting)) {
            MusicManager.get().resume();
        }
    }

    @Override
    public void onPause() {
        Log.i("GURK", "PAUSE");
        super.onPause();
        //webView.onPause();
        //MusicManager.init(this);
        MusicManager.get().pause();
    }

    @Override
    public void onStop() {
        Log.i("GURK", "STOP");
        super.onStop();
        //MusicManager.init(this);
        MusicManager.get().stop(false);
    }

    @Override
    public void onStart() {
        Log.i("GURK", "START");
        super.onStart();
    }

    @Override
    public void onDestroy() {
        Log.i("GURK", "DESTROY");
        // webView.removeJavascriptInterface("Android");
        webView.destroy();
        super.onDestroy();
    }

}
