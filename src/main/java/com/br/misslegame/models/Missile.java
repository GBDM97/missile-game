package com.br.misslegame.models;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class Missile {
    public Integer initX;
    public Integer initY;
    public Integer targetX;
    public Integer targetY;
    public Integer id;
    public Integer currentX;
    public Integer currentY;
    public float currentDir;
    public boolean blowUp = false;
}
