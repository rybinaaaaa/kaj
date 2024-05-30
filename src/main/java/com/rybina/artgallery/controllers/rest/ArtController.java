package com.rybina.artgallery.controllers.rest;

import com.rybina.artgallery.dto.ArtDto;
import com.rybina.artgallery.services.ArtService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/arts")
@CrossOrigin(origins = "http://localhost:8888")
public class ArtController {

    private final ArtService artService;

    public ArtController(ArtService artService) {
        this.artService = artService;
    }

    @GetMapping("/all")
    public List<ArtDto> getAll() {
        return artService.findAll().stream().map(ArtDto::convertArtToDto).toList();
    }

    @GetMapping()
    public List<ArtDto> getArtPage(@RequestParam(defaultValue = "0") Integer page,
                                @RequestParam(defaultValue = "8") Integer size) {
//        System.out.println(artService.findAll(page, size).toString());
        return artService.findAll(page, size).stream().map(ArtDto::convertArtToDto).toList();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ArtDto> getArtById(@PathVariable Long id) {
        return artService.findById(id)
                .map(ArtDto::convertArtToDto)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/count")
    public Long count() {
        return artService.count();
    }
}
