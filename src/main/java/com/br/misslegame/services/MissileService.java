package com.br.misslegame.services;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;
import org.springframework.stereotype.Service;
import com.br.misslegame.models.Missile;

@Service
public class MissileService {
    public static Integer i = 0;
    public static Missile[] missiles = new Missile[10];
    public static Integer create(Missile missile){

        for (i = 0; missiles[i] != null; i++);
        missiles[i] = missile;
        missiles[i].id = i;
        missiles[i].currentX = missiles[i].initX;
        missiles[i].currentY = missiles[i].initY;
        CompletableFuture.runAsync(() -> {
            MissileService.findDirection(i);
            MissileService.move(i);
        });
        return i;
    };
    private static void move(Integer number) {
        float d = missiles[number].currentDir;
        float x = missiles[number].currentX;
        float y = missiles[number].currentY;
        for (;(missiles[number].currentX != missiles[number].targetX || missiles[number].currentY != missiles[number].targetY);) {
            if (d >= 0.0 && d < 90.0){
                float xIncrement = d/90;
                float yIncrement = (90 - d)/90;
                x = x + xIncrement;
                y = y + yIncrement;
                missiles[number].currentX = (Integer) Math.round(x);
                missiles[number].currentY = (Integer) Math.round(y);
            }
            if (d >= 90.0 && d < 180.0){
                float xIncrement = (180 - d)/90;
                float yIncrement = (d - 90)/90;
                x = x + xIncrement;
                y = y - yIncrement;
                missiles[number].currentX = (Integer) Math.round(x);
                missiles[number].currentY = (Integer) Math.round(y);
            }
            if (d >= 180.0 && d < 270.0){
                float xIncrement = (d - 180)/90;
                float yIncrement = (270 - d)/90;
                x = x - xIncrement;
                y = y - yIncrement;
                missiles[number].currentX = (Integer) Math.round(x);
                missiles[number].currentY = (Integer) Math.round(y);
            }
            if (d >= 270.0 && d < 360.0){
                float xIncrement = (360 - d)/90;
                float yIncrement = (d - 270)/90;
                x = x - xIncrement;
                y = y + yIncrement;
                missiles[number].currentX = (Integer) Math.round(x);
                missiles[number].currentY = (Integer) Math.round(y);
            }
            Integer relativeX = missiles[number].targetX - missiles[number].currentX;
            Integer relativeY = missiles[number].targetY - missiles[number].currentY;
            float dist = (float) StrictMath.hypot(relativeX, relativeY);
            try{Thread.sleep(2000);}catch(Exception e){System.out.println(e);}
            if(dist <= 5.0){break;}
        }
        missiles[number].blowUp = true;
        try{Thread.sleep(5000);}catch(Exception e){System.out.println(e);};
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
        if(angle >= 0){angle = (180-angle) + 270;}
        if(angle >= 360){angle =angle - 360;}
        if(angle < 0){angle = 90 - angle;}
        missiles[number].currentDir = (float)angle;

    }
}
