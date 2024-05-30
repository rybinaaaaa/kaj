package com.rybina.artgallery.repositories;

import com.rybina.artgallery.models.Lead;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LeadRepository extends CrudRepository<Lead, Long> {

    List<Lead> findAll();
}
