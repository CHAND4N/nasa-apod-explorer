package com.example.demo.config;

import java.time.Duration;
import java.util.List;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.cache.caffeine.CaffeineCache;
import org.springframework.cache.support.SimpleCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;
import com.github.benmanes.caffeine.cache.Caffeine;

@Configuration
@EnableCaching
public class AppConfig {

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

    @Bean
    public CacheManager cacheManager() {
        CaffeineCache apodByDate = new CaffeineCache("apodByDate",
            Caffeine.newBuilder()
                .maximumSize(500)                // max cache entries
                .expireAfterWrite(Duration.ofHours(12)) // cache expiry
                .recordStats()
                .build());

        CaffeineCache apodRecent = new CaffeineCache("apodRecent",
            Caffeine.newBuilder()
                .maximumSize(100)
                .expireAfterWrite(Duration.ofHours(6))
                .recordStats()
                .build());

        SimpleCacheManager mgr = new SimpleCacheManager();
        mgr.setCaches(List.of(apodByDate, apodRecent));
        return mgr;
    }
}
