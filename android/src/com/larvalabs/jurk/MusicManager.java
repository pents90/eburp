package com.larvalabs.jurk;

import android.app.Activity;
import android.content.Context;
import android.content.res.AssetFileDescriptor;
import android.media.MediaPlayer;

import java.io.IOException;

/**
 * @author John Watkinson
 */
public class MusicManager {

    private static final float VOLUME = 0.6f;

    private static MusicManager instance;

    private MediaPlayer player;
    private Context context;
    private String lastTrack;

    public static MusicManager get() {
        return instance;
    }

    public static void init(Context context) {
        if (instance == null) {
            instance = new MusicManager();
        }
        instance.context = context;
    }

    public void play(String track) {
        System.out.println("Playing track '" + track + "'.");
        try {
            if (track.equals(lastTrack)) {
                if (player != null && player.isPlaying()) {
                    // Same tune, keep rocking
                    return;
                }
            }
            if (player != null) {
                player.stop();
                player.release();
            }
            lastTrack = track;
            player = new MediaPlayer();
            AssetFileDescriptor descriptor = context.getAssets().openFd(track + ".ogg");
            player.setDataSource(descriptor.getFileDescriptor(), descriptor.getStartOffset(), descriptor.getLength());
            descriptor.close();
            player.prepare();
            player.setLooping(true);
            player.setVolume(VOLUME, VOLUME);
            player.start();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void resume() {
        if (lastTrack != null) {
            System.out.println("Resuming track '" + lastTrack + "'.");
            play(lastTrack);
        }
    }

    public void pause() {
        try {
            if (player != null) {
                player.stop();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void stop(boolean clearLast) {
        try {
            if (clearLast) {
                lastTrack = null;
            }
            if (player != null) {
                player.stop();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
