package com.example.noctuaiordertask.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class ErrorResponse {

    private int status;
    private String message;
    private String tittle;
}
