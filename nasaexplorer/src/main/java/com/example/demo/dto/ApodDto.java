package com.example.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApodDto {
    private String date;
    private String title;
    private String explanation;
    
    @JsonProperty("media_type")
    private String mediaType;
    
    private String url;
    private String hdurl;
    private String copyright;
    
 // Getters
    public String getDate() {
        return date;
    }

    public String getTitle() {
        return title;
    }

    public String getExplanation() {
        return explanation;
    }

    public String getMediaType() {
        return mediaType;
    }

    public String getUrl() {
        return url;
    }

    public String getHdurl() {
        return hdurl;
    }

    public String getCopyright() {
        return copyright;
    }

    // Setters
    public void setDate(String date) {
        this.date = date;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public void setMedia_type(String mediaType) {
        this.mediaType = mediaType;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setHdurl(String hdurl) {
        this.hdurl = hdurl;
    }

    public void setCopyright(String copyright) {
        this.copyright = copyright;
    }
   
}

