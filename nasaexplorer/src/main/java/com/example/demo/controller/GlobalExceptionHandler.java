package com.example.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.Instant;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Map<String, Object> handleBadRequest(IllegalArgumentException ex) {
        return Map.of(
            "code", "BAD_REQUEST",
            "message", ex.getMessage(),
            "timestamp", Instant.now().toString()
        );
    }

    @ExceptionHandler(ResponseStatusException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Map<String, Object> handleResponseStatus(ResponseStatusException ex) {
        return Map.of(
            "code", ex.getStatusCode().toString(),
            "message", ex.getReason(),
            "timestamp", Instant.now().toString()
        );
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public Map<String, Object> handleGeneric(Exception ex) {
        return Map.of(
            "code", "INTERNAL_ERROR",
            "message", "Unexpected error",
            "timestamp", Instant.now().toString()
        );
    }
}
