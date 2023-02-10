package com.br.misslegame.models;

import lombok.Data;

@Data
public class Missile {
    public Double initX;
    public Double initY;
    public Double targetX;
    public Double targetY;
    public Integer id;
    public Double currentDist;
    public Double currentDir;
    public boolean blowUp = false;
}
