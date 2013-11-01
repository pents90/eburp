package com.larvalabs.jurk;

import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.content.res.Configuration;
import android.os.Build;
import android.util.DisplayMetrics;
import android.view.Display;
import android.widget.Toast;

/**
 * @author John Watkinson
 */
public class WebInterface {

    Activity context;
    private float scale;

    public WebInterface(Activity c) {
        context = c;
        // Compute scaling
        DisplayMetrics metrics = c.getResources().getDisplayMetrics();
        int densityDpiRaw = metrics.densityDpi;
        int densityDpi = densityDpiRaw / 40 * 40;
        scale = 240 / (float) densityDpi;
        // Next, screen scale
        int size = c.getResources().getConfiguration().screenLayout & Configuration.SCREENLAYOUT_SIZE_MASK;
        switch (size) {
            case Configuration.SCREENLAYOUT_SIZE_SMALL:
                scale = scale * 4 / 3;
                break;
            case Configuration.SCREENLAYOUT_SIZE_NORMAL:
                break;
            case Configuration.SCREENLAYOUT_SIZE_LARGE:
                scale = scale / 2;
                break;
            case Configuration.SCREENLAYOUT_SIZE_XLARGE:
                scale = scale / 2;
                break;
            default:
                // todo - compute it by hand, fun!
        }
        scale = scale * 4 / 5f;
        scale = 0.6f;
    }

    public void showToast(String toast) {
        Toast.makeText(context, toast, Toast.LENGTH_SHORT).show();
    }

    public void playSound(String sound) {
        SoundManager.get().play(sound);
    }

    public void playMusic(String track) {
        MusicManager.get().play(track);
    }

    public void stopMusic() {
        MusicManager.get().stop(true);
    }

    public String getData(String key) {
        SharedPreferences prefs = context.getSharedPreferences("data", Context.MODE_PRIVATE);
        return prefs.getString(key, null);
    }

    public boolean doCustomDraws() {
        return Build.VERSION.SDK_INT >= Build.VERSION_CODES.HONEYCOMB;
    }

    public void putData(String key, String value) {
        SharedPreferences prefs = context.getSharedPreferences("data", Context.MODE_PRIVATE);
        if (value == null) {
            prefs.edit().remove(key).commit();
        } else {
            prefs.edit().putString(key, value).commit();
        }
    }

    public int getScreenWidth() {
        Display display = context.getWindowManager().getDefaultDisplay();
        return display.getWidth();
    }

    public int getScreenHeight() {
        Display display = context.getWindowManager().getDefaultDisplay();
        return display.getHeight();
    }

    public float getContextScale() {
        return scale;
    }

}
