package com.extensao.adotapet.Controller;


import com.extensao.adotapet.Animal.Animal;
import com.extensao.adotapet.Animal.AnimalRepository;
import com.extensao.adotapet.Animal.AnimalRequestDTO;
import com.extensao.adotapet.Animal.AnimalResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("animal")
public class AnimalController {

    @Autowired
    private AnimalRepository repository;

    @PostMapping
    public void cadastrarAnimal(@RequestBody AnimalRequestDTO data){
        Animal animalData = new Animal(data);
        repository.save(animalData);
        return;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<AnimalResponseDTO> getAll(){

        List<AnimalResponseDTO> animalList = repository.findAll().stream().map(AnimalResponseDTO::new).toList() ;
        return animalList;
    }
}
