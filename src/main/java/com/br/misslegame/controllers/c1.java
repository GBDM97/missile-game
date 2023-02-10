package com.br.misslegame.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.br.misslegame.Employee;
import com.br.misslegame.models.Missile;
import com.br.misslegame.services.MissileService;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1")
public class c1 {
    @Autowired
    MissileService missileService;

    @GetMapping("/employees")
    @CrossOrigin (origins = "http://localhost:3000")
    public ResponseEntity<Employee> cc1 (){
        Employee employee = new Employee("Ghianzao", "Morelli", "The best");
        return ResponseEntity.ok(employee);
    }

    @PostMapping("/createOrLocate")
    @CrossOrigin (origins = "http://localhost:3000")
    public ResponseEntity<Object> newLoc(@Valid @RequestBody Missile missile) {
        if (missile.getId() != null){
            return ResponseEntity.ok(MissileService.locate(missile.id));
        }else{return ResponseEntity.ok(MissileService.create(missile));}
    }

    @GetMapping("/getTest")
    @CrossOrigin (origins = "http://localhost:3000")
    public ResponseEntity<Integer> gt (){
        return ResponseEntity.ok(200);
    }

    // @PostMapping("/getCurrentLoc")
    // @CrossOrigin (origins = "http://localhost:3000")
    // public ResponseEntity<Boolean> newLoc(@Valid @RequestBody Integer missileNumber) {
    //     backNewLoc.setinitX(newLoc.getinitX());
    //     backNewLoc.setinitY(newLoc.getinitY());
    //     return ResponseEntity.ok(back);
    // }
    
    
}