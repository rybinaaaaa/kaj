package com.rybina.artgallery.dto;

import lombok.Value;

@Value
public class LeadDto {
    String name;
    String surname;
    String email;
    String number;
    Long artId;
}
