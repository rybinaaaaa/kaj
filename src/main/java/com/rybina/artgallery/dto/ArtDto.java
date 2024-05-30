package com.rybina.artgallery.dto;

import com.rybina.artgallery.models.Art;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Value;

@Value
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class ArtDto {
    Long id;
    String name;
    String author;
    String imgSrc;
    String mp3Src;
    String description;

    public static ArtDto convertArtToDto(Art art) {
        String ADDRESS = "http://127.0.0.1:8080/";
        return new ArtDto(art.getId(), art.getName(), art.getAuthor(), ADDRESS + art.getImgSrc(), art.getMp3Src(), art.getDescription());
    }
}
