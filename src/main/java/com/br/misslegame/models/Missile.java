package com.br.misslegame.models;

import lombok.Data;

@Data
public class Missile {
    public Double initX;
    public Double initY;
    public Double targetX;
    public Double targetY;
    public Integer id;
    public Double currentX;
    public Double currentY;
    public float currentDir;
    public boolean blowUp = false;
}
