package com.br.misslegame.models;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class NewLoc {
    
    @NotNull
    public int xInit;

    @NotNull
    public int yInit;

    @NotNull
    public int xTarget;

    @NotNull
    public int yTarget;
}
