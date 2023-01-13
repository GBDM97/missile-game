package com.br.misslegame.services;

import java.util.ArrayList;
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
            MissileService.move(i);
        });
        return i;
    };
    private static void move(Integer number) {
        for (;  missiles[number].currentX != missiles[number].targetX && missiles[number].currentY != missiles[number].targetY;) {
                missiles[number].currentX = missiles[number].currentX + 1;
                missiles[number].currentY = missiles[number].currentY - 1;
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
}
