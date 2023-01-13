package com.br.misslegame.services;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.br.misslegame.models.Missile;

@Service
public class MissileService {
    public static Integer i = 0;
    public static Object missles = new Object[1000];
    public static Integer create(int initX, int initY, int targetX, int targetY){
        i = i + 1;
        MissileService.move(initX, initY, targetX, targetY);
        return i;
    };
    private static void move(int initX, int initY, int targetX, int targetY) {

    }
    public static void loc(){

    };
}
