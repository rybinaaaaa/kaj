package com.rybina.artgallery.services;

import com.rybina.artgallery.models.Lead;
import com.rybina.artgallery.repositories.LeadRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LeadService {

    private final LeadRepository leadRepository;

    public Lead save(Lead lead) {
        return leadRepository.save(lead);
    }

    public List<Lead> findAll() {
        return leadRepository.findAll();
    }
}
