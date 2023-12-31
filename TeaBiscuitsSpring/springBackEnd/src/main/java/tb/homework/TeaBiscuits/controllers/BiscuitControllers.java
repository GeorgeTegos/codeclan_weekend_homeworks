package tb.homework.TeaBiscuits.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tb.homework.TeaBiscuits.models.Biscuit;
import tb.homework.TeaBiscuits.repositories.BiscuitRepository;

import java.util.List;

@RestController
public class BiscuitControllers {

    @Autowired
    BiscuitRepository biscuitRepository;

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping(value = "/api/biscuits")
    public List<Biscuit> getAllBiscuits(){
        return biscuitRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PostMapping(value = "/api/biscuits")
    public Biscuit addBiscuit(@RequestBody Biscuit biscuit){
        return biscuitRepository.save(biscuit);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @DeleteMapping(value = "/api/biscuits/{id}")
    public void deleteTea(@PathVariable Long id){
        biscuitRepository.deleteById(id);
    }

    @CrossOrigin(origins = "http://localhost:5173")
    @PutMapping(value = "/api/biscuits/{id}")
    public Biscuit editBiscuit(@PathVariable Long id, @RequestBody Biscuit newBiscuit) {
        return biscuitRepository.findById(id).map(biscuit -> {
            biscuit.setName(newBiscuit.getName());
            biscuit.setBrand(newBiscuit.getBrand());
            return biscuitRepository.save(biscuit);
        }).orElseGet(() -> {
                    newBiscuit.setId(id);
                    return newBiscuit;
                }
        );
    }

}


