package com.example.demo.controller;

import com.example.demo.dto.ApodDto;
import com.example.demo.service.ApodService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;


@RestController
@RequestMapping("/api/v1/apod")
@CrossOrigin(origins = "http://localhost:5173")
public class ApodController {

    private final ApodService apodService;

    public ApodController(ApodService apodService) {
        this.apodService = apodService;
    }

    @GetMapping("/today")
    public ApodDto today() {
        return apodService.getApodByDate(LocalDate.now(java.time.ZoneId.of("America/New_York")));
    }

    @GetMapping
    public ApodDto byDate(@RequestParam("date")
                          @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
                          LocalDate date) {
        return apodService.getApodByDate(date);
    }

    @GetMapping("/recent")
    public List<ApodDto> recent(@RequestParam(value = "days", defaultValue = "14") int days) {
        return apodService.getRecent(days);
    }
}
