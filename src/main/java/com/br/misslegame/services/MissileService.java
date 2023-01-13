package com.br.misslegame.services;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;
import org.springframework.stereotype.Service;
import com.br.misslegame.models.Missile;

@Service
public class MissileService {
    public static Integer i = 0;
    public static Missile[] missiles = new Missile[1000];
    public static Integer create(Missile missile){
        i = i + 1;
        missiles[i] = missile;
        CompletableFuture.runAsync(() -> {
            MissileService.findDirection(i);
            MissileService.move(i);
        });
        return i;
    };
    private static void move(Integer number) {
        for (;missiles[number].currentX != missiles[number].targetX && missiles[number].currentY != missiles[number].targetY;) {
            float d = missiles[number].currentDir;
            if (d > 0 && d < 90){
                float x = missiles[number].currentX;
                float y = missiles[number].currentY;
                float xIncrement = (90 - d)/90;
                float yIncrement = d/90;
                x = x + xIncrement;
                y = y + yIncrement;
                missiles[number].currentX = (Integer) Math.round(x);
                missiles[number].currentY = (Integer) Math.round(y);
            }
            if (d > 90 && d < 180){
                float x = missiles[number].currentX;
                float y = missiles[number].currentY;
                float xIncrement = (d - 90)/90;
                float yIncrement = (180 - d)/90;
                x = x - xIncrement;
                y = y + yIncrement;
                missiles[number].currentX = (Integer) Math.round(x);
                missiles[number].currentY = (Integer) Math.round(y);
            }
            if (d > 180 && d < 270){

            }
            if (d > 270 && d < 360){

            }
                try{Thread.sleep(4000);}catch(Exception e){System.out.println(e);} 
        }
        missiles[number].blowUp = true;
        try{Thread.sleep(4000);}catch(Exception e){System.out.println(e);}
        missiles[number] = null;
    }

    public static Missile locate(Integer i){
        if (missiles[i] != null){return missiles[i];}
        else {return null;}
        
    };

    public static boolean exist(int i){
        if (missiles[i] != null) {
            return true;
        } else {
            return false;
        }
    };

    private static void findDirection(Integer number) {
        Integer relativeX = missiles[number].targetX - missiles[number].initX;
        Integer relativeY = missiles[number].targetY - missiles[number].initY;
        var angle = (float)Math.toDegrees(Math.atan2(relativeY, relativeX));
        if (angle < 0){angle = angle + 180;}
        missiles[number].currentDir = (float)angle;

    }
}
