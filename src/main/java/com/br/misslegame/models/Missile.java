package com.br.misslegame.models;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class Missile {

    @NotNull
    public Integer initX;

    @NotNull
    public Integer initY;

    @NotNull
    public Integer targetX;

    @NotNull
    public Integer targetY;

    public Integer id;
    public Integer currentX;
    public Integer currentY;
    public float currentDir;
    public boolean blowUp = false;
}
