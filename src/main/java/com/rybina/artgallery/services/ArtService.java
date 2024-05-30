package com.rybina.artgallery.services;

import com.rybina.artgallery.models.Art;
import com.rybina.artgallery.repositories.ArtRepository;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArtService {

    private final ArtRepository artRepository;

    public ArtService(ArtRepository artRepository) {
        this.artRepository = artRepository;
    }

    public Optional<Art> findById(Long id) {
        return artRepository.findById(id);
    }

//    public void addArt(Art art) {
//        artRepository.save(art);
//    }

    public List<Art> findAll() {
        return (List<Art>) artRepository.findAll();
    }

    public List<Art> findAll(int offset, int limit) {
        return artRepository.findAll(PageRequest.of(offset, limit)).toList();
    }

    public Long count() {
        return artRepository.count();
    }
}
