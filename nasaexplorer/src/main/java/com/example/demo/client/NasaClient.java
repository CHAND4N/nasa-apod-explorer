package com.example.demo.client;

import com.example.demo.config.NasaApiProperties;
import com.example.demo.dto.ApodDto;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;

@Component
public class NasaClient {

    private final RestTemplate restTemplate;
    private final NasaApiProperties props;

    public NasaClient(RestTemplate restTemplate, NasaApiProperties props) {
	    this.restTemplate = restTemplate;
	    this.props = props;
    }
    private static final String BASE = "https://api.nasa.gov";

    public ApodDto fetchApod(LocalDate date) {
        String url = BASE + "/planetary/apod?api_key=" + props.getKey()
                + "&date=" + date.toString();
        ResponseEntity<ApodDto> res = restTemplate.getForEntity(url, ApodDto.class);
        return res.getBody();
    }

    // Batch fetch using NASA's start_date/end_date (returns array)
    public ApodDto[] fetchApodRange(LocalDate start, LocalDate end) {
        String url = BASE + "/planetary/apod?api_key=" + props.getKey()
                + "&start_date=" + start
                + "&end_date=" + end;
        ResponseEntity<ApodDto[]> res = restTemplate.getForEntity(url, ApodDto[].class);
        return res.getBody();
    }
}
