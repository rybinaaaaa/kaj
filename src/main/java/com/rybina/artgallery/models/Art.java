package com.rybina.artgallery.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Value;

@Entity
@Table(name = "arts")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Art {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", length = 100)
    private String name;

    @Column(name = "author", length = 100)
    private String author;

    @Column(name = "imgSrc", length = 255)
    private String imgSrc;

    @Column(name = "mp3Src", length = 100)
    private String mp3Src;

    @Column(name = "description", length = 550)
    private String description;
}