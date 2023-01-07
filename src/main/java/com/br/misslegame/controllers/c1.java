package com.br.misslegame.controllers;

import org.json.simple.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")
public class c1 {

    @GetMapping("/firstgame")
    public ResponseEntity<String> c1 (){
        return ResponseEntity.ok("ok");
    }
}