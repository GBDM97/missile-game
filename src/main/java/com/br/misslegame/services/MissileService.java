package com.br.misslegame.services;

import java.util.concurrent.CompletableFuture;
import org.springframework.stereotype.Service;
import com.br.misslegame.models.Missile;

@Service
public class MissileService {
    public static Integer i = 0;
    public static float d;
    public static Missile[] missiles = new Missile[10];
    public static Missile create(Missile missile){

        for (i = 0; missiles[i] != null; i++);
        missiles[i] = missile;
        missiles[i].id = i;
        CompletableFuture.runAsync(() -> {
            MissileService.findDirection(i);
            MissileService.move(i);
        });
        return missiles[i];
    };
    private static void move(Integer number) {
        Double x = missiles[number].currentX;
        Double y = missiles[number].currentY;
        for (;(missiles[number].currentX != missiles[number].targetX || missiles[number].currentY != missiles[number].targetY);) {
            if (d >= 0.0 && d < 90.0){
                Double xIncrement = (double)d/90;
                Double yIncrement = (double)(90 - d)/90;
                x = x + xIncrement;
                y = y + yIncrement;
                missiles[number].currentX = x;
                missiles[number].currentY = y;
            }
            if (d >= -90.0 && d < 0.0){
                Double xIncrement = (double)(180 - d)/90;
                Double yIncrement = (double)(d - 90)/90;
                x = x + xIncrement;
                y = y - yIncrement;
                missiles[number].currentX = x;
                missiles[number].currentY = y;
            }
            if (d >= 90.0 && d < 180.0){
                Double xIncrement = (double)(d - 180)/90;
                Double yIncrement = (double)(270 - d) * 90;
                x = x - xIncrement;
                y = y - yIncrement;
                missiles[number].currentX = x;
                missiles[number].currentY = y;
            }
            if (d >= -180.0 && d < -90.0){
                Double xIncrement = (double)(360 - d)/90;
                Double yIncrement = (double)(d - 270)/90;
                x = x - xIncrement;
                y = y + yIncrement;
                missiles[number].currentX = x;
                missiles[number].currentY = y;
            }
            Double relativeX = missiles[number].targetX - missiles[number].currentX;
            Double relativeY = missiles[number].targetY - missiles[number].currentY;
            
            try{Thread.sleep(10);}catch(Exception e){System.out.println(e);}
            if(dist <= 30.0){break;}
            MissileService.findDirection(i);
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
        Double relativeX = missiles[number].targetX - missiles[number].initX;
        Double relativeY = missiles[number].targetY - missiles[number].initY;
        var angle = (float)Math.toDegrees(Math.atan2(relativeY, relativeX));
        missiles[number].currentDir = (double) angle;
        missiles[number].currentDist = (double) StrictMath.hypot(relativeX, relativeY);
        d = angle;
    }
    
}
