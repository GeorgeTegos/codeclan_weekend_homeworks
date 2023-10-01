package tb.homework.TeaBiscuits.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tb.homework.TeaBiscuits.models.Tea;
import tb.homework.TeaBiscuits.repositories.TeaRepository;

import java.util.List;

@RestController
public class TeaControllers {

    @Autowired
    TeaRepository teaRepository;

//    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping(value = "/api/teas")
    public List<Tea> getTeas(){
        return teaRepository.findAll();
    }

//    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping(value = "/api/teas")
    public Tea addTea(@RequestBody Tea tea){
        return teaRepository.save(tea);
    }

//    @CrossOrigin(origins = "http://localhost:5173")
    @DeleteMapping(value = "/api/teas/{id}")
    public void deleteTea(@PathVariable Long id){
        teaRepository.deleteById(id);
    }

//    @CrossOrigin(origins = "http://localhost:5173")
    @PutMapping(value = "/api/teas/{id}")
    public Tea ediTea(@PathVariable Long id,@RequestBody Tea newTea){
        return teaRepository.findById(id).map(tea ->{
            tea.setName(newTea.getName());
            tea.setBrand(newTea.getBrand());
            return teaRepository.save(tea);
        }).orElseGet(() ->{
            newTea.setId(id);
            return teaRepository.save(newTea);
        }
        );
    }



}
