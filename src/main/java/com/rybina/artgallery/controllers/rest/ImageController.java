package com.rybina.artgallery.controllers.rest;

import com.rybina.artgallery.services.ImageService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/artgallery")
@CrossOrigin(origins = "http://localhost:8888")
public class ImageController {

    final static String IMAGE_DIRECTORY = "src/main/resources/static/artgallery/images";
    final ImageService imageService;

    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @GetMapping("/{fileName}")
    private ResponseEntity<byte[]> getImage(@PathVariable("fileName") String fileName) {
        byte[] image = null;
        try {
            image = imageService.getImage(IMAGE_DIRECTORY, fileName);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok().body(image);
    }
}
