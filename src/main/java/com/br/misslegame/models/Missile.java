package com.br.misslegame.models;

import lombok.Data;

@Data
public class Missile {
    public Float initX;
    public Float initY;
    public Float targetX;
    public Float targetY;
    public Integer id;
    public Float currentX;
    public Float currentY;
    public float currentDir;
    public boolean blowUp = false;
}
