package com.rybina.artgallery.repositories;

import com.rybina.artgallery.models.Art;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArtRepository extends JpaRepository<Art, Long> {
    Page<Art> findAll(Pageable pageable);
}
