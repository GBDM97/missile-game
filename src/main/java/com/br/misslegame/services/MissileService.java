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
        MissileService.move(i);
        return i;
    };
    private static Missile move(Integer number) {
        for (;  missiles[number].currentX == missiles[number].targetX || missiles[number].currentY == missiles[number].targetY;) {
            CompletableFuture.delayedExecutor(1, TimeUnit.SECONDS).execute(() -> {
                missile.currentX = missile.currentX + 1;
                missile.currentY = missile.currentY - 1;

              });
            
        }
        return missile;
    }
    public static void loc(){

    };
}
