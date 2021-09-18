package com.example.noctuaiordertask.Controller;

import com.example.noctuaiordertask.dto.ErrorResponse;
import com.example.noctuaiordertask.exception.OutOfStockException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class ExceptionController {

    @ExceptionHandler(OutOfStockException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleOutOfStockException(OutOfStockException exception){
        log.warn("Handling OutOfMemoryException " + exception.getMessage());
        return new ErrorResponse(HttpStatus.BAD_REQUEST.value(), exception.getMessage(), "there are not enough products in stock");
    }
}
