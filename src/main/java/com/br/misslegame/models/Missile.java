package com.br.misslegame.models;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class Missile {
    
    // @NotNull
    public int id;

    @NotNull
    public int initX;

    @NotNull
    public int initY;

    // @NotNull
    public float currentX;

    // @NotNull
    public float currentY;

    public float currentDir;

    @NotNull
    public int targetX;

    @NotNull
    public int targetY;
}
