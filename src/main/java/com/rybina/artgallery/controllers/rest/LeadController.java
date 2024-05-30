package com.rybina.artgallery.controllers.rest;

import com.rybina.artgallery.dto.LeadDto;
import com.rybina.artgallery.models.Lead;
import com.rybina.artgallery.services.ArtService;
import com.rybina.artgallery.services.LeadService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/leads")
@CrossOrigin(origins = "http://localhost:8888")
@Slf4j
public class LeadController {
    private static final Logger logger
            = LoggerFactory.getLogger(LeadController.class);


    private final LeadService leadService;
    private final ArtService artService;

    @PostMapping
    public Lead add(@RequestBody LeadDto leadDto) {
        Lead lead = new Lead();

        lead.setName(leadDto.getName());
        lead.setSurname(leadDto.getSurname());
        lead.setEmail(leadDto.getEmail());
        lead.setNumber(leadDto.getNumber());

        logger.info(leadDto.toString());

        lead.setArt(artService.findById(leadDto.getArtId()).orElse(null));

        return leadService.save(lead);
    }

    @GetMapping
    public List<Lead> getAll() {
        return leadService.findAll();
    }
}
