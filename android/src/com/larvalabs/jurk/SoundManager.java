package com.larvalabs.jurk;

import android.content.Context;
import android.content.SharedPreferences;
import android.content.res.Resources;
import android.media.AudioManager;
import android.media.SoundPool;
import android.preference.PreferenceManager;

import java.util.HashMap;

/**
 * @author John Watkinson
 */
public class SoundManager {

    private static final float VOLUME = 0.75f;

    private static SoundManager instance = null;
    private SoundPool pool;
    private Context context;
    private SharedPreferences preferences;
    private HashMap<String, Integer> soundMap;

    public static SoundManager get() {
        return instance;
    }

    public static void init(Context context) {
        if (instance == null) {
            instance = new SoundManager(context);
        }
    }

    public SoundManager(Context context) {
        this.context = context;
        pool = new SoundPool(2, AudioManager.STREAM_MUSIC, 0);
        soundMap = new HashMap<String, Integer>();
        soundMap.put("afflicted", pool.load(context, R.raw.afflicted, 1));
        soundMap.put("died", pool.load(context, R.raw.died, 1));
        soundMap.put("enhanced", pool.load(context, R.raw.enhanced, 1));
        soundMap.put("fire", pool.load(context, R.raw.fire, 1));
        soundMap.put("heal", pool.load(context, R.raw.heal, 1));
        soundMap.put("hit", pool.load(context, R.raw.hit, 1));
        soundMap.put("killed", pool.load(context, R.raw.killed, 1));
        soundMap.put("miss", pool.load(context, R.raw.miss, 1));
        soundMap.put("move", pool.load(context, R.raw.move, 1));
        soundMap.put("port", pool.load(context, R.raw.port, 1));
        soundMap.put("resist", pool.load(context, R.raw.resist, 1));
        soundMap.put("spell", pool.load(context, R.raw.spell, 1));
        soundMap.put("summon", pool.load(context, R.raw.summon, 1));
        soundMap.put("tele", pool.load(context, R.raw.tele, 1));
    }

    public void play(String sound) {
        try {
            AudioManager mgr = (AudioManager) context.getSystemService(Context.AUDIO_SERVICE);
            float streamVolumeCurrent = mgr.getStreamVolume(AudioManager.STREAM_MUSIC);
            float streamVolumeMax = mgr.getStreamMaxVolume(AudioManager.STREAM_MUSIC);
            float volume = streamVolumeCurrent / streamVolumeMax * VOLUME;
            pool.play(soundMap.get(sound), volume, volume, 1, 0, 1f);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
