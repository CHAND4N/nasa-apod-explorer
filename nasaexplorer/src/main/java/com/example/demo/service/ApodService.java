package com.example.demo.service;

import com.example.demo.client.NasaClient;
import com.example.demo.dto.ApodDto;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

@Service
public class ApodService {

    private  final NasaClient nasaClient;
    
    public ApodService(NasaClient nasaClient) {
		this.nasaClient = nasaClient;
	}
    
    @Cacheable(cacheNames = "apodByDate", key = "#date")
    public ApodDto getApodByDate(LocalDate date) {
        // Guard: NASA doesn't return future dates
        if (date.isAfter(LocalDate.now())) {
            throw new IllegalArgumentException("Date cannot be in the future");
        }
        ApodDto dto = nasaClient.fetchApod(date);
        normalize(dto);
        return dto;
    }

    @Cacheable(cacheNames = "apodRecent", key = "#days")
    public List<ApodDto> getRecent(int days) {
        int safeDays = Math.max(1, Math.min(days, 60));
        LocalDate end = LocalDate.now(java.time.ZoneId.of("America/New_York"));
        LocalDate start = end.minusDays(safeDays - 1);
        ApodDto[] arr = nasaClient.fetchApodRange(start, end);
        List<ApodDto> list = Arrays.asList(arr);
        list.forEach(this::normalize);
        return list;
    }

    private void normalize(ApodDto dto) {
        // Optional normalization: ensure non-null strings for frontend safety
        if (!StringUtils.hasText(dto.getCopyright())) {
            dto.setCopyright("Unknown");
        }
    }
}
