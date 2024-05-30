package com.rybina.artgallery.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@Table(name = "leads")
@RequiredArgsConstructor
public class Lead {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    String email;

    String name;

    String surname;

    String number;

    @ManyToOne
    @JoinColumn(name = "art_id", referencedColumnName = "id")
    Art art;
}
